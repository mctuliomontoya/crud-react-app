import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { DualButton } from "./DualButton";
import ImagePrev from "./Image";


function BasicExample() {
  return (
    <Form>
      <div className="row">
        <div className="col-md-5">
          <ImagePrev />
        </div>
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-6">
              <Form.Group className="mb-3" controlId="formBasicID">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3" controlId="formBasicType">
                <Form.Label>Type</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Group className="mb-3" controlId="formBasicID">
                <Form.Label>Price</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control aria-label="Amount (to the nearest dollar)" />
                  <InputGroup.Text>USD</InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>In Stock</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row text-right">
        <div className="col-md-11">
          <DualButton text="Save" style="light" />
        </div>
        <div className="col-md-1">
          <DualButton text="Cancel" style="dark" />
        </div>
      </div>


      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>
  );
}

export default BasicExample;
