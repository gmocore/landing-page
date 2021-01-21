import React, { useState } from 'react';
import { Card } from 'react-bootstrap'

const ProjectCard = (props) => {
    return ( 
        <Card className="project-card">
            <Card.Img src={props.img} />
            <Card.ImgOverlay>
                <Card.Title>Project title</Card.Title>
                <Card.Text>
                    Some details or a brief overview of the project that seems pertinent to mention
                </Card.Text>
                <Card.Text>more info or perhaps a link to the full project page</Card.Text>
            </Card.ImgOverlay>

        </Card>
            
     );
}

export default ProjectCard;