
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Update_book = () => {

    const { id } = useParams()
    const [book, setBook] = useState("")
    const [success, setSuccess] = useState(false)
    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState(null)

    const get_book = async () => {
        const response = await axios.get(`http://localhost:8000/api/${id}/`);
        let book_data = response.data

        setBook(book_data)
        setName(book_data.name)
        setAuthor(book_data.author)
        setPrice(book_data.price)
        setImage(book_data.image)
    }

    useEffect(() => {
        get_book()
    }, [id])

    const update_data = async (e) => {
        e.preventDefault()

        let form_data = new FormData()

        form_data.append('name', name)
        form_data.append('author', author)
        form_data.append('price', price)
        form_data.append('image', image)

        await axios.put(`http://localhost:8000/api/${id}/`, form_data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        setSuccess(true)
    }

    if (success) {
        return (
            <>
                <div className="container text-center">
                    <p className="text-success fs-4 mt-5"><span className="fs-3 fw-bold">"{book.name}"</span> Updated Successfully.!!!</p>
                    <Link to={`/detail/${id}`} className="btn btn-primary">Book Detail</Link>
                </div>
            </>
        )
    }

    return (
        <div className="container">
            <h2 className="text-center pt-4">Update book</h2>
            <div className="w-50 mx-auto mb-3 card px-4 py-3 shadow-lg position-static">
                <form method="post" encType="multipart/form-data" onSubmit={update_data}>
                    <div className="mb-2">
                        <label htmlFor="title" className="form-label">
                            Title:
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            id="title"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="author" className="form-label">
                            Author:
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            id="author"
                            name="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="price" className="form-label">
                            Price:
                        </label>
                        <input
                            className="form-control"
                            type="number"
                            id="price"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="image" className="form-label">
                            Image:
                        </label>
                        <input
                            className="form-control"
                            type="file"
                            id="image"
                            name="image"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary w-25">
                            Update Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Update_book


{/*
const UpdateBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [success, setSuccess] = useState(false);
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);

    const getBook = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/${id}`);
            const bookData = response.data;
            setBook(bookData);
            setName(bookData.name);
            setAuthor(bookData.author);
            setPrice(bookData.price);
            setImage(null); // Initially set image to null for update
        } catch (error) {
            console.error("Error fetching the book data:", error);
        }
    };

    useEffect(() => {
        getBook();
    }, [id]);

    const updateData = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('name', name);
        formData.append('author', author);
        formData.append('price', price);

        // Append the image only if it's a file (new upload) and not a URL
        if (image && typeof image !== 'string') {
            formData.append('image', image);
        }

        try {
            const response = await axios.put(`http://localhost:8000/api/${id}/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSuccess(true);
            console.log("Update response:", response.data);
        } catch (error) {
            console.error("Error updating the book:", error);
        }
    };

    if (success) {
        return (
            <div className="container text-center">
                <p className="text-success fs-4 mt-5">
                    <span className="fs-3 fw-bold">"{book.name}"</span> Updated Successfully.!!!
                </p>
                <Link to={`/detail/${id}`} className="btn btn-primary">Book Detail</Link>
            </div>
        );
    }

    return (
        <div className="container">
            <h2 className="text-center pt-4">Update book</h2>
            <div className="w-50 mx-auto mb-3 card px-4 py-3 shadow-lg position-static">
                <form method="post" encType="multipart/form-data" onSubmit={updateData}>
                    <div className="mb-2">
                        <label htmlFor="title" className="form-label">
                            Title:
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            id="title"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="author" className="form-label">
                            Author:
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            id="author"
                            name="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="price" className="form-label">
                            Price:
                        </label>
                        <input
                            className="form-control"
                            type="number"
                            id="price"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="image" className="form-label">
                            Image:
                        </label>
                        <input
                            className="form-control"
                            type="file"
                            id="image"
                            name="image"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary w-25">
                            Update Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateBook;
*/}