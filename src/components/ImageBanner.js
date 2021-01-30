import React from 'react';
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom"

const ImageBanner = (props) => {
    return (
        <Card className="text-dark text-shadow mt-5 mb-5">
            <Card.Img src={props.img} alt="Card image" />
            <Card.ImgOverlay className="d-flex justify-content-end">
                <div className="container text-container d-flex justify-content-center flex-column align-items-end">
                    <Card.Text className="card-text">
                        <Link to="/build-animals" className="text-light h4">
                            See More
                            <i class="far fa-arrow-alt-circle-right ml-2 text-light"></i>
                            </Link>
                    </Card.Text>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
}

export default ImageBanner;