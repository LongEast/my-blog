import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css'; // 可选，引入样式

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const city = '东营'; // 设定的城市

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('https://restapi.amap.com/v3/weather/weatherInfo?parameters', {
          params: {
            city: city, // 设定的城市
            key: 'f3cfb0a100917cafdbb6a8a04f374171', // 替换为你的 API 密钥
            extensions: 'base', // 返回天气信息的详细程度
          }
        });
        
        // 获取天气数据，注意高德 API 返回的数据结构
        if (response.data.status === '1') {
          setWeatherData(response.data.lives[0]); // 取第一个城市的天气
        } else {
          console.error('获取天气数据失败:', response.data.info);
        }
      } catch (error) {
        console.error('获取天气数据失败：', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <p>加载中...</p>;
  }

  if (!weatherData) {
    return <p>未找到天气数据。</p>;
  }

  return (
    <div className="weather-block">
      <h2>天气</h2>
      <div className="weather">
        <p>城市：{weatherData.city}</p>
        <p>温度：{weatherData.temperature}°C</p>
        <p>天气：{weatherData.weather}</p>
      </div>
    </div>
  );
}

export default Weather;
