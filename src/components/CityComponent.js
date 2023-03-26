import React from 'react'
import styled from 'styled-components'

const CityComponent = ({updateCity,fetchWeather}) => {
  return (
    <>
        <WeatherLogo src='/icons/perfect-day.svg'/>
        <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
            <input type='text' placeholder='City' onChange={(e)=>updateCity(e.target.value)}/>
            <button type='submit'>Search</button>
        </SearchBox>
    </>
  )
}

export default CityComponent

const WeatherLogo=styled.img`
    width:140px;
    height:140px;
`;
const ChooseCityLabel=styled.span`
    color:black;
    font-size:18px;
    font-weight:bold;
    margin:10px auto;
`;
const SearchBox=styled.form`
    display:flex;
    flex-direction:row;
    border:1px solid black;
    border-radius:2px;
    color:black;
    font-size:18px;
    font-weight:bold;
    margin:20px auto;

    input{
        border:none;
        outline:none;
        padding:10px;
        font-size:14px;
    }
    button{
        ${'' /* border-radius:2px; */}
        border:none;
        background:black;
        color:white;
        padding:10px;
        font-size:14px;
        cursor:pointer;
    }

`;