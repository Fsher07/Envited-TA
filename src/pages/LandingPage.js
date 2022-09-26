import React from "react";
import LandingImg from "../assets/landing.svg";
import { Link } from "react-router-dom";
import { GiPartyPopper } from "react-icons/gi";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className='landing-container'>
      <header className='grid-1'>
        <h1>
          <div className='landing-topic'>Imagine if</div>
          <div id='snapchat-text'>Snapchat</div>
          <div className='landing-topic'>had events.</div>
        </h1>
        <p className='landingHeader-text'>
          Easily host and share events with your friends across any social
          media.
        </p>
      </header>
      <section className='landingSection grid-2'>
        <img src={LandingImg} alt='Landing' />
      </section>
      <div className='landingButton-container grid-3'>
        <button className='landingButton'>
          <Link to='/create' className='button-text'>
            <GiPartyPopper className='partyIcon' />
            &nbsp;Create my event
          </Link>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
