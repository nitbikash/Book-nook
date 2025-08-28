import React, { useEffect, useState } from 'react';
import BookCard from "../books/BookCard.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const categories = ["Choose a genre", "Romance", "Fantasy", "Horror", "Young-Adult", "Literary-Fiction", "Children", "Historical-Fiction", "Self-Help", "Dystopian", "Science-Fiction", "Biography", "Philosophy", "History", "Post-Apocalyptic", "Adventure", "Marketing", "Business"];

const TopSelling = () => {
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

    useEffect(() => {
        fetch("books.json")
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    const filteredBooks = selectedCategory === "Choose a genre"
        ? books
        : books.filter(book => book.category.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <div className="py-10">
            <h2 className="text-3xl font-semibold mb-6">Top Seller</h2>

            {/* Dropdown */}
            <div className="mb-8 flex items-center">
                <select
                    name="category"
                    id="category"
                    className="border bg-[#EAEAEA] border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:shadow-outline"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

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
                    filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard book={book} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default TopSelling;
