import React from "react";
import {
    Card,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle,
} from "reactstrap";
import Me from '../me.jpeg';

const AboutMe = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">About Me</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                        Blake Bonasera
                    </CardSubtitle>
                </CardBody>
                <img
                    
                    width="25%"
                    src={Me}
                    alt="Card image cap"
                />
                <CardBody>
                    <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </CardText>
                    <CardLink href="#">Card Link</CardLink>
                    <CardLink href="#">Another Link</CardLink>
                </CardBody>
            </Card>
        </div>
    );
};

export default AboutMe;
