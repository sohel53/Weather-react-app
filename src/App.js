import React, {useState} from "react";
import './styles.css';
import Summer from './images/summer.jpeg';
import Winter from './images/winter.jpeg';
let arr = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const App = () => {
    let [latitude, setLatitude] = useState("");
    let [longitude, setLongitude] = useState("");
    let [hemisphere, setHemisphere] = useState("");
    let [month, setMonth] = useState("");

    function getlocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (location) => {
                    setLatitude(location.coords.latitude);
                    setLongitude(location.coords.longitude);

                    // latitude > 0 ? setHemisphere("Northen hemisphere") : latitude < 0 ? setHemisphere("Southern hemisphere") :
                    // setHemisphere("Equater") 

                    if(location.coords.latitude > 0) {
                        setHemisphere("Northen hemisphere");

                    } else if (location.coords.latitude < 0) {
                        setHemisphere("Southern hemisphere");
                    } else {
                        setHemisphere("Equator");
                    }

                }

            )
        }
        let month = new Date().getMonth();
        setMonth(month);
    }

    

    return (
        <div className="location">
            <h1 className="title">Hello Welcome to Tracking</h1>
            <h2>Latitude: {latitude}</h2>
            <h2>Longitude: {longitude}</h2>
            <h2>Hemispher: {hemisphere}</h2>
            <h2>Month: {arr[month]}</h2>
           
            {
             (month!=="" && hemisphere) && (
                   (hemisphere=="Northen hemisphere" && month>=2 &&  month<=9) || (hemisphere=="Southern hemisphere" && month<=2 ||  month>=9) ? (
                      <div>
                            <h2> Summer Season</h2>
                            <img src={Summer} alt="Summer Season" />
                      </div>
                    ): (
                      <div>
                        <h2> Winter Season</h2>
                        <img src={Winter} alt="Winter Season" />
                      </div>
                    )
             )
           }
        
            <button className="btn" onClick={getlocation}>Get Location</button>
        </div>
    )
}

export default App;