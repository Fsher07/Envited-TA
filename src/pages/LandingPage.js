import React from "react";
import LandingImg from "../assets/landing.svg";
import { Link } from "react-router-dom";
import { GiPartyPopper } from "react-icons/gi";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className='landing-container'>
      <header>
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
      <section className='landingSection'>
        <img src={LandingImg} alt='Landing' />
        <Link to='/create' className='landingButton-container'>
          <button className='landingButton'>
            <GiPartyPopper className='partyIcon' />
            Create my event
          </button>
        </Link>
      </section>
    </div>
  );
}

export default LandingPage;
