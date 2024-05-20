import React from "react";

function about() {
    return (
        <>
            <div>
                <div class="container text-center mt-5 rounded" style={{ backgroundColor: '#EBEBEB', width: '800px'}}>
                    <div class="about-div px-5 py-2">
                        <p class="heading fs-2 fw-bold">About</p>
                        <p class="para text-start">Welcome to our Book Shop, where the world of literature meets the convenience of online shopping. Our platform offers a diverse collection of books spanning various genres, from timeless classics to contemporary bestsellers. With a seamless blend of Django on the backend and React on the frontend, we've crafted a user-friendly experience that prioritizes both functionality and aesthetics..</p>

                        <p class="para text-start">Powered by Django's robust backend framework, we ensure secure transactions, efficient data management, and seamless scalability. On the frontend, React brings our website to life with dynamic interfaces, smooth navigation, and interactive features, providing users with a captivating browsing experience.</p>

                        <p class="para text-start">Whether you're an avid reader seeking your next literary adventure or a casual browser exploring new titles, our Book Shop is your go-to destination. Join us in celebrating the joy of reading and discover a world of imagination at your fingertips.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default about;