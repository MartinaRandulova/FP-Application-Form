import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FormFP() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState('not submitted');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [linkedIn, setLinkedIn] = useState('not submitted');
  const [motivation, setMotivation] = useState('not submitted');
  const [selfEvaluation, setSelfEvaluation] = useState('not submitted');

  const handleClose = () => setShow(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      event.preventDefault();
    } else {
      setShow(true);
      event.preventDefault();
    }

    setValidated(true);

  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" maxLength="256" id="First-Name" onChange={(event) =>
                setFirstName(event.target.value)
              } />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" maxLength="256" id="Last-Name" required onChange={(event) =>
                setLastName(event.target.value)
              } />
              <Form.Control.Feedback type="invalid">
                Please provide your last name.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" maxLength="256" placeholder="you@website.com" required onChange={(event) =>
            setEmail(event.target.value)
          } />
          <Form.Control.Feedback type="invalid">
            Please provide your e-mail address in correct format.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>LinkedIn URL</Form.Label>
          <Form.Control type="text" maxLength="256" onChange={(event) =>
            setLinkedIn(event.target.value)
          } />

        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Why would you like to become part of the Femme Palette team?</Form.Label>
          <Form.Control as="textarea" className="text-area" maxLength="5000" onChange={(event) =>
            setMotivation(event.target.value)
          } />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Why are you the best candidate for this role?</Form.Label>
          <Form.Control as="textarea" className="text-area" maxLength="5000" onChange={(event) =>
            setSelfEvaluation(event.target.value)
          } />
        </Form.Group>
        <Row className="mt-5">
          <Button variant="secondary" type="submit">Submit Application</Button>
        </Row>
      </Form>
      <Modal centered size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you, your submission has been received!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>You have submitted following data:</h5>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Email: {email}</p>
          <p>LinkedIn URL: {linkedIn}</p>
          <p>Your motivation: {motivation}</p>
          <p>Why are you the best candidate: {selfEvaluation}</p>
          <hr />
          <p>We'll contact you within next weeks about the next steps.</p>
        </Modal.Body>

      </Modal>
    </>
  );
}

export default FormFP;