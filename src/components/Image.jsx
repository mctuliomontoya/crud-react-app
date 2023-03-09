// App.js
// Kindacode.com
import { useState } from "react";
import Form from "react-bootstrap/Form";

const ImagePrev = () => {
  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  return (
    <>
      {selectedImage && (
        <div style={styles.preview}>
          <img
            src={URL.createObjectURL(selectedImage)}
            style={styles.image}
            alt="Thumb"
          />
          <button onClick={removeSelectedImage} style={styles.delete}>
            Remove This Image
          </button>
        </div>
      )}
      <div style={styles.container}>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" accept="image/*" onChange={imageChange} />
        </Form.Group>
      </div>
    </>
  );
};

export default ImagePrev;

// Just some styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};
