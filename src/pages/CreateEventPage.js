import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SiCmake } from "react-icons/si";
import { Context } from "../Context";
import WavesSplash from "../components/WavesSplash";

import "./CreateEventPage.css";
import { MobileDatePicker, TimePicker } from "@mui/x-date-pickers";
import { Link } from "react-router-dom";

function CreateEventPage() {
  const { setEntries } = useContext(Context);

  /* to enable-disable next button */

  const [isDisabled, setIsDisabled] = useState(true);

  /* value for datepicker */
  const [startDate, setStartDate] = useState("2022-09-25T09:00:00");
  const [endDate, setEndDate] = useState("2022-09-25T09:00:00");

  /* to show current value on input field */
  const handleStartDate = (newValue) => {
    setStartDate(newValue);
  };

  const handleEndDate = (newValue) => {
    setEndDate(newValue);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    setEntries(e);
    setIsDisabled(false);
  };

  return (
    <>
      <WavesSplash title={"Your Event"} />
      <form className='eventForm' onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id='filled-basic'
          label='Event Name'
          variant='filled'
          size='small'
          color='secondary'
          {...register("eventName", { required: true })}
        />
        <TextField
          id='filled-basic'
          label='Host Name'
          variant='filled'
          size='small'
          color='secondary'
          {...register("hostName", { required: true })}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            label='Start Date'
            inputFormat='MM/DD/YYYY'
            value={startDate}
            onChange={handleStartDate}
            renderInput={(params) => <TextField {...params} />}
            {...register("startDate", { required: true })}
          />
          <TimePicker
            label='Start Time'
            value={startDate}
            onChange={handleStartDate}
            renderInput={(params) => <TextField {...params} />}
            {...register("startTime", { required: true })}
          />
          <MobileDatePicker
            label='End Date'
            inputFormat='MM/DD/YYYY'
            value={endDate}
            onChange={handleEndDate}
            renderInput={(params) => <TextField {...params} />}
            {...register("endDate", { required: true })}
          />
          <TimePicker
            label='End Time'
            value={endDate}
            onChange={handleEndDate}
            renderInput={(params) => <TextField {...params} />}
            {...register("endTime", { required: true })}
          />
        </LocalizationProvider>
        <TextField
          id='filled-basic'
          label='Location'
          variant='filled'
          size='small'
          color='secondary'
          {...register("location", { required: true })}
        />
        <TextField
          id='filled-basic'
          label='Event Image URL'
          variant='filled'
          size='small'
          color='secondary'
          {...register("eventImage", { required: true })}
        />
        <div className='eventButton-container'>
          <button className='eventButton' type='submit'>
            Submit
          </button>
          <button disabled={isDisabled} className='eventButton' type='submit'>
            <Link disabled={isDisabled} to='/event'>
              <SiCmake className='eventIcon' />
              Next
            </Link>
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateEventPage;
