import React from "react";
import ButtonComponent from "./ButtonComponent";
import EventInfoComponent from "./EventInfoComponent";
import eventImg from "../assets/images/eventImg.PNG";
import calendar from "../assets/images/calendar.PNG";
import location from "../assets/images/location.PNG";
import link from "../assets/images/link.PNG";
import hands from "../assets/images/hands.PNG";

const EventCard = () => {
  return (
    <div className="event_card">
      <div className="card_img">
        <img src={eventImg} />
      </div>
      <div className="event_details">
        <h2>Movie night</h2>
        <p>
          Hosted by <b>Elysia</b>
        </p>
        <div className="response_comp">
          <p>
            <b>14</b> responses <span>see guests</span>
          </p>
          <ButtonComponent text="Invite" image={hands} />
        </div>
        <EventInfoComponent
          image={calendar}
          heading="18 August 6:00 AM"
          data="to 19 August 1:00PM UTC +10"
        />
        <EventInfoComponent
          image={location}
          heading="Street name"
          data="301 Rowes Lane, WA, 7183"
        />
        <EventInfoComponent image={link} heading="Link" data="netflix.com" />
      </div>
    </div>
  );
};

export default EventCard;
