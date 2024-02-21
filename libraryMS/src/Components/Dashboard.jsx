import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";


const Dashboard = () => {
    return (
        <div className="container-fluid ">
            <div className="row flex-nowrap" style={{
                backgroundImage: "url('https://i.pinimg.com/originals/b8/00/87/b800878ec9ca72ed7f4ebe64e4aa1832.jpg')",
                backgroundRepeat: 'no-repeat',
            }}>
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 " style={{
                    backgroundImage:"url('../Images/dragon.jpg')",
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <Link
                            to="/dashboard"
                            className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
                        >
                            <span className="fs-5 fw-bolder d-none d-sm-inline">
                                Dharshini PG
                            </span>
                        </Link>
                        <ul
                            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                            id="menu"
                        >
                            <li className="w-100">
                                <Link
                                    to="/dashboard"
                                    className="nav-link text-white px-0 align-middle"
                                >
                                    <i className="fs-4 bi-speedometer2 ms-2"></i>
                                    <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                                </Link>
                            </li>
                            
                            <li className="w-100">
                                <Link
                                    to="/dashboard/category"
                                    className="nav-link px-0 align-middle text-white"
                                >
                                    <i className="fs-4 bi-columns ms-2"></i>
                                    <span className="ms-2 d-none d-sm-inline">Categories</span>
                                </Link>
                            </li>
                            
                            <li className="w-100" >
                                <Link
                                    to="/adminlogin"
                                    className="nav-link px-0 align-middle text-white"
                                >
                                    <i className="fs-4 bi-power ms-2"></i>
                                    <span className="ms-2 d-none d-sm-inline">Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col p-0 m-0" >
                    <div className="p-2 d-flex justify-content-center shadow ">
                        <h1 style={{ fontWeight: 'bold', color: '#ffffff' }}>Welcome to Harry Potter Book World</h1>
                    </div>
                    <Outlet />
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard
