import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { viewrecipeApi } from "../services/allApi";
import RecipeDetails from "../pages/RecipeDetails";
import { useNavigate } from "react-router-dom";


const ViewRecipeCard = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    ViewRecipeCardFn();
  }, [recipeData]);

  const ViewRecipeCardFn = async () => {
    let result = await viewrecipeApi();
    console.log(result);
    if (result.status >= 200 && result.status <= 300) {
      setRecipeData(result.data);
    } else {
      alert("Error fetching data!!!");
    }
  };

  return (
    <>
      <h1 className="text-center">Dish at a Glance</h1>
      <div className="row container my-4 ms-5">
        {recipeData?.map((eachRecipe) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={eachRecipe.imgUrl}
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title className="text-center">
                  {eachRecipe.title}
                </Card.Title>
                <Button onClick={() => navigate(`/recipe/${eachRecipe.id}`)} variant="primary" className="item-center">
                  View Recipe
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {selectedRecipeId && (
        <RecipeDetails recipeId={selectedRecipeId} />
      )}
    </>
  );
};

export default ViewRecipeCard;
