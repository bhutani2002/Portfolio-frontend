import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import './Events.css'
const EventCard = ({Link}) => {
    return (
        <MDBCard className = 'cardbo'>
            <MDBCardImage src = {Link} className='cardimg' alt='...' />
        </MDBCard>
    );
}

export default EventCard