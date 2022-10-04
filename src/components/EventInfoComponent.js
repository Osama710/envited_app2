import React from "react";
import {
  RightOutlined,
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";
const EventInfoComponent = (props) => {
  const { heading, data, image } = props;
  return (
    <div className="event_info mt-3">
      <div className="d-flex justify-content-between align-items-center gap-5">
        <div className="d-flex">
          <div className="img_div">
            <img src={image} alt="img" />
          </div>
          <div className="d-flex flex-column">
            <h6>{heading}</h6>
            <p>{data}</p>
          </div>
        </div>
        <RightOutlined />
      </div>
    </div>
  );
};

export default EventInfoComponent;
