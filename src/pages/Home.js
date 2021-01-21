import React from 'react';
import ImageBanner from '../components/ImageBanner'
import animalImg from "../img/BuildAnimals Poster - Horizontal (Medium).jpg"
import animalImgVertical from "../img/BuildAnimals Poster.jpg"
import fish from "../img/fish.jpg"
import ProjectCard from '../components/ProjectCard';
import HorizontalCard from '../components/HorizontalCard';



const Home = () => {
    return (

        <div className="container">
            <ImageBanner img={animalImg} />
            <div className="container-fluid">
                <div className="d-flex justify-content-between card-row m-2">

                {/* <ProjectCard img={fish} />
                <ProjectCard img={fish} />
                <ProjectCard img={fish} /> */}
                </div>
                <HorizontalCard img={animalImgVertical}/>


            </div>


        </div>
    );
}

export default Home;