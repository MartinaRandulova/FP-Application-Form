import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SuccessModal from '../Modal/SuccessModal';

function FormFP() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [submittedValues, setSubmittedValues] = useState({
    firstName: 'not submitted',
    lastName: 'not submitted',
    email: 'not submitted',
    linkedIn: 'not submitted',
    motivation: 'not submitted',
    selfEvaluation: 'not submitted'
  })

  const handleClose = () => setShow(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setShow(true);
      setSubmittedValues({ ...submittedValues })
    }
    event.preventDefault();
    setValidated(true);
  };

  const storeValue = (event) => {
    switch (event.target.id) {
      case ("First-Name"):
        submittedValues.firstName = event.target.value;
        break;
      case ("Last-Name"):
        submittedValues.lastName = event.target.value;
        break;
      case ("Email"):
        submittedValues.email = event.target.value;
        break;
      case ("Linkedin-url"):
        submittedValues.linkedIn = event.target.value;
        break;
      case ("Motivation"):
        submittedValues.motivation = event.target.value;
        break;
      case ("Self-Evaluation"):
        submittedValues.selfEvaluation = event.target.value;
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" maxLength="256" id="First-Name" onChange={storeValue} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>*Last Name</Form.Label>
              <Form.Control type="text" maxLength="256" id="Last-Name" required onChange={storeValue} />
              <Form.Control.Feedback type="invalid">
                Please provide your last name.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>*Email Address</Form.Label>
          <Form.Control type="email" maxLength="256" placeholder="you@website.com" id="Email" required onChange={storeValue} />
          <Form.Control.Feedback type="invalid">
            Please provide your e-mail address in correct format.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>LinkedIn URL</Form.Label>
          <Form.Control type="text" maxLength="256" id="Linkedin-url" onChange={storeValue} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Why would you like to become part of the Femme Palette team?</Form.Label>
          <Form.Control as="textarea" className="text-area" maxLength="5000" id="Motivation" onChange={storeValue} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Why are you the best candidate for this role?</Form.Label>
          <Form.Control as="textarea" className="text-area" maxLength="5000" id="Self-Evaluation" onChange={storeValue} />
        </Form.Group>
        <Row className="mt-5 mx-0">
          <Button variant="secondary" type="submit">Submit Application</Button>
        </Row>
      </Form>
      <SuccessModal show={show} handleClose={handleClose} submittedValues={submittedValues} />
    </>
  );
}

export default FormFP;