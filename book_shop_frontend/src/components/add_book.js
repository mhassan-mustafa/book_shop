import axios from "axios";
import React, { useState } from "react";


const AddBook = () => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [done, setdone] = useState(null);

    const AddBookData = async (e) => {
        e.preventDefault(); // Prevent default form submission

        let formData = new FormData();
        formData.append('name', name);
        formData.append('author', author);
        formData.append('price', price);

        if (image !== null) {
            formData.append('image', image);
        }

        await axios.post('http://localhost:8000/api/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        setdone("Book Added Successfully");

        setName('');
        setAuthor('');
        setPrice('');
        setImage(null);

    };

    return (
        <div className="container">
            <h2 className="text-center pt-4">Add new book</h2>
            <div className="w-50 mx-auto mb-3 card px-4 py-3 shadow-lg position-static">
                {done && <div className="text-success text-center mt-2">{done}</div>}

                <form method="post" encType="multipart/form-data" onSubmit={AddBookData}>
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
                            Add Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBook;
