import React from "react";
import ProudctCard from "../../../components/ProductCard/ProductCard";
import "./eventpage.css";
import Giveaways from "./Giveaways/Giveaways";
import TopEvents from "./TopEvents/TopEvents";

const EventPage = () => {
  const giveawaylist = [{}, {}];

  const topevents = [{}, {}];

  const offers = [{}, {}, {}];
  return (
    <div className="event-main-container">
      <div className="event-offer-container">
        <div className="event-offer-sub-container">
          <h3 className="event-title">Offers</h3>

          <div className="event-offer-product-container">
            {offers.map((item, index) => (
              <ProudctCard key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="event-sub-container">
        <h3 className="event-title">Giveaways</h3>

        {giveawaylist.map((item, index) => (
          <Giveaways key={index} />
        ))}

        <h3 className="event-title" style={{ marginTop: "5%" }}>
          Top Events
        </h3>
        {topevents.map((item, index) => (
          <TopEvents key={index} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
