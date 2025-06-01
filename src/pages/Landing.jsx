import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Landing = () => {
  return (
    <>
      <Header />
      <div className="bgParallax shadow rounded-border"></div>

      <div
        className="container d-flex justify-content-center align-items-center my-5"
        style={{ minHeight: "70vh" }}
      >
        <div className="row">
          <div className="col">
            <h1 className="fs-1 fw-bolder text-danger">
              <i class="fa-solid fa-cake-candles"></i> Foodie Crush
            </h1>
            <p className="fw-bolder">
              Welcome to Foodie Crush – the ultimate recipe app for food lovers,
              home cooks, and culinary explorers! Whether you’re craving comfort
              food, looking for quick meals, or experimenting with new cuisines,
              Foodie Crush is your perfect kitchen companion.
            </p>
            <Link to="/home" className="btn bg-primary shadow fw-bolder fs-4">
              Get Started
            </Link>
          </div>
          <div className="col ms-5">
            <img
              src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-recipe-card-vector-png-image_12161945.png"
              alt=""
              style={{ width: "400px" }}
            />
          </div>
        </div>
      </div>

      <div style={{ minHeight: "60vh" }}>
        <h1 className="text-center mb-4">Our Happy Customers</h1>
        <marquee scrollamount="10">
          <div className="d-flex justify-content-around">
            <div className="card" style={{ width: "14rem" }}>
              <img
                src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740"
                alt=""
                style={{ width: "100px" }}
                className="m-auto"
              />
              <div className="stars text-warning text-center">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p className="text-center">Sreekanth S</p>
            </div>
            <div className="card" style={{ width: "14rem" }}>
              <img
                src="https://img.freepik.com/premium-vector/portrait-beautiful-women-round-frame-avatar-female-character-isolated-white-background_559729-213.jpg?semt=ais_items_boosted&w=740"
                alt=""
                style={{ width: "100px" }}
                className="m-auto"
              />
              <div className="stars text-warning text-center">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p className="text-center">Avanthika Anil</p>
            </div>
            <div className="card" style={{ width: "14rem" }}>
              <img
                src="https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_items_boosted&w=740"
                alt=""
                style={{ width: "100px" }}
                className="m-auto"
              />
              <div className="stars text-warning text-center">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p className="text-center">Vrindha Shyam</p>
            </div>
            <div className="card" style={{ width: "14rem" }}>
              <img
                src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_items_boosted&w=740"
                alt=""
                style={{ width: "97px" }}
                className="m-auto"
              />
              <div className="stars text-warning text-center">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p className="text-center">Abhijith ajith</p>
            </div>
            <div className="card" style={{ width: "14rem" }}>
              <img
                src="https://img.freepik.com/free-vector/young-man-with-blue-eyes_1308-174369.jpg?semt=ais_items_boosted&w=740"
                alt=""
                style={{ width: "95px" }}
                className="m-auto"
              />
              <div className="stars text-warning text-center">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p className="text-center">HariKrishnan Jay</p>
            </div>
          </div>
        </marquee>
      </div>
    </>
  );
};

export default Landing;
