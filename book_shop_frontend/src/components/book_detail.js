import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function Detail() {
    const { id } = useParams();
    const [book, setBook] = useState("");

    const bookDetail = async () => {
        const response = await axios.get(`http://localhost:8000/api/${id}`);
        setBook(response.data);
    }

    useEffect(() => {
        bookDetail();
    }, [id]);

    return (
        <>
            <div className="container">
                <h1>Book Details</h1>

                <div className="row mt-5">
                    <div className="col-3 p-5 pt-0 text-center">
                        <img className="img-fluid shadow" src={book.image} alt="Book Image" /><br />
                        <Link className="btn btn-primary mt-4" to={`/update/${book.id}`}>Update Book</Link><br />
                        <Link className="btn btn-danger mt-4" to={`/delete/${book.id}`}>Delete Book</Link>
                    </div>
                    <div className="col-6 pt-3 card px-4 shadow position-static">
                        <div className="mb-1">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <u>Title</u>:-
                            </label>
                            <p className="ms-5 ps-5 fw-bold">{book.name}</p>
                        </div>
                        <div className="mb-1">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <u>Author</u>:-
                            </label>
                            <p className="ms-5 ps-5 fw-bold">{book.author}</p>
                        </div>
                        <div className="mb-1">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <u>Price</u>:-
                            </label>
                            <p className="ms-5 ps-5 fw-bold">Rs. {book.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;

