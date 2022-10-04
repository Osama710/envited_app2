import React from "react";
import { useLocation } from "react-router-dom";
import EventInfoComponent from "../../components/EventInfoComponent";
import eventImg from "../../assets/images/eventImage2.png";
import calendarIcon from "../../assets/images/calendarIcon.PNG";
import mapIcon from "../../assets/images/mapIcon.PNG";

const Event = () => {
  let location = useLocation();
  let event_val = location.state;
  console.log(event_val);

  return (
    <div className="event_page">
      <div className="container">
        <div className="d-flex justify-content-between main gap-5">
          <div className="single_event_data">
            <h2>{event_val.event_name}</h2>
            <p>Hosted by {event_val.host_name}</p>
            <EventInfoComponent
              image={calendarIcon}
              heading={event_val.start_date + " " + event_val.start_time}
              data={
                "to " +
                event_val.start_date +
                " " +
                event_val.start_time +
                " UTC +10"
              }
            />
            <EventInfoComponent
              image={mapIcon}
              heading="Street name"
              data="Suburb, State, Postcode"
            />
          </div>
          <div className="event_image">
            <img src={eventImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
