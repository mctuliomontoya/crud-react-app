import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Trash from "../images/Trash.png";
import Edit from "../images/Edit.png";
import StockImage from "../images/StockImage.png";

export function ListRow(){
    const [data, setProduct] = useState(
        [
          {id: "COS01", type: "Cosmetic", name: "Sephora Skin Care -1 u", price: "45.50", stock: "4", image: "image"},
          {id: "CLE02", type: "Cleaning", name: "Windex - 45 oz", price: "23.00", stock: "23", image: "image"},
          {id: "BEA03", type: "Beauty", name: "Sephora Skin Care - 1 u", price: "12.60", stock: "12", image: "image"}
        ]
    );

    const [ToDelete, setDelete] = useState(null);
    
    const handleDelete = (id) =>{
        const newdata = data.filter((item) => item.id !== id);
        setProduct(newdata);
        setDelete(null);
    };

    const ConfirmDelete = (item) => {
        setDelete(item);
    };

    const CloseModel = () => {
        setDelete(null);
    }
    
    return(
        <>
        <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <td className="fw-bold">{item.id}</td>
                    <td>{item.type}</td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td className="text-center">{item.stock}</td>
                    <td className="text-center">
                        <img src={StockImage} alt={StockImage} width="25px"/>
                    </td>
                    <td>
                        <div className="d-flex justify-content-around">
                            <a href="../app/edit"><img src={Edit} alt={Edit} width="30px"/></a>
                            <button className="IconButton" onClick={() => ConfirmDelete(item)}><img src={Trash} alt="Trash" width="25px"/></button>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
        
    <Modal show={ToDelete !== null} onHide={CloseModel}>
        <Modal.Header closeButton>
            <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={CloseModel}>CANCEL</Button>
            <Button variant="primary" onClick={() => handleDelete(ToDelete.id)}>DELETE</Button>
        </Modal.Footer>
    </Modal>
    </>
    )
}
