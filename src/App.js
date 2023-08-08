import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import WeatherContainer from './components/WeatherContainer';

function App() {
  const [citySearch,setCitySearch] = useState('Bengaluru');
  return (
    <div>
      <Header citySearch={citySearch} setCitySearch={setCitySearch}/>
      <WeatherContainer citySearch={citySearch}/>
    </div>
  );
}

export default App;
