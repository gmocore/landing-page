import React from 'react';
import ImageBanner from '../components/ImageBanner'
import animalImg from "../img/BuildAnimals Poster - Horizontal (Medium).jpg"
import fish from "../img/fish.jpg"
import ProjectCard from '../components/ProjectCard';



const Home = () => {
    return (

        <div className="container">
            <ImageBanner img={animalImg} />
            <div className="container-fluid mt-4">
                <div className="d-flex justify-content-between card-row m-2">

                {/* <ProjectCard img={fish} />
                <ProjectCard img={fish} />
                <ProjectCard img={fish} /> */}
                </div>
            </div>


        </div>
    );
}

export default Home;