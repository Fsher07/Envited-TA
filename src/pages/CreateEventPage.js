import React, { useContext, useState } from "react";
import dayjs from "dayjs";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SiCmake } from "react-icons/si";
import { Context } from "../Context";
import WavesSplash from "../components/WavesSplash";
import "./CreateEventPage.css";
import { Link } from "react-router-dom";

function CreateEventPage() {
  const { setEntries } = useContext(Context);

  /* to enable-disable next button */

  const [isDisabled, setIsDisabled] = useState(true);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    setEntries(e);
    console.log(e);
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
          color='secondary'
          {...register("eventName", { required: true })}
        />
        <TextField
          id='filled-basic'
          label='Host Name'
          variant='filled'
          color='secondary'
          {...register("hostName", { required: true })}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name='startDate'
            control={control}
            defaultValue={dayjs(new Date()).format("YYYY/MM/DD hh:mm A")}
            render={({ field: { onChange, value } }) => (
              <DateTimePicker
                label='Start Date'
                inputFormat='YYYY/MM/DD hh:mm A'
                value={value}
                onChange={(values) => {
                  const formattedDate =
                    dayjs(values).format("YYYY/MM/DD hh:mm A");
                  onChange(formattedDate);
                }}
                renderInput={(params) => (
                  <TextField color='secondary' {...params} />
                )}
              />
            )}
          />
          <Controller
            name='endDate'
            control={control}
            defaultValue={dayjs(new Date()).format("YYYY/MM/DD hh:mm A UTC Z")}
            render={({ field: { onChange, value } }) => (
              <DateTimePicker
                label='End Date'
                inputFormat='YYYY/MM/DD hh:mm A'
                value={value}
                onChange={(values) => {
                  const formattedDate = dayjs(values).format(
                    "YYYY/MM/DD hh:mm A UTC Z"
                  );
                  onChange(formattedDate.slice(0, -3));
                }}
                renderInput={(params) => (
                  <TextField color='secondary' {...params} />
                )}
              />
            )}
          />
        </LocalizationProvider>
        <TextField
          id='filled-basic'
          label='Location'
          variant='filled'
          color='secondary'
          {...register("location", { required: true })}
        />
        <TextField
          id='filled-basic'
          label='Event Image URL'
          variant='filled'
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
