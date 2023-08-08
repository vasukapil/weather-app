import React from "react";
import { useAppContext } from "../../utils/context/AppContext";
import { convertTemperature, formatDate, formatTime } from "./helper";

const WeatherForecastCard = ({ date, averageTemp, description, iconCode }) => {
  const { unit } = useAppContext();
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

  return (
    <div className="bg-[#093a51] shadow-lg rounded-lg p-4 mx-2 my-2 w-48 mr-6 ml-6 mt-6">
      <h3 className="text-lg text-white font-semibold mb-2">{formatDate(date)}</h3>
      <img src={iconUrl} alt={description} className="w-12 h-12 mx-auto mb-2" />
      <p className="text-white mb-2">{description}</p>
      <p className="text-blue-400 font-semibold">{convertTemperature(averageTemp, unit)} {unit === 'imperial' ? '°F' : '°C'}</p>
      <p className="text-white">{formatTime(date)}</p>
    </div>
  );
};


const WeatherForecast = ({ forecastData }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {forecastData.map((dayData, index) => (
        <WeatherForecastCard
          key={index}
          date={dayData.dt_txt}
          averageTemp={dayData.main.temp}
          description={dayData.weather[0].description}
          iconCode={dayData.weather[0].icon}
        />
      ))}
    </div>
  );
};

export default WeatherForecast;
