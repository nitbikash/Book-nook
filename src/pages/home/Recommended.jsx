import React, {useEffect, useState} from 'react';
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import BookCard from "../books/BookCard.jsx";

import 'swiper/css';
import 'swiper/css/navigation';

const Recommended = (props) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("books.json")
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);
    return (
        <div className="py-16">
            <h2 className="text-3xl font-semibold mb-6">
                Recommended for You
            </h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                rewind={true}

                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {/* Render Filtered Books */}
                {
                    books.length > 0 && books.map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard book={book} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

    );
}

export default Recommended;
