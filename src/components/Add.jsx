import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Modal, Form } from 'react-bootstrap';
import { addRecipeAPI, updateRecipeApi } from '../services/allApi';

const Add = ({ show, handleClose, isEdit = false, defaultData = {}, id }) => {
  const [recipeDetails, setRecipeDetails] = useState({
    title: '',
    imgUrl: '',
    ingredient: '',
    desc: '',
    prepTime: '',
  });

  useEffect(() => {
    if (isEdit && defaultData) {
      setRecipeDetails(defaultData);
    }
  }, [isEdit, defaultData]);

  const handleSaveClick = async () => {
    const { title, imgUrl, ingredient, desc, prepTime } = recipeDetails;
    if (title && imgUrl && ingredient && desc && prepTime) {
      try {
        let result;
        if (isEdit) {
          result = await updateRecipeApi(id, recipeDetails);
        } else {
          result = await addRecipeAPI(recipeDetails);
        }

        if (result.status >= 200 && result.status <= 300) {
          alert(`Recipe ${isEdit ? 'updated' : 'added'} successfully`);
          handleClose();
        } else {
          alert("Something went wrong! Contact the admin");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      alert("Please fill the form");
    }
  };

  return (
    
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isEdit ? "Edit Recipe" : "Add Recipe"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {['title', 'imgUrl', 'ingredient', 'desc', 'prepTime'].map((field, index) => (
          <FloatingLabel
            key={index}
            controlId={`floatingInput-${field}`}
            label={field === 'prepTime' ? 'Prep Time (in minutes)' : field.charAt(0).toUpperCase() + field.slice(1)}
            className="mb-3"
          >
            <Form.Control
              type={field === 'prepTime' ? 'number' : 'text'}
              placeholder={field}
              value={recipeDetails[field]}
              onChange={(e) => setRecipeDetails({ ...recipeDetails, [field]: e.target.value })}
            />
          </FloatingLabel>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveClick}>
          {isEdit ? "Update" : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Add;
