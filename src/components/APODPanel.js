import React, {useState, useEffect } from "react";
import APODCard from "./APODCard"
import axios from "axios";
import moment from "moment";
import { useLocalStorage } from '../hooks/useLocalStorage';

let initialState = {
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
    const [apod, setApod] = useState(initialState);
    const [date,setDate] = useLocalStorage("imgDate", Date());
    const [loading, setLoading] = useState(true);

    const dateAdd = (date) => {
        var newDate = new Date(date); 
        newDate.setDate(newDate.getDate() + 1);
        setDate(newDate);
    }
    const dateSub = (date) => {
        var newDate = new Date(date);
        newDate.setDate(newDate.getDate() - 1);
        setDate(newDate);
    }

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=BcVA8joxv0595Knb0NaCQ4bsU43BTYVKZl3egP6O&date=${moment(date).format("YYYY-MM-DD")}`)
        .then(response => {
            console.log(response.data)
            setApod(response.data)
        })
        .catch(err => {
            console.log(`no dice`, err);
        })
    }, [date]);

    return(
        <div className="panel">
            <div className="card">
                <APODCard 
                    loading={loading}
                    setLoading={setLoading}
                    apod={apod}
                    title={apod.title}
                    imgDate={apod.date}
                    img={apod.hdurl}
                    description={apod.explanation}
                    copyright={apod.copyright}
                    dateAdd={dateAdd} 
                    dateSub={dateSub}
                    date={date}
                    />
            </div>
        </div>
    );
}