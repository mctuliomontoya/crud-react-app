import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { DualButton } from "./DualButton";
import ImagePrev from "./Image";

function BasicEditExample() {
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
                <Form.Control type="text" placeholder="" required disabled/>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3" controlId="custom-select">
                <Form.Label>Customized Select</Form.Label>
                <Form.Control as="select" className="rounded-2 ">
                  <option className="d-none" value="">
                    Select Option
                  </option>
                  <option value="Cosmetic">Cosmetic</option>
                  <option value="Beauty">Beauty</option>
                  <option value="Cleaning">Cleaning</option>
                </Form.Control>
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="" required />
            </Form.Group>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Group className="mb-3" controlId="formBasicID">
                <Form.Label>Price</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    aria-label="Amount (to the nearest dollar)"
                    required
                  />
                  <InputGroup.Text>USD</InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>In Stock</Form.Label>
                <Form.Control type="text" placeholder="" required />
              </Form.Group>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-row-reverse">
        <div className="p-2">
          <DualButton text="Cancel" style={false} />
        </div>
        <div className="p-2">
          <DualButton text="Save" style={true} />
        </div>
      </div>

      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>
  );
}

export default BasicEditExample;
