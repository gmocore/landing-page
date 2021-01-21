import React from 'react';
import { Card } from 'react-bootstrap'
const ImageBanner = (props) => {
    return (
        <Card className="bg-dark text-dark text-shadow mt-5 shadow p-1 mb-5 bg-white rounded">
            <Card.Img src={props.img} alt="Card image" />
            <Card.ImgOverlay className="d-flex justify-content-end">
                <div className="container text-container d-flex justify-content-center flex-column align-items-end">
                    <Card.Title className="card-text mt-4">Build Animals</Card.Title>
                    <Card.Text className="card-text">
                        Welcome to the BuildAnimals world, 
                    </Card.Text>
                    <Card.Text className="card-text">
                        where anything is possible, 
                    </Card.Text>
                    <Card.Text className="card-text">
                       and everything is learnable.
                    </Card.Text>
                    

                </div>
            </Card.ImgOverlay>
        </Card>
    );
}

export default ImageBanner;