import React from 'react';
import ImageBanner from '../components/ImageBanner'
import animalImg from "../img/BuildAnimals-Wide.jpg"
import ProjectCard from '../components/ProjectCard';



const Home = () => {
    return (

        <div className="container">
            <ImageBanner img={animalImg} />
        </div>
    );
}

export default Home;