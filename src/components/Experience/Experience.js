import React from 'react'
import './Experience.css'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import experience from '../../data/Experience'
import education from '../../data/Education'
// import WorkIcon from '@material-ui/icons/Work'
import { Star, Work } from '@mui/icons-material';
import { Element } from 'react-scroll'
const Experience = () => {
  return (
    <Element id = "myexperiences">
    <div className='experience' id = 'experiences'>
      <h2 className= 'exp-heading'> Experience </h2>
      {/* <p>The pleasure of work is open to anyone who can develop some specialised skill, provided that he can get satisfaction from the exercise of his skill without demanding universal applause.</p> */}
      {/* <blockquote class="otro-blockquote">
      The pleasure of work is open to anyone who can develop some specialised skill, provided that he can get satisfaction from the exercise of his skill without demanding universal applause.
  <span>- David Star Jordan</span>
</blockquote> */}
         <VerticalTimeline>
            {experience.map((experience,index)=>(
                <VerticalTimelineElement
                    key={index}
                    // contentStyle={{ background: "#71c9ce", color: "#fff" }}
                    contentStyle = {{background: "linear-gradient(90.21deg, #1B2E41 -5.91%, #D56935 111.58%)", color: "#fff", borderRadius: "30px"}}
                    contentArrowStyle={{
                        borderLeft: "7px solid  #2d4059"
                    }}
                    date={experience.date}
                    dateClassName="experience-date"
                    iconStyle={{ background: "#2d4059", color: "#e3fdfd" }}
                    icon={<Work/>}
                >
                    {/* <h3 dangerouslySetInnerHTML={{ __html: experience.event }} />
                    <h4 dangerouslySetInnerHTML={{ __html: experience.detail }} />
                    <h5 dangerouslySetInnerHTML={{ __html: experience.skills }} /> */}
                    {/* <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQFYvS19t2m6FA/company-logo_200_200/0/1654052655904?e=1668038400&v=beta&t=ZbC_Q2mFpzsgui2SNFnHlFjI7WHSjdL487fOGM2fmLI"/> */}
                    <div className = 'com-info'>
                      <a href = {experience.link} target = "_blank">
                        <div className = "exp-logo">
                          <img src={experience?.image}/>
                        </div>
                      </a>
                      <h3 className = "exp-event">{experience.event}</h3>
                      <h5 className = "exp-desc">{experience.detail}</h5>
                      <h6 className = "exp-comp">{experience.skills}</h6>
                    </div>
                </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
                iconStyle={{ background: "#71c9ce", color: "#2d4059" }}
                icon={<Star/>}
            />
         </VerticalTimeline>
         <h2 className= 'exp-heading mt-5' style = {{marginTop: "40px"}}> Education </h2>
         <VerticalTimeline>
            {education.map((experience,index)=>(
                <VerticalTimelineElement
                    key={index}
                    // contentStyle={{ background: "#71c9ce", color: "#fff" }}
                    contentStyle = {{background: "linear-gradient(90.21deg, #1B2E41 -5.91%, #D56935 111.58%)", color: "#fff", borderRadius: "30px"}}
                    contentArrowStyle={{
                        borderLeft: "7px solid  #2d4059"
                    }}
                    date={experience.date}
                    dateClassName="experience-date"
                    iconStyle={{ background: "#2d4059", color: "#e3fdfd" }}
                    icon={<Work/>}
                >
                    {/* <h3 dangerouslySetInnerHTML={{ __html: experience.event }} />
                    <h4 dangerouslySetInnerHTML={{ __html: experience.detail }} />
                    <h5 dangerouslySetInnerHTML={{ __html: experience.skills }} /> */}
                    {/* <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQFYvS19t2m6FA/company-logo_200_200/0/1654052655904?e=1668038400&v=beta&t=ZbC_Q2mFpzsgui2SNFnHlFjI7WHSjdL487fOGM2fmLI"/> */}
                    <div className = 'com-info'>
                      <a href = {experience.link} target = "_blank">
                        <div className = "exp-logo">
                          <img src={experience?.image}/>
                        </div>
                      </a>
                      <h3 className = "exp-event">{experience.event}</h3>
                      <h5 className = "exp-desc">{experience.detail}</h5>
                      <h6 className = "exp-comp">{experience.skills}</h6>
                    </div>
                </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
                iconStyle={{ background: "#71c9ce", color: "#2d4059" }}
                icon={<Star/>}
            />
         </VerticalTimeline>
    </div>
    </Element>
  )
}

export default Experience