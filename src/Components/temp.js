import React,{useState,useEffect} from "react";
import WeatherCard from "./weatherCard";
import "./style.css";

const Temp=()=> {

  const [SearchValue, setSearchValue] = useState("Aurangabad");
  const [tempInfo, setTempInfo] = useState({});



  const getWeatherInfo= async()=>{
    try{
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${SearchValue}&units=metric&appid=30f2dc7cf1f187563ce0cef77688c2cb`
    
      const res=await fetch(url);
      const data=await res.json();
      
      // console.log(data);

      //object destruction:
      const {temp,humidity,pressure}=data.main;
      const{main:weathermood}=data.weather[0];
      const{name}=data;
      const{speed}=data.wind;      
      const{country,sunset}=data.sys;

      //passing all the data as a object
      const myNewWeatherInfo={
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(myNewWeatherInfo);
    }catch(err){
      console.log(err);
    }


  };

  //this will get called for very first time without clicking search 
  useEffect(() => { 
    getWeatherInfo();
  }, [])
  


  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={SearchValue}//to set value provided by user
            onChange={(e)=>setSearchValue(e.target.value)}//to get that value
          />
          <button className="searchButton" type="button" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>

      <WeatherCard tempInfo={tempInfo}/>
    </>
  );
}

export default Temp;
