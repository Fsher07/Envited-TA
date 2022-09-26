import React, { useContext } from "react";
import { Context } from "../Context";
import { IoIosArrowForward } from "react-icons/io";
import Calendar from "../assets/Calendar.png";
import Location from "../assets/Location.png";
import "./EventPage.css";

function EventPage() {
  const { entries } = useContext(Context);

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <div className='event-container'>
      <img className='eventImage' src={entries.eventImage} alt='event' />
      <div className='event-column-2'>
        <h1 className='eventTitle title-color'>
          {capitalizeFirst(entries.eventName)}
        </h1>
        <h2 className='hostName'>
          Hosted by
          <strong>{entries.hostName}</strong>
        </h2>
        <div className='dateCard'>
          <div className='dateCard-date'>
            <div className='icon-container'>
              <img className='calendar-icon' src={Calendar} alt='calendar' />
            </div>
            <div className='dateCard-date-container'>
              <div className='dateCard-context'>
                <h3 className='context-title title-color'>
                  {entries.startDate}
                </h3>
              </div>
              <p className='dateCard-context description'>
                to<strong>&nbsp;{entries.endDate.slice(0, -10)}&nbsp;</strong>
                {entries.endDate.slice(-10, -3)}
              </p>
            </div>
            <IoIosArrowForward color='gray' className='arrow-icon' />
          </div>
          <div className='dateCard-address'>
            <div className='icon-container'>
              <img src={Location} alt='' />
            </div>
            <div>
              <h3 className='title-color'>Street Name</h3>
              <p className='description'>{entries.location}</p>
            </div>
            <IoIosArrowForward color='gray' className='arrow' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
