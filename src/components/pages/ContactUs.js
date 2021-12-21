import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className="container">
      <div>
        <p></p>
        <Card width="30%">
          <Card.Header>Contact Us</Card.Header>
          <Card.Body>
            <Card.Title>Phuripat Bungwai</Card.Title>
            <Card.Text>
             Nickname "Copter"
              <li className="mt-3">
                My favorite subject = Japanese , Work = Chef
              </li>
              <li className="mt-3">Hobby Basketball</li>
              <li className="mt-3">ไม่ต้องพูดดดดดดด</li>
            </Card.Text>
            <p>For my github visit link below.</p>
            <Button href="https://github.com/PPhuripat" variant="outline-dark">
              <BsGithub /> Click here
            </Button>
            <p></p>
            <p>Contact me : bu.phuripat_st@tni.ac.th</p>
          </Card.Body>
        </Card>
        <p></p>
      </div>
    </div>
  );
};

export default ContactUs;