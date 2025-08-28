import React from 'react';
import Banner from "./Banner.jsx";
import TopSelling from "./TopSelling.jsx";
import Recommended from "./Recommended.jsx";
import News from "./News.jsx";

const Home = () =>{
    return (
        <>
            <Banner/>
            <TopSelling/>
            <Recommended/>
            <News/>
        </>
    )
}

export default Home;
