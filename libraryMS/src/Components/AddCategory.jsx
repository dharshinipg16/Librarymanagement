import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {
    const [category, setCategory] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/add_category', {category})
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/category')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
        <div className='p-3 rounded w-25 border' style={{ backgroundColor: 'rgba(255, 255, 255, 0)', borderColor: '#ffffff' }}>
        <h2 style={{ fontWeight: 'bold', color: '#ffffff' }}>Add category</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="category" style={{color: '#ffffff'}}><strong>category:</strong></label>
                    <input type="text" id='category' name='category' placeholder='Enter category'
                     onChange={(e) => setCategory(e.target.value)} className='form-control rounded-0'/>
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-2'>Add category to Library System</button>
            </form>
        </div>
    </div>
  )
}

export default AddCategory