import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from "react-bootstrap"

function SuccessModal(props) {

  return (

    <Modal centered size="lg" show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thank you, your submission has been received!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 class="mb-2"> You have submitted following data:</h5>
        <p>First Name: {props.submittedValues.firstName}</p>
        <p>Last Name: {props.submittedValues.lastName}</p>
        <p>Email: {props.submittedValues.email}</p>
        <p>LinkedIn URL: {props.submittedValues.linkedIn}</p>
        <p>Your motivation: {props.submittedValues.motivation}</p>
        <p>Why are you the best candidate: {props.submittedValues.selfEvaluation}</p>
        <hr />
        <p>We'll contact you within next weeks about the next steps.</p>
      </Modal.Body>
    </Modal>

  )
}

export default SuccessModal;