import React, { useState, useEffect } from 'react';
import Arrow from '.assets/desktop/icon-arrow-up.svg';
import './Time.css';

function Time() {
    const [time, setTime] = useState('00:00');
    const [timezone, setTimezone] = useState();
    const [city, setCity] = useState('city');
    const [countryCode, setCountryCode] = useState('country');

    useEffect(() => {
        fetch('https://freegeoip.app/json/')
          .then((response) => response.json())
          .then((data) => {
              setCity(data.city);
              setCountryCode(data.country_code);
          });  
    }, [city, countryCode]);

    useEffect(() => {
        fetch('http://worldtimeapi.org/api/ip')
          .then((response) => response.json())
          .then((data) => {
              console.log(data);
              setTimezone(data.abbreviation);
              console.log(new Date(data.unixtime * 1000).toStrint());
          });
    },[time, timezone]);

    return (
        <section className="content-container">
            <div className="text-content">
                <p>Good Morning, It is currently</p>
                <div className="time">
                    <h1 className="bold">{time}</h1>
                    <p>{timezone}</p>
                </div>
                <p className="city bold">
                    In {city}, {countryCode}
                </p>
            </div>
            <button onClick={()=>props.setExpanded(true)} className="bold">
              <div className="test">More</div>
              <div className="circle">
                  <img src={Arrow} alt="up arrow" />
              </div>
            </button>
        </section>)
}