import { useState, useEffect } from "react";
import { Col, Row, Alert, Container } from "react-bootstrap";
import { Element } from "react-scroll";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './NewsLetter.css'

export const Newsletter = ({ status, message, onValidated }) => {
  const [Email, setEmail] = useState("");


  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const formData = {
    email : Email,
}

// const handleMailBack = (Email) => {
//   console.log("sdfsav");
//   console.log(Email)
//   const folioEmail = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     requireTLS: true,
//     port: 587,
//     secure: false,
//     logger: true,
//     debug: true,
//     secureConnection: false,
//     auth: {
//         user: 'raagbhutani@gmail.com',
//         pass: 'ktlopncqumhwftct'
//     },
// });

// folioEmail.verify((error) => {
//     if(error)
//         console.log(error);
//     else
//         console.log("Verified : Good to go !!");
// })
//     const Mail = {
//         from : 'raagbhutani@gmail.com',
//         // to : 'raagbhutani@gmail.com , raagbhutani2002@gmail.com',
//         to : Email,
//         subject : "Subscription Email",
//         html : `<p>"Hello, welcome to our email 👋"</p>`
//     };
//     folioEmail.sendMail(Mail, (error) => {
//         // if(error)
//         //     res.json(error);
//         // else
//         //     res.json({code: 200, status: "Message Send"});
//         console.log("Okay");
//     });
// }







// Subscribe
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Email);
    
    
    // toast.success("Subscribed", {position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",});
      // toast.error("Try Again!", {position: "top-right",
      // autoClose: 5000,
      // hideProgressBar: false,
      // closeOnClick: true,
      // pauseOnHover: true,
      // draggable: true,
      // progress: undefined,
      // theme: "dark",});


    const postEmailSubscription = await fetch('/api/subscribe/email', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
          'content-type': 'application/json'
      }
  });
    let result = await postEmailSubscription.json();
    setEmail('');
    if (result.code === '03') {
      // setStatus({ success: true, message: 'Message sent successfully'});
      // console.log(result.code, result.message);
      toast.success("Subscribed", {position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",});
      
      // handleMailBack(Email);
      const maildata = {
        mail : Email,
      }
      const RevertEmail = await fetch('/api/revertsubscribe/email', {
        method: 'POST',
        body: JSON.stringify(maildata),
        headers: {
            'content-type': 'application/json'
        }
      });
      let revertmailresult = await RevertEmail.json();
    } else {
      // setStatus({ success: false, message: 'Something went wrong, please try again later.'});
      // console.log(result.code, result.message);
      toast.error(result.message, {position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",});
    }
  }

// Unsubscribe
  const handleUnSubmit = async (e) => {
    e.preventDefault();
    // console.log(Email);
    const postEmailUnSubscription = await fetch('/api/unsubscribe/' + `${Email}`, {
    method: 'GET',
    // body: JSON.stringify(formData),
    headers: {
        'content-type': 'application/json'
    }
  });
    let result = await postEmailUnSubscription.json();
    if (result.status === 200) {
      // setStatus({ success: true, message: 'Message sent successfully'});
      console.log(result.code, result.message);
    } else {
      // setStatus({ success: false, message: 'Something went wrong, please try again later.'});
      console.log(result.code, result.message);
    }
  }



  const clearFields = () => {
    setEmail('');
  }
  return (
    <Container>
      <Element id = "mynewsletter">
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp" id = "newsletter-sub">
          <Row>
            <Col lg={12} md={12} xl={5}>
              <h3>Subscribe to the Newsletter<br></br> & Never miss latest updates</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={12} xl={7}>
              <form onSubmit={handleSubmit}>
                <Row className="new-email-bx">
                  <Col md={9} sm = {12} className = "pb-2">
                    <input value={Email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  </Col>
                  <Col md={3} sm = {12}>
                    <button type="submit">Subscribe</button>
                  </Col>
                </Row>
              </form>
              {/* <button onClick = {handleUnSubmit}type="submit">Unsubscribe</button> */}
            </Col>
          </Row>
        </div>
      </Col>
      </Element>
      </Container>
  )
}