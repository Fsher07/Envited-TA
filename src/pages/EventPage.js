import React, { useContext } from "react";
import { Context } from "../Context";
import { MdWavingHand } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";
import "./EventPage.css";

function EventPage() {
  const { entries } = useContext(Context);
  return (
    <>
      <div className='event-container'>
        <img className='eventImage' src={entries.eventImage} alt='event' />
        <h1>{entries.eventName}</h1>
        <h2 className='hostName'>
          Hosted by
          <span>{entries.hostName}</span>
        </h2>
        <div className='dateCard'>
          <AiFillCalendar />
          <div className='dateCard-container'>
            <div className='dateCard-context'>
              <h3>{entries.startDate}</h3>
              <h3>{entries.startTime}</h3>
            </div>
            <div className='dateCard-context'>
              to
              <strong>
                <p>
                  {entries.endDate}
                  {entries.endTime}
                </p>
              </strong>
            </div>
          </div>
        </div>
        <h3>Street Name</h3>
        <h3>{entries.location}</h3>
      </div>
    </>
  );
}

export default EventPage;
