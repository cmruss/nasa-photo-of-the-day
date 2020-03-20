import React, {useState, useEffect } from "react";
import APODCard from "./APODCard"
import axios from "axios";
import moment from "moment";
import { useLocalStorage } from '../hooks/useLocalStorage';

/* Initializing state for the shape of the data to come... */
let initialState = {
    /* These are the properties I expect to use from the api call */
    copyright: "",
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "",
    service_version: "",
    title: "",
    url: ""
}

export default function APODPanel() {
    /* State hook for setting the chosen photo to the current state */
    const [apod, setApod] = useState(initialState);
    /* Custom hook stores and fetches the chosen date from browsers localStorage for persistence */
    const [date, setDate] = useLocalStorage("apodDate", Date());
    /* Handles loading state, should default to true */
    const [loading, setLoading] = useState(true);
    /* If we catch an error in the call, set error status */
    const [error, setError] = useState(false);
    /* sets value for the first apod */
    const beginning = moment(new Date("1995-06-17")).format("YYYY-MM-DD")
    /* Sets the value for today's date */
    let today = moment(new Date()).format("YYYY-MM-DD");
    /* Function for adding a day to the date set to state */
    const dateAdd = (date) => {
        /* Declaring the current date as a function scope variable newDate, and then setting that newDate as our modified date before passing it back in to the "date" state value*/
        var newDate = new Date(date); 
        /* This is not the setDate from the state hook, but a js Date method */
        newDate.setDate(newDate.getDate() + 1);
        /* This is the state hook setDate  */
        setDate(newDate);
    }
     /* Function for subtracting a day from the date set to state */
    const dateSub = (date) => {
        /* See above */
        var newDate = new Date(date);
        /* This is not the setDate form the state hook, but a js Date method */
        newDate.setDate(newDate.getDate() - 1);
        /* This is the state hook setDate  */
        setDate(newDate);
    }
    /* On mounting this component will make a call to the api */
    useEffect(() => {
        setLoading(true);
        axios
        /* Url is hard coded except for the specified date, which points to the stored date, formatted for the apod api with moment.js */
        .get(`https://api.nasa.gov/planetary/apod?api_key=BcVA8joxv0595Knb0NaCQ4bsU43BTYVKZl3egP6O&date=${moment(date).format("YYYY-MM-DD")}`)
        .then(response => {
            /* Calls the function for setting the returned photo to state */
            setApod(response.data)
            /* Makes sure errors are not thrown */
            setError(false)
        })
        .catch(err => {
            /* Sets error status to state for custom error handling in child */
            setError(true)
            /* Sets loading status to false for custom error handling */
            setLoading(false)
            /* Tells me what went wrong when it does */
            console.log(`no dice`, err);
        })
        /* Sets window to the top of the page on rerender */
        window.scrollTo(50, 0)
        /* If the date set to state is changed, component update with another api call */
    }, [date, error]);
    /* JSX below to pass props to and render my child component what shows all the fun stuff */
    return(
        <div className="panel">
            <div className="card">
                <APODCard 
                    error={error}
                    setError={setError}
                    loading={loading}
                    setLoading={setLoading}
                    setDate={setDate}
                    apod={apod}
                    title={apod.title}
                    imgDate={apod.date}
                    img={apod.hdurl}
                    description={apod.explanation}
                    copyright={apod.copyright}
                    beginning={beginning}
                    today={today}
                    dateAdd={dateAdd} 
                    dateSub={dateSub}
                    date={date}
                />
            </div>
        </div>
    );
}
