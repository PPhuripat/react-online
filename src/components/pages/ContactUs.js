import React from 'react'
import {Card,Button} from 'react-bootstrap'

const ContactUs = () => {
    return (
        <div className="container ">
           <div className="row">
               <div className="col-md-12 mt-4">
               <Card>
  <Card.Header>Contact US</Card.Header>
  <Card.Body>
    <Card.Title>Phuripat Bungwai</Card.Title>
    <Card.Text>
      You can call me "copter" that is my nickname. Have a nice Day
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
               </div>
           </div>
        </div>
    )
}

export default ContactUs