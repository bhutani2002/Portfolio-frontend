import React, { useState, useEffect} from 'react'
import './Skills.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from 'react-bootstrap';
import { Element } from 'react-scroll';

const SkillCircle = (props) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if(val === props.proficiency)
        return;
      setVal(val + 1);
    }, 90);
    return () => {
      clearInterval(intervalId);
    };
  });
  return(
    <div className="item">
      <div class="circular-progress" style={{background: `conic-gradient(#233950 ${val * 3.6}deg, #ededed 0deg)`}}>
        <span><span id="progress-value" style={{color: "red"}} >{val}</span> %</span>
      </div>
      <h5>{props.skillname}</h5>
    </div>
  );
}
const Skills = () => {
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
    <Element id="myskills">
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <blockquote class="otro-blockquote">
                          Wisdom is to knowing what to do next. Skill is knowing how to do it. And virtue is doing it.<span>- David Star Jordan</span>
                        </blockquote>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                          <SkillCircle skillname = "Machine Learning" proficiency = {80} />
                          <SkillCircle skillname = "React JS" proficiency = {85} />
                          <SkillCircle skillname = "Deep Learning" proficiency = {80} />
                          <SkillCircle skillname = "Node JS" proficiency = {70} />
                          <SkillCircle skillname = "C Programming" proficiency = {80} />
                          <SkillCircle skillname = "C++ Programming" proficiency = {80} />
                          <SkillCircle skillname = "Python" proficiency = {70} />
                          <SkillCircle skillname = "JavaScript" proficiency = {70} />
                          <SkillCircle skillname = "Team Work" proficiency = {90} />
                          <SkillCircle skillname = "Communication" proficiency = {90} />
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </Element>
  )
}

export default Skills