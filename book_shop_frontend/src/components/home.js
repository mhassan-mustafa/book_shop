import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'


const ShowBooks = () => {

    const [books, setbooks] = useState([])

    const getbooks = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        setbooks(response.data)
    }

    useEffect(() => {
        getbooks()
    }, [])

    const total_books = books.length

    return (
        <>
            <div className="container py-4">
                <h2 className="mb-4 d-inline-block"> Books List <span className="fs-6 fw-none ms-1">({total_books} Books available)</span> </h2>
                <Link to='/add_book' className="float-end btn btn-primary me-5">Add New Book</Link>
                <div className="row mx-auto">
                    {
                        books.map((book) => (


                            <div key={book.id} className="card shadow p-1 m-2" style={{ width: "250px" }}>
                                <img style={{ height: '210px', width: '140px' }} className="rounded mx-5 card-img-top" src={book.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h6 className="card-title mb-1">{book.name}</h6>
                                    <p style={{ fontSize: '12px' }}>by <b>{book.author}</b></p>
                                    <h5 className="card-text text-danger">Rs. {book.price}</h5>
                                    <Link to={`/detail/${book.id}`} className="btn btn-primary mt-3">View Details</Link>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ShowBooks;