import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ManGo from './Projects/Web/ManGo';

const WebApp = () => {
  return (
    <div className="page-section project" id="webProject">
        <Container>
            <div className="text-center">
                <h2 style={{marginBottom:'42px'}}>Our Lastest Web Projects</h2>
            </div>
            <Row>
                {/* increase data-aos-duration +500 every Col */}
                <Col xl={4} lg={4} md={6} xs={12} data-aos="fade-up" data-aos-duration="1000">
                    <ManGo />
                </Col>
                <Col xl={4} lg={4} md={6} xs={12} data-aos="fade-up" data-aos-duration="1500">
                    <ManGo />
                </Col>
                <Col xl={4} lg={4} md={6} xs={12} data-aos="fade-up" data-aos-duration="2000">
                    <ManGo />
                </Col>
                <Col xl={4} lg={4} md={6} xs={12} data-aos="fade-up" data-aos-duration="2500">
                    <ManGo />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default WebApp