import moment from "moment";

export const formatDate = (date) => {
  return moment(date).format("DD/MMM/YYYY");
};

export const formatTime = (time) => {
  return moment(time, "HH:mm:ss").format("hA");
};

export const convertTemperature = (temp, unit) => {
  return unit === "imperial" ? (temp * 9) / 5 + 32 : temp;
};

export const getTemperatureUnit = (unit) => {
  return unit === "imperial" ? "°F" : "°C";
};
