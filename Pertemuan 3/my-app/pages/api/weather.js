// pages/api/weather.js
export default async function handler(req, res) {
    const API_KEY = "9301f8dadd95915b4334cd494a2b3539"; // Ganti dengan API Key kamu
    const CITY = "Jakarta"; // Ganti dengan kota yang diinginkan
    const URL = 'https://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=9301f8dadd95915b4334cd494a2b3539&units=metric';
  
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Gagal mengambil data cuaca.");
      }
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }  