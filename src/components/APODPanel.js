import React, {useState, useEffect} from "react";
import APODCard from "./APODCard"
import axios from "axios";
import moment from "moment";

export default function APODPanel() {
    const [apod, setApod] = useState([]);
    const [date,setDate] = useState(Date());
    //make two funtions that increment date +/-, store that increment to state, make a function that converts date to the nasa api format &date=yyyy/mm/dd, recall the current date from state in the get request
    const dateAdd = (dte) => {
        var date = new Date(dte); 
        date.setDate(date.getDate() + 1);
        setDate(date);
        // console.log("addaday"+ date)
    }
    const dateSub = (dte) => {
        var date = new Date(dte);
        date.setDate(date.getDate() - 1);
        setDate(date);
        moment(date).format("YYYY/MM/DD");
        // console.log("takaday"+ date)
    }

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=BcVA8joxv0595Knb0NaCQ4bsU43BTYVKZl3egP6O&date=${moment(date).format("YYYY-MM-DD")}`)
        .then(response => {
            setApod(response.data)
            // console.log(response);
        })
        .catch(err => {
            console.log(`no dice`, err);
        })
    }, [date]);
    return(
        <div className="panel">
            <div className="card">
                <APODCard 
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