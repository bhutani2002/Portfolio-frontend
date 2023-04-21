import { CollectionsBookmarkSharp } from '@mui/icons-material';
import { AppBar } from '@mui/material';
import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Element } from 'react-scroll';
import { ProjectCard } from "./ProjectCard";
import star from '../../assets/images/star_home.jpg'
import counseling from '../../assets/images/Counseling-Home.png'
import job from '../../assets/images/Job-Portal.png'
import WB from '../../data/WBprojects'
import DML from '../../data/DL-MLProjects'
import Ex from '../../data/Extras'
const Projects = () => {
    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: '',
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: '',
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: '',
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: '',
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: '',
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: '',
        },
      ];
  return (
    <Element id="myprojects">
    <div className="project" id="projects">
      {/* <div className='overlay'></div> */}
      <h2 className= 'proj-heading'> Projects </h2>
      <div>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center flex-wrap flex-basis-fit-content" id="pills-tab">
                    <Nav.Item className = "pro-tab">
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className = "pro-tab">
                      <Nav.Link eventKey="second">Machine / Deep Learning</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className = "pro-tab">
                      <Nav.Link eventKey="third">Extras</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          WB.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {/* <p>met consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                      <Row>
                        {
                          DML.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                      <Row>
                        {
                          Ex.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
            </Tab.Container>
      </div>
              {/* <Row>
                {
                projects.map((project, index) => {
                    return (
                        <ProjectCard
                        key={index}
                        {...project}
                        />
                        )
                    })
            }
              </Row> */}
             
    </div>
    </Element>
  )
}

export default Projects