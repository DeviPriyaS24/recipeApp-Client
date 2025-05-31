import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { viewSingleRecipeApi } from "../services/allApi";
import Add from "./Add";

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState(null);
  const [showModal, setShowModal] = useState(true);

  const fetchRecipe = async () => {
    const result = await viewSingleRecipeApi(id);
    if (result.status >= 200 && result.status <= 300) {
      setRecipeData(result.data);
    } else {
      alert("Failed to load recipe");
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  const handleClose = () => {
    setShowModal(false);
    navigate("/home");
  };

  return (
    <>
      {recipeData && (
        <Add
          show={showModal}
          handleClose={handleClose}
          isEdit={true}
          defaultData={recipeData}
          id={id}
        />
      )}
    </>
  );
};

export default EditRecipe;
