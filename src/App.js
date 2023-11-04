import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Form from './Components/Form/Form';

function App() {
  return (

    <div className="d-flex p-2">
      <Container>
        <Row className="text-center mb-4 mt-5">
          <h3 className="">Apply for this position</h3>
        </Row>
        <Card className="shadow">
          <Card.Body className="p-5 pt-4">
            <Form />
          </Card.Body>
        </Card>
      </Container>
    </div>

  );
}

export default App;
