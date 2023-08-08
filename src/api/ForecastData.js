const API_KEY = process.env.REACT_APP_API_KEY;
export const fetchForecastData = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('City not found. Please enter a valid city name.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching forecast data:', error);
      throw error;
    }
  };
  