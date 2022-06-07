import React,{useEffect,useState} from "react";

function WeatherCard(props) {

    const [weatherState, setweatherState] = useState("")

    //destructing props.tempInfo
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    }=props.tempInfo;


    useEffect(() => {
      if(weathermood){
          switch(weathermood){
             case "Clouds":
                 setweatherState("wi-day-cloudy");
                 break;
             case "Haze":
                 setweatherState("wi-fog");
                 break;
             case "Clear":
                 setweatherState("wi-day-sunny");
                 break;
             case "Mist":
                 setweatherState("wi-dust");
                 break;
             default:
                setweatherState("wi-day-sunny");
                 break;
            
             
          }
      }
    }, [weathermood])
    


    //converting seconds to time
    let sec=sunset;
    let date=new Date(sec*1000);
    let timeStr=`${date.getHours()}:${date.getMinutes()}`
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}°</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">{name},{country}</div>
          </div>
        </div>

        <div className="date">{new Date().toLocaleString()}</div>

        {/* //Last session */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-left-side">
                {timeStr}
                <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-left-side">
                {humidity}
                <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-left-side">
                {pressure}
                <br />
                Preesure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-left-side">
                {speed}
                <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default WeatherCard;
