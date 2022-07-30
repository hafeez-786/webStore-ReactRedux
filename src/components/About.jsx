import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row my-4">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
              amet bibendum turpis. Proin luctus eu risus ac cursus. Proin a
              augue vitae lectus blandit mollis. Nam porttitor interdum
              vehicula. Donec ultrices elit quis massa molestie condimentum.
              Aliquam ex ex, fermentum eget ex ut, euismod pellentesque lacus.
              In ultricies elit ac eros dictum volutpat. Aliquam erat volutpat.
              Quisque faucibus mi dolor, eu finibus leo gravida non. Vivamus
              laoreet suscipit lacus, vitae placerat mauris dictum euismod.
              Vivamus convallis, lectus eget accumsan pellentesque, ipsum tortor
              blandit felis, eget convallis nibh erat nec arcu. Morbi gravida
              sagittis diam ac luctus. Curabitur laoreet, ipsum id euismod
              pellentesque, sem enim congue dui, vitae tempus nisi ex commodo
              diam. Donec ultrices elit quis massa molestie condimentum. Aliquam
              ex ex, fermentum eget ex ut, euismod pellentesque lacus. In
              ultricies elit ac eros dictum volutpat Donec ultrices elit quis
              massa molestie condimentum. Aliquam ex ex, fermentum eget ex ut,
              euismod pellentesque lacus. In ultricies elit ac eros dictum
              volutpat Donec ultrices elit quis massa molestie condimentum.
              Aliquam ex ex, fermentum eget ex ut, euismod pellentesque lacus.
              In ultricies elit ac eros dictum volutpat Donec ultrices elit quis
              massa molestie condimentum.
            </p>
            <Link to="/contact" className="btn btn-outline-primary">
              Contact us
            </Link>
          </div>
          <div className="col-md-6">
            <img src="/assets/about.jpg" className="w-100" alt="about" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
