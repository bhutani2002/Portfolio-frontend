import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
// import 'animate.css';
import contactImg from '../../assets/images/download-removebg-preview.png'
// import contactImg from '../../assets/images/images-removebg-preview.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'
import TrackVisibility from 'react-on-screen';
import { Element } from "react-scroll";

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setButtonText("Sending...");

    let response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    
    let result = await response.json();
    
    setFormDetails(formInitialDetails);
    
    
    if (result.code === 200) {
      // setStatus({ success: true, message: 'Message sent successfully'});
      toast.success("Message sent successfully", {position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",});
    } else {
      // setStatus({ success: false, message: 'Something went wrong, please try again later.'});

      toast.error("Something went wrong, please try again later.", {position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",});
    }
  };

  return (
    <Element id = "myconnect">
    <section className="contact" id="connect">
      {/* <Container> */}
        <Row className="align-items-center">
          <Col size={12} md={6} className = "p-4">
            <div className="contimage">
              <img className="ContactImage" src={contactImg} alt="Contact Us"/>
            </div>
          </Col>
          <Col size={12} md={6}>
                <div>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row className = "p-4">
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" pattern="[789][0-9]{9}" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {/* {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    } */}
                  </Row>
                </form>
              </div>
          </Col>
        </Row>
      {/* </Container> */}
    </section>
    </Element>
  )
}
export default Contact