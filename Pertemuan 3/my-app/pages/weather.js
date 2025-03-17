// pages/weather.js
import { useEffect, useState } from "react";

const WeatherPage = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch("/api/weather"); // Ambil data dari API backend
        if (!res.ok) throw new Error("Gagal mengambil data cuaca.");

        const data = await res.json();
        setWeather(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!weather || !weather.main) return <p>Data cuaca tidak tersedia.</p>;

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", marginTop: "20px" }}>
      <h1>Cuaca Saat Ini</h1>
      <p><strong>Kota:</strong> {weather.name}</p>
      <p><strong>Suhu:</strong> {weather.main?.temp}°C</p>
      <p><strong>Cuaca:</strong> {weather.weather?.[0]?.description}</p>
    </div>
  );
};

export default WeatherPage;