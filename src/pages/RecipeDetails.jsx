import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteRecipeApi, viewSingleRecipeApi } from "../services/allApi";

const RecipeDetails = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipeDetails, setRecipeDetails] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getSingleRecipe();
  }, [id]);

  const getSingleRecipe = async () => {
    try {
      const result = await viewSingleRecipeApi(id);
      if (result.status >= 200 && result.status <= 300) {
        setRecipeDetails(result.data);
      } else {
        alert("Failed to fetch recipe details");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteRecipeFn = async () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      try {
        const result = await deleteRecipeApi(id);
        if (result.status >= 200 && result.status <= 300) {
          alert("Recipe deleted successfully!");
          navigate("/home");
        } else {
          alert("Failed to delete recipe");
        }
      } catch (error) {
        console.error("Error deleting recipe:", error);
      }
    }
  };

  return (
    <>
      <div className="container m-2">
        <h1 className="text-center fw-bolder">Recipe Details</h1>
        {recipeDetails ? (
          <div className="row m-5">
            <div className="col">
              <img
                src={recipeDetails.imgUrl}
                alt=""
                className="recipeImg img-fluid rounded-4 shadow"
                style={{ width: "400px" }}
              />
              <h1 className="recipeHead text-dark">{recipeDetails.title}</h1>
              <div className="d-flex">
                {/* <button className="bg-info me-5 rounded-3 p-2 border-0 fw-bolder text-light">
                  Edit
                </button> */}
                <Link
                  to={`/edit-recipe/${recipeDetails.id}`}
                  className="bg-info me-5 rounded-3 p-2 border-0 fw-bolder text-light"
                  style={{ textDecoration: "none" }}
                >
                  Edit
                </Link>
                <button
                  onClick={deleteRecipeFn}
                  className="bg-danger ms-5 rounded-3 p-2 border-0 fw-bolder text-light"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="col fw-bolder fs-5">
              <h3 className="mb-5" style={{ textDecoration: "underline" }}>
                Preperation details
              </h3>
              <p>
                Prepration Time:{" "}
                <span className="text-danger">
                  {recipeDetails.prepTime} minutes
                </span>
              </p>
              <p>Ingredients Included: {recipeDetails.ingredient}</p>
              <p>Description: {recipeDetails.desc}</p>
              <Link
                to="/home"
                className="bg-danger text-light p-2 rounded-3"
                style={{ textDecoration: "none" }}
              >
                Go Back
              </Link>
            </div>
          </div>
        ) : (
          <div>No recipe</div>
        )}
      </div>
    </>
  );
};

export default RecipeDetails;
