import React from 'react'
import { Container, Image } from 'react-bootstrap'
import logo from '../assets/img/MI.png'

const Footer = () => {
    let timeNow = new Date().getFullYear();

  return (
    <div className="page-section bg-dark" style={{marginBottom: '0px !important'}}>
        <Container className="footer text-center">
            <Container>
                <Image fluid={true} src={logo} className="footer-logo" />
            </Container>
            <Container>
                Copyright &copy; {timeNow} <br /> Informatics Engineering Projects Showcase
            </Container>
            <Container>
                UNESA
                Faculty of Applied Science, Ketintang, Gayungan, Surabaya, East Java 60231
            </Container>
        </Container>

    </div>
  )
}

export default Footer