import React,{useEffect,useState} from 'react'
// import { Link } from 'react-router-dom'
import './Navbar.css'
import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import logonavbar from '../../assets/images/name-logo.jpg'
function Navba() {
    const[show,handleShow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window?.scrollY > 100 ? handleShow(true) : handleShow(false);
        })
        return ()=>{
            window.removeEventListener("scroll",null);
        }
    },[])
    const handleSetActive = function(to) {
      // console.log(to);
    }
    return (
        // <div className={`nav__original ${show && "nav__black"}`}>
        //     <div className="left-header">
        //             {/* <Link to="/" className="nav__logo"><span className="grey-color"> &lt;</span><span className="logo-name">Raag</span><span className="grey-color">/&gt;</span></Link> */}
        //             <a href="/" className="nav__logo"><span className="gray-color"> &lt;</span><span className="logo-name">Raag</span><span className="gray-color">/&gt;</span></a>
        //     </div>
        //     <div className="right-header">
        //             <div className="header-link"><a href='#home'>Home</a></div>
        //             <div className="header-link"><a href='#skills'>Skills</a></div>
        //             <div className="header-link"><a href='#projects'>Projects</a></div>
        //             <div className="header-link"><a href='#events'>Events</a></div>
        //             <div className="header-link"><a href='#experiences'>Experience</a></div>
        //             <div className="header-link"><a href='#newsletter-sub'>Newsletter</a></div>
        //             <div className="connect"><button onClick={() => console.log('connect')}><a href="#connect">Let’s Connect</a></button></div>
        //     </div>
        // </div>








      //   <Navbar expand="md" className={`nav__original ${show && "nav__black"}`}>
      //   <Container>
      //     <Navbar.Brand href="/">
      //     <a href="/" ><span className="gray-color"> &lt;</span><span className="logo-name">Raag</span><span className="gray-color">/&gt;</span></a>
      //     {/* <a href="/" className="nav__logo"><span className="gray-color"> &lt;</span><span className="logo-name">Raag</span><span className="gray-color">/&gt;</span></a> */}
      //     </Navbar.Brand>
      //     <Navbar.Toggle aria-controls="basic-navbar-nav">
      //       <span className="navbar-toggler-icon"></span>
      //     </Navbar.Toggle>
      //     <Navbar.Collapse id="basic-navbar-nav">
      //       <Nav className="ms-auto">
      //           <Nav.Link className="header-link" href='#home'>Home</Nav.Link>
      //           <Nav.Link className="header-link" href='#skills'>Skills</Nav.Link>
      //           <Nav.Link className="header-link"><a href='#projects'>Projects</a></Nav.Link>
      //           <Nav.Link className="header-link"><a href='#events'>Events</a></Nav.Link>
      //           <Nav.Link className="header-link"><a href='#experiences'>Experience</a></Nav.Link>
      //           <Nav.Link className="header-link"><a href='#newsletter-sub'>Newsletter</a></Nav.Link>
      //           <Nav.Link className="connect"><button onClick={() => console.log('connect')}><a href="#connect">Let’s Connect</a></button></Nav.Link>
      //       </Nav>
      //       {/* <span className="navbar-text">
      //         <div className="social-icon">
      //           <a href="#"><img src={navIcon1} alt="" /></a>
      //           <a href="#"><img src={navIcon2} alt="" /></a>
      //           <a href="#"><img src={navIcon3} alt="" /></a>
      //         </div>
      //         <HashLink to='#connect'>
      //           <button className="vvd"><span>Let’s Connect</span></button>
      //         </HashLink>
      //       </span> */}
      //     </Navbar.Collapse>
      //   </Container>
      // </Navbar>

      <Navbar expand="xl" className={`nav__original ${show && "nav__black"}`}>
        <Container>
          <Navbar.Brand href="/">
          {/* <Nav.Link href="/" ><span className="gray-color"> &lt;</span><span className="logo-name">Raag</span><span className="gray-color">/&gt;</span></Nav.Link> */}
          <Nav.Link href="/" className = 'BrandLogo'><img src = {logonavbar} width = '130px' height = '60px'/></Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto Navbar-Links">
            <Link activeClass="active" className="header-link" to="myhome" spy={true} smooth={true} offset={-10} duration={500} onSetActive={handleSetActive}>Home</Link>
            <Link activeClass="active" className="header-link" to="myskills" spy={true} smooth={true} offset={10} duration={500} onSetActive={handleSetActive}>Skills</Link>
            <Link activeClass="active" className="header-link" to="myprojects" spy={true} smooth={true} offset={10} duration={500} onSetActive={handleSetActive}>Projects</Link>
            <Link activeClass="active" className="header-link" to="myevents" spy={true} smooth={true} offset={10} duration={500} onSetActive={handleSetActive}>Events</Link>
            <Link activeClass="active" className="header-link" to="myexperiences" spy={true} smooth={true} offset={10} duration={500} onSetActive={handleSetActive}>Experience</Link>
            <Link activeClass="active" className="header-link" to="myexperiences" spy={true} smooth={true} offset={10} duration={500} onSetActive={handleSetActive}>Education</Link>
            <Link activeClass="active" className="header-link" to="mynewsletter" spy={true} smooth={true} offset={0} duration={500} onSetActive={handleSetActive}>NewsLetter</Link>
            <Link activeClass="active" className="header-link connect" to="myconnect" spy={true} smooth={true} offset={100} duration={500} onSetActive={handleSetActive}><button activeClass="active" onClick={() => console.log('connect')}><a href="#connect">Let’s Connect</a></button></Link>


            {/* <Nav.Link className="header-link" href='#home'>Home</Nav.Link>
            <Nav.Link className="header-link" href='#skills'>Skills</Nav.Link>
            <Nav.Link className="header-link"><a href='#projects'>Projects</a></Nav.Link>
            <Nav.Link className="header-link"><a href='#events'>Events</a></Nav.Link>
            <Nav.Link className="header-link"><a href='#experiences'>Experience</a></Nav.Link>
            <Nav.Link className="header-link"><a href='#newsletter-sub'>Newsletter</a></Nav.Link>
            <Nav.Link className="connect"><button onClick={() => console.log('connect')}><a href="#connect">Let’s Connect</a></button></Nav.Link> */}
                {/* <NavLink to="/Vehicles" className="header-link">Vehicles</NavLink>
                <NavLink to="/AboutUs" className="header-link">AboutUs</NavLink>
                <NavLink to="/Careers" className="header-link">Careers & Training</NavLink>
                <NavLink to="/PlantDetails" className="header-link">Plant Details</NavLink>
                <NavLink to="/Procurement" className="header-link">Procurement</NavLink>
                  <NavLink><Button className = 'logbut'>Logout</Button></NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navba
