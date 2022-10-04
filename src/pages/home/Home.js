import React from "react";
import ButtonComponent from "../../components/ButtonComponent";
import EventCard from "../../components/EventCard";
import create from "../../assets/images/create.PNG";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center main">
          <EventCard />
          <div className="main_page_heading">
            <h1>
              Imagine If <br />
              <span className="gradiant_color">Snapchat</span>
              <br /> had events
            </h1>
            <p>
              Easily host and share events with your friends
              <br /> across any social media.
            </p>
            <ButtonComponent
              text="Create my event"
              image={create}
              bg="gradiant"
              to="/create"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
