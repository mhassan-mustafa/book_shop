import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Delete_book = () => {
    const { id } = useParams();
    const [book, setbook] = useState("");
    const [deleted, setdeleted] = useState(false);


    const get_book = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/api/${id}`);
        setbook(response.data)
    }

    useEffect(() => {
        get_book()
    }, [id])

    const confirm_delete = async () => {
        await axios.delete(`http://127.0.0.1:8000/api/${id}`)
        setdeleted(true)
    }

    if (deleted) {
        return (
            <>
                <div className="container text-center">
                    <p className="text-success fs-4 mt-5"><span className="fs-3 fw-bold">"{book.name}"</span> deleted Successfully.!</p>
                    <Link to="/" className="btn btn-primary">Back to Home</Link>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="container text-center">
                <p className="fs-4 mt-5">You want to delete this book <span className="fs-3 fw-bold">"{book.name}"</span></p>
                <div className="text-center w-50 mx-auto">
                    <Link to={`/detail/${id}`} className="btn btn-primary d-inline-block float-start">Cancel</Link>
                    <button className="btn btn-danger float-end" onClick={confirm_delete}>Confirm Delete</button>
                
                </div>
            </div>
        </>
    )

}

export default Delete_book
