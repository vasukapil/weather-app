import React, { useEffect, useState } from "react";
import { fetchForecastData } from "../../api/ForecastData";
import { fetchWeatherData } from "../../api/WeatherData";
import { useAppContext } from "../../utils/context/AppContext";
import LoadingSpinner from "../../utils/LoadingSpinner";
import { convertTemperature, getTemperatureUnit } from "./helper";
import WeatherForecast from "./WeatherForecastCard";

const WeatherContainer = ({ citySearch }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const { unit } = useAppContext();

  const getWeatherData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchWeatherData(citySearch);
      setWeatherData(data);
    } catch (error) {
      setError("City not found. Please enter a valid city name.");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const getForecastData = async () => {
    try {
      setLoading(true);
      setError(null);
      const forecast = await fetchForecastData(citySearch);
      const filteredForecast = forecast.list.filter(
        (data, index) => index % 8 === 0
      );
      setForecastData(filteredForecast);
    } catch (error) {
      setError("Error fetching forecast data.");
      setForecastData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!citySearch) {
        return;
      }
      getWeatherData();
      getForecastData();
    
  }, [citySearch]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">Weather Forecast</h2>
      {error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          {error}
        </div>
      ) : (
        weatherData &&
        weatherData.cod !== "404" && (
          <>
            <div class="max-w-sm mx-auto shadow-lg bg-[#07232f] rounded-lg overflow-hidden mt-4">
              <img
                class="w-full h-32 object-contain"
                src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}.png`}
                alt={weatherData?.weather[0]?.description}
              />
              <div class="py-4 px-6">
                <h2 class="text-lg font-semibold text-gray-400 mb-2">
                  Weather Information
                </h2>
                <p className="text-sm text-white mb-2">
                  City: {weatherData?.name}
                </p>
                <p className="text-sm text-white mb-2">
                  Current Temperature:{" "}
                  {convertTemperature(weatherData.main.temp, unit)}{" "}
                  {getTemperatureUnit(unit)}
                </p>
                <p className="text-sm text-white mb-2">
                  Min Temperature:{" "}
                  {convertTemperature(weatherData.main.temp_min, unit)}{" "}
                  {getTemperatureUnit(unit)}
                </p>
                <p className="text-sm text-white mb-2">
                  Max Temperature:{" "}
                  {convertTemperature(weatherData.main.temp_max, unit)}{" "}
                  {getTemperatureUnit(unit)}
                </p>
                <p class="text-sm text-white mb-2">
                  Humidity: {weatherData?.main?.humidity}%
                </p>
                <p class="text-sm text-white mb-2">
                  Wind Speed: {weatherData?.wind?.speed} m/s
                </p>
                <p class="text-sm text-white mb-2">
                  Wind Direction: {weatherData?.wind?.deg}°
                </p>
                <p class="text-sm text-white mb-2">
                  Description: {weatherData?.weather[0]?.description}
                </p>
              </div>
            </div>
            <WeatherForecast forecastData={forecastData} />
          </>
        )
      )}
    </div>
  );
};

export default WeatherContainer;
