import React, {useState, useEffect} from "react";
import APODCard from "./APODCard"
import axios from "axios";

export default function APODPanel() {
    const [apod, setApod] = useState([]);
    const [date, setDate] = useState(Date())

    const previousDate = (date)=>{
    //    const myDate = new Date()
    //    myDate.setDate(myDate.getDate()-1)
        console.log(date);
    }
    console.log(date);

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=BcVA8joxv0595Knb0NaCQ4bsU43BTYVKZl3egP6O')
        .then(response => {
            setApod(response.data)
            console.log(response);
    
        })
        .catch(err => {
            console.log(`no dice`, err);
        })
    }, []);
    return(
        <div className="panel">
            <div className="card">
                <APODCard 
                    apod={apod}
                    title={apod.title}
                    date={apod.date}
                    img={apod.hdurl}
                    description={apod.explanation}
                    />
            </div>
            <div className="button_panel">
                <button className="previous_button">Go back a day</button>
                <button className="next_button">Next day</button>
            </div>
        </div>
    );
}