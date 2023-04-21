import { useState, useEffect } from "react";
import './Banner.css'
import ParticlesConfig from "../Particles/ParticleConfig";
import Particles from "react-tsparticles";
import { Container, Row, Col, Button, Image} from "react-bootstrap";
import { Element, Link } from "react-scroll";
// import avatarpic from "../../assets/images/my_pic_new.jpg"
// import avatarpic from '../../assets/images/Raag_Pic_11.jfif'
import avatarpic from '../../assets/images/Raag.jpg'
// import '../Particles/particles.css'

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting , setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100)
    const toRotate = ["Web Developer", "ML/DL Enthusiast", "Web Designer"];
    const period = 1000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta);
        return ()=>{clearInterval(ticker)};
    },[text])

    const tick=()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ""){
            setIsDeleting(false)
            setLoopNum(loopNum + 1);
            setDelta(350);
        }
    }
    const styles = {
        root: {
            fontFamily: "sans-serif",
            textAlign: "center",
            height: "100%",
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
  };
    
  return (
    <>
        <Particles style={{ position: "absolute" }} height="95%" width="95%"
            params={{particles: {
              color: {
              value: "#000000"
            },
            line_linked: {
              color: {
                value: "#000000"
              }
            },
            number: {
              value: 50
            },
            size: {
              value: 3
            }
          }
        }}/>
        {/* <div className="banner" id = "home">
        <div className="upper_banner">
            <div className="left_banner">
                <div className="rotate">
                    <h1 className="name">{`Hi! I'm Raag Bhutani,`}</h1>
                    <div>
                        <span className="sub_text">{text}|</span>
                    </div>
                </div>
                <p className="description">A Web Development and Machine Learning/Deep Learning enthusiast. I am passionate about solving problems using programming , research and web-development. Looking forward to build a career in the field of Software , Data Science and Application Development.</p>
                <div className="banner_buttons">
                    <button onClick={() => console.log('connect')} className="banner_connect"><a href="#connect">Let's Connect</a></button>
                    <button onClick={() => console.log('Resume')} className="banner_resume"><a href="https://drive.google.com/file/d/1K264nK7La9nRfVsUq5uYHrlJzvxvmzpZ/view?usp=sharing" target = "_blank">View my Resume</a></button>
                </div>
            </div>
            <div className="right_banner">
                <img src="https://i.ibb.co/vLHFvdc/84590758-removebg-preview.png" className="avatar" alt="Avatar" border="0"/>
            </div>
        </div>
        <div className='banner_fadeBottom'></div>
    </div> */}


<Element id="myhome">
<div className="banner" id = "home">
        <Row className="upper_banner row">
            <Col md={8} className="left_banner">
                <div className="rotate">
                    <h1 className="name">{`Hi! I'm Raag Bhutani,`}</h1>
                    <div>
                        <span className="sub_text">{text}|</span>
                    </div>
                </div>
                <p className="description">A Web Development and Machine Learning/Deep Learning enthusiast. I am passionate about solving problems using programming , research and web-development. Looking forward to build a career in the field of Software , Data Science and Application Development.</p>
                <div className="banner_buttons">
                <Link activeClass="active" to="myconnect" spy={true} smooth={true} offset={10} duration={500}><button onClick={() => console.log('connect')} className="banner_connect"><a href="#connect">Let's Connect</a></button></Link>
                    <button onClick={() => console.log('Resume')} className="banner_resume"><a href="https://drive.google.com/file/d/1WuCdZ6k2EkjaOYcoSxRIlqBNtJE7GBCS/view?usp=sharing" target = "_blank">View my Resume</a></button>
                </div>
            </Col>
            <Col md={4}className="right_banner">
                {/* <img src="https://i.ibb.co/vLHFvdc/84590758-removebg-preview.png" className="avatar" alt="Avatar" border="0"/> */}
                <img src= {avatarpic} className="avatar" alt="Avatar" border="0"/>
            </Col>
        </Row>
        <div className='banner_fadeBottom'></div>
    </div>
    </Element>
    </>
)
}

export default Banner