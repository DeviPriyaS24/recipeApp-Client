import React, { useState } from "react";
import Header from "../components/Header";
import Add from "../components/Add";
import ViewRecipeCard from "../components/ViewRecipeCard";

const Home = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const handleOpenAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  return (
    <>
      <Header />
      <div
        className="d-flex flex-column justify-content-center"
        style={{ marginTop: "50px", minHeight: "40vh" }}
      >
        <h2 className="text-center">
          Welcome to{" "}
          <span
            className="fs-2 text-primary"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            Foodie Crush
          </span>
          , Your Recipe Book!
        </h2>
        <div className=" text-center">
          <button
            onClick={handleOpenAddModal}
            className="btn bg-success shadow fw-bolder"
          >
            ➕ Add Recipe
          </button>
        </div>
      </div>

      <div>
        <ViewRecipeCard />
      </div>

      {/* Add Modal */}
      <Add show={showAddModal} handleClose={handleCloseAddModal} />
    </>
  );
};

export default Home;
