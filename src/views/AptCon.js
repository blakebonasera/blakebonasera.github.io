import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { Container, Row, Col } from 'reactstrap';
import Apartment from '../components/AptConCarousel';


const AptConnect = () => {
    return (
        <Spring from={{opacity:0, marginBottom:-1000}} to={{opacity:1, marginBottom:0}} config={{delay: 100}}>{(props)=> (
            <div style={props}>
        <Container>
             <Row>
                    <Col xs="12">
                        <h3>Apartment Connect</h3>
                    </Col>
                    </Row>
                    <Row>
                        <Col xs='12'>
                            <Apartment />
                        </Col>
                    </Row>
        </Container>
            </div>
        )}
        </Spring>
    )
}
export default AptConnect;