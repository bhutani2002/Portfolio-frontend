import React, { useState, useEffect} from 'react'
import './Events.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from 'react-bootstrap';
import EventCard from './EventCard';
import image from '../../assets/images/header1.jpg';
import hackto21 from '../../assets/images/Hactoberfest-2021.jpg'
import hackto22 from '../../assets/images/Hactoberfest-2022.jpg'
import Cloud30 from '../../assets/images/30-Days-Of-Google-Cloud.png'
import HashCode from '../../assets/images/Google-HashCode.jpg'
import kickstart from '../../assets/images/google-kickstart.jpg'
import SolutionChallenge from '../../assets/images/Google-solution-challenge-2022.jpg'
import HackUiet from '../../assets/images/HackUiet.jpg'
import Kpmg from '../../assets/images/Kpmg-Ideation-Challenge.jfif'
import MetaHackerCup from '../../assets/images/Meta-HackerCup.png'
import QwikLabs from '../../assets/images/QwikLabs.jfif'
import { Element } from 'react-scroll';
const Events = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Element id = "myevents">
    <section className="event" id = "events">
        <Container>
            <Row>
                <Col>
                    <div className="event-bx">
                        <h2>Events</h2>
                        {/* <p>Innovation is a outcome of a habit not a random habbit - Sukant Ratnakar</p> */}
                        {/* <p>“Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.” -Paul J. Meyer</p> */}
                        <blockquote class="otro-blockquote">
                        Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.
  <span>- Paul J. Meyer</span>
</blockquote>
                        <Carousel responsive={responsive} infinite={true} className="event-slider">
                          <a href = "https://drive.google.com/file/d/1ap8vyxMZru8V0iyJyNb-WLpgA_R4rH53/view?usp=share_link" target = "_blank"><EventCard Link = {hackto22} className = "e-item"/></a>
                          <a href = "https://drive.google.com/file/d/1az-Gtt7rr2aOW514_QV2IKQVhhSz_xWG/view?usp=share_link" target = "_blank"><EventCard Link = {hackto21} className = "e-item"/></a>
                          <a href = "https://drive.google.com/file/d/1Pn28HtNbsE3lOOoyDmjlqOkCPAFA_jTu/view?usp=share_link" target = "_blank"><EventCard Link = {Cloud30} className = "e-item"/></a>
                          <a href = "https://drive.google.com/file/d/1qGMJN5JRMPSsh9c_bvg5cdbGjk7m53x0/view?usp=share_link" target = "_blank"><EventCard Link = {QwikLabs} className = "e-item"/></a>
                          <a href = "https://drive.google.com/file/d/105Tl6aMidBQ5mOdg5r3IBMoePz1IaEiD/view?usp=share_link" target = "_blank"><EventCard Link = {MetaHackerCup} className = "e-item"/></a>
                          <a href = "https://drive.google.com/file/d/1eLW65OwK3AwjqUM-3R6aLhmF-45vNUVc/view?usp=share_link" target = "_blank"><EventCard Link = {Kpmg} className = "e-item"/></a>
                          <a href = "https://drive.google.com/file/d/1UVz_xMYXmJBVHBe8x_b2OxdLm3ePrvlw/view?usp=share_link" target = "_blank"><EventCard Link = {HackUiet} className = "e-item"/></a>
                          <a href = "https://drive.google.com/file/d/1OK0PNtu4KkyX6uYbg4WnTMvUMOYzhfJM/view?usp=share_link" target = "_blank"><EventCard Link = {SolutionChallenge} className = "e-item"/></a>
                          <a href = "https://drive.google.com/file/d/1gIfoCUlJjaWimvOyZ_usv1cflKi1lUkZ/view?usp=share_link" target = "_blank"><EventCard Link = {kickstart} className = "e-item"/></a>
                          <a href = "https://drive.google.com/file/d/1tuGWXtvkkyCgEY3GFmjfGcdDcE2UPyao/view?usp=share_link" target = "_blank"><EventCard Link = {HashCode} className = "e-item"/></a>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </Element>
  )
}

export default Events