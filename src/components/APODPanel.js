import React, {useState, useEffect} from "react";
import APODCard from "./APODCard"
import axios from "axios";

export default function APODPanel() {
    const [apod, setApod] = useState([]);

    function dateAdd(dte){
        var date = new Date(dte); 
        date.setDate(date.getDate() + 1);
        console.log("add one day= "+date)
    }
    function dateSub(dte){
        var date = new Date(dte);
        date.setDate(date.getDate() - 1);
        console.log("minus one day = "+ date)
    }

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
                    copyright={apod.copyright}
                    dateAdd={dateAdd} 
                    dateSub={dateSub}
                    />
            </div>
        </div>
    );
}