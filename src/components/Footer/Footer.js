import React from 'react'
import { Container, Row, Col} from "react-bootstrap";
import './Footer.css'
import logofooter from '../../assets/images/name-logo-footer.jpg'
const Footer = () => {
  return (
    <footer className="footer">
      <Container className = "setFooter">
        <Row className="footrow">
          {/* <Newsletter /> */}
          <Col size={12} md = {6}>
            <div className="footrow p-2">
              {/* <a href="/" className="foot__logo"><span className="gray-color"> &lt;</span><span className="logo-name">Raag</span><span className="gray-color">/&gt;</span></a> */}
              <a href="/" className="foot__logo"><img src = {logofooter}/></a>
            </div>
          </Col>
          {/* <Col size={12} md = {6} className="text-center text-sm-end"> */}
          <Col size={12} md = {6} className="text-center">
            <div className="footer-bottom">
              <ul className="social-network social-circle py-3">
                <li>
                  <a className = "icoLinkedin" href="https://www.linkedin.com/in/raagbhutani" target="_blank"><i className = "fab fa-linkedin"></i></a>
                </li>
                <li>
                  <a className = "icoGitHub" href="https://github.com/bhutani2002" target="_blank"><i className = "fab fa-github"></i></a>
                </li>
                <li>
                  <a className="icoInstagram" href = "https://www.instagram.com/raag_bhutani/" target="_blank"><i className = "fab fa-instagram"></i></a>
                </li>
                <li>
                  <a className="icoMail" href = "mailto:raagbhutani2002@gmail.com"><i className = "fas fa-envelope"></i></a>
                </li>
              </ul>
            </div>
            <p> © Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer