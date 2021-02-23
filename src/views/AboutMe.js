import React from "react";
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    Container,
    Row, 
    Col,
} from "reactstrap";
import Me from '../me.jpeg';
import Nala from '../Nala.JPG';

const AboutMe = (props) => {
    return (
        <Container fluid>
            <Card style={{backgroundColor:''}}>
                <CardBody>
                    <CardTitle tag="h3">About Me</CardTitle>
                </CardBody>
                <Container>
                    <Row>
                        <Col sm='6'>
                            <img
                                style={{border: '2px black solid', margin:'0px auto', borderRadius: '10px'}}
                                width="50%"
                                src={Me}
                                alt="Image of myself"
                            />
                        </Col>
                        <Col sm='6'>
                        <img
                                style={{border: '2px black solid', margin:'0px auto', borderRadius: '10px' }}
                                width="50%"
                                src={Nala}
                                alt="Image of myself"
                            />
                        </Col>
                    </Row>
                </Container>
                
                <CardBody>
                    <CardText>
                    Passionate full stack developer with a robust background in customer service and relationship management. <br/>
                    I love nothing more than finding elegant, efficient and functional solutions to complex technical problems.<br/>
                    I am quick to learn and love building out my existing skill set by picking up new technologies. <br/>
                    When I’m not coding on a super cool project, you’ll find me immersed in my passions for the auto industry, gaming and comedy. <br/> 
                    I’m currently looking for an opportunity to join a mission-driven team in a dynamic, fast-paced setting. 
                    </CardText>
                    
                </CardBody>
            </Card>
        </Container>
    );
};

export default AboutMe;
