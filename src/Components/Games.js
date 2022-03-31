import React from 'react'
import LaraTales from './Projects/Games/LaraTales';
import { Container, Row, Col } from 'react-bootstrap';

const Games = () => {
  return (
    <div className="page-section project" id="webProject" style={{marginBottom: '32px'}}>
        <Container>
            <div className="text-center">
                <h2 style={{marginBottom:'42px'}}>Our Lastest Game Projects</h2>
            </div>
            <Row>
                <Col xl={4} lg={4} md={6} xs={12} data-aos="zoom-out-up" data-aos-duration="1000">
                    <LaraTales />
                </Col>
                <Col xl={4} lg={4} md={6} xs={12} data-aos="zoom-out-up" data-aos-duration="1000">
                    <LaraTales />
                </Col>
                <Col xl={4} lg={4} md={6} xs={12} data-aos="zoom-out-up" data-aos-duration="1000">
                    <LaraTales />
                </Col>
                <Col xl={4} lg={4} md={6} xs={12} data-aos="zoom-out-up" data-aos-duration="1000">
                    <LaraTales />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Games