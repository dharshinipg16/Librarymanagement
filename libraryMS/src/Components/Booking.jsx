import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const Booking = () => {
    const [books, setBooks] = useState([]);
    const [searchTermTitle, setSearchTermTitle] = useState('');
    const [searchTermDesc, setSearchTermDesc] = useState('');
    const [searchTermAuthor, setSearchTermAuthor] = useState('');
    const [selectedBook, setSelectedBook] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setBooksPerPage] = useState(5); // Default to 5 books per page

    useEffect(() => {
        axios.get('http://localhost:3000/auth/booking')
            .then(result => {
                if (result.data.Status) {
                    setBooks(result.data.Result);
                } else {
                    alert(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    }, []);

    const handleTitleSearchChange = (event) => {
        setSearchTermTitle(event.target.value);
    };

    const handleDescSearchChange = (event) => {
        setSearchTermDesc(event.target.value);
    };

    const handleAuthorSearchChange = (event) => {
        setSearchTermAuthor(event.target.value);
    };

    const handleBookClick = (book) => {
        setSelectedBook(book);
    };

    const handleClose = () => {
        setSelectedBook(null);
    };

    // Logic to get current books depending on pagination
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books
        .filter(book =>
            book.title.toLowerCase().includes(searchTermTitle.toLowerCase()) &&
            book.desc.toLowerCase().includes(searchTermDesc.toLowerCase()) &&
            book.author.toLowerCase().includes(searchTermAuthor.toLowerCase())
        )
        .slice(indexOfFirstBook, indexOfLastBook);

    // Logic to paginate
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Change number of items per page
    const handleChangeItemsPerPage = (itemsPerPage) => {
        setBooksPerPage(itemsPerPage);
        setCurrentPage(1); // Reset to first page when changing items per page
    };

    return (
        <div className='px-5 mt-3'>
            <div className='d-flex justify-content-center'>
                <h3 className="text-decoration-underline" style={{ fontWeight: 'bold', color: '#ffffff' }}>AVAILABLE BOOKS</h3>
            </div>
            <Link to="/dashboard/add_category" className='btn btn-success'>
               Add Category
            </Link>

            <div className="mt-3">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTermTitle}
                    onChange={handleTitleSearchChange}
                    className="form-control mb-2"
                />
                <input
                    type="text"
                    placeholder="Search by description..."
                    value={searchTermDesc}
                    onChange={handleDescSearchChange}
                    className="form-control mb-2"
                />
                <input
                    type="text"
                    placeholder="Search by author..."
                    value={searchTermAuthor}
                    onChange={handleAuthorSearchChange}
                    className="form-control"
                />
            </div>
            <div className='d-flex justify-content-center p-2 mb-3 mt-5 shadow-lg'>
                <h2 style={{ color: '#ffffff' }}>
                    The list of books currently available
                </h2>
            </div>
            <div className='mt-3'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Copies</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentBooks.map(book => (
                            <tr key={book.id}>
                                <td>
                                    <button className='btn' onClick={() => handleBookClick(book)}>
                                        {book.title}
                                    </button>
                                </td>
                                <td>{book.desc}</td>
                                <td>{book.author}</td>
                                <td>{book.category}</td>
                                <td>{book.copies}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                <select onChange={(e) => handleChangeItemsPerPage(parseInt(e.target.value))}>
                    <option value="5">5 per page</option>
                    <option value="10">10 per page</option>
                    <option value="15">15 per page</option>
                </select>
                {Array.from({ length: Math.ceil(books.length / booksPerPage) }, (_, i) => (
                    <button key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
                ))}
            </div>

            <Modal show={selectedBook !== null} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedBook?.title} Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Description: {selectedBook?.desc}</p>
                    <p>Author: {selectedBook?.author}</p>
                    {/* <p>Published Date: {selectedBook?.published_date}</p> */}
                    <p>Copies: {selectedBook?.copies}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Booking;
