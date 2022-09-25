import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./Context";
import LandingPage from "./pages/LandingPage";
import CreateEventPage from "./pages/CreateEventPage";
import EventPage from "./pages/EventPage";

function App() {
  /* to store user input from event form */
  const [entries, setEntries] = useState({});

  const data = {
    entries,
    setEntries,
  };

  return (
    <Context.Provider value={data}>
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/create' element={<CreateEventPage />} />
            <Route path='/event' element={<EventPage />} />
          </Routes>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
