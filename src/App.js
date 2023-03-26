import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./components/CityComponent";
import WeatherInfoComponent from "./components/WeatherInfoComponent";
// import WeatherInfoComponent from "./components/WeatherInfoComponent";


function App() {
  const [city, updateCity] = useState();
  const [weather, setweather] = useState();
  const fetchWeather=async(e)=>{
    e.preventDefault();
    const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5d7641af55dc4a94632112043840f290`);
    // console.log(response);
    setweather(response.data);
  }
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {weather? (<WeatherInfoComponent weather={weather}/>):
      (<CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>)}
      {/* <WeatherInfoComponent/> */}
    </Container>
  );
}

export default App;

const Container=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:auto;
  width:380px;
  padding:20px 10px;
  border-radius:4px;
  box-shadow: 0 3px 6px 0 #555;
  background:white;
  font-family: Montserrat;
`;
const AppLabel=styled.span`
  color:black;
  margin:20px auto;
  font-size:18px;
  font-weight:bold;
`


