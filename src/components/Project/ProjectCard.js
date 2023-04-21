import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import './Project.css'
import counseling from '../../assets/images/Counseling-Home.png'
import job from '../../assets/images/Job-Portal.png'
import star from '../../assets/images/star_home.jpg'
import snake from '../../assets/images/snake_game.jpg'

const ProjectCard = ({ imgUrl, title, description, skills, weblink }) => {
  return (
    // <div>
    //     ProjectCard
    // <div className="card">
    //         <div className="card-img">
    //         <a href="https://www.youtube.com/watch?v=vLXX5dK9AuM&list=PLVPXALZWDGojL9rN8hmR6wPxknlHpNdbj" target="_blank" rel="noopener noreferrer">
    //             <div className="card-front">
    //                 <img
    //                 //   class="card-back"
    //                 // src={imgUrl}
    //                 // src="https://i.ibb.co/vLHFvdc/84590758-removebg-preview.png"
    //                 src="https://i.ibb.co/8XW2d0m/ap-bg-mobile-ad732e1a4adcca25716a90b73cc51fce2621dd01ebacac987dba70b7ccaed969.jpg"
    //                 alt="Project"
    //                 height="400px"
    //                 width="auto"
    //                 />
    //             </div>
    //             <div className="card-back">
    //                     <div className="project-desc">
    //                         {/* <h4>{title}</h4> */}
    //                         <h3>Student-Counselling</h3>
    //                         {/* <div className='desc'>Description: {description}</div> */}
    //                         <div className='desc'><p>Built a web app, a one-stop destination to solve all the counselling link chaos. Gathered all the important government counselling links for the respective states so that a person or student of any state can check for their own and other state's counselling schedule and procedures, with just a click and does not have to wander around different websites to get their desired search.</p></div>
    //                         {/* <div className='skills'>Technology Stack : {skills}</div> */}
    //                         <div className='skills'><p><span>Technology Stack</span>HTML,CSS,Bootstrap,Javascript,EJS,Nodejs,Express</p></div>
    //                     </div>
    //             </div>
    //             </a>
    //         </div>
    //   </div> 

    // <Col size={12} sm={6} md={4}>
    //   <div className="proj-imgbx">
    //     <img src={imgUrl} />
    //     <div className="proj-txtx">
    //       <h4>{title}</h4>
    //       <span>{description}</span>
    //     </div>
    //   </div>
    // </Col>


//     <Col size={12} sm={6} md={4}>
//       <a href = "https://bhutani2002.github.io/normalNewWebsite/" target = "_blank">
//       <div className="proj-imgbx">
//         <div className="avg">
//           {/* <img src="https://i.ibb.co/vLHFvdc/84590758-removebg-preview.png" /> */}
//           {/* <img src = {counseling} /> */}
//           {/* <img src = {job} /> */}
//           <img src = {star} />
//           {/* <img src = {snake} /> */}
//         </div>
//         <div className="proj-txtx">
//           <h4>Student Counseling</h4>
//           <span><p><span>Technology Stack: HTML, CSS, JS</span></p></span>
//           <h6>Gathered all the important government counselling links for the respective
// states so that a person or student of any state can check for their own and other state's counselling schedule and procedures, with just a click and does not have to wander around different websites to get their desired search.</h6>
//         </div>
//       </div>
//       </a>
//     </Col>

      <Col size={12} sm={6} md={4}>
      <a href = {weblink} target = "_blank">
      <div className="proj-imgbx">
        <div className="avg">
          {/* <img src="https://i.ibb.co/vLHFvdc/84590758-removebg-preview.png" /> */}
          {/* <img src = {counseling} /> */}
          {/* <img src = {job} /> */}
          <img src = {imgUrl} />
          {/* <img src = {snake} /> */}
        </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span><p><span>{skills}</span></p></span>
          <h6>{description}</h6>
        </div>
      </div>
      </a>
      </Col>


// </div>
  )
}

export {ProjectCard}
// export default ProjectCard