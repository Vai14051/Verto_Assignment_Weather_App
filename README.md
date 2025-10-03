# 🌦️ Weather Hub  

**Weather Hub** is a simple weather web application developed as part of an assignment for **Verto**.  
The app provides **real-time weather updates** and a **5-day forecast** using public weather APIs.  

---

## 🚀 Features
- 🔍 Search for any city to get **current weather details** (temperature, humidity, clouds).  
- 📅 View a **5-day forecast** with weather conditions, average temperature, humidity, and wind speed.  
- ↔️ **Tab switching** between "Current Weather" and "Forecast".  
- ⏳ **Loading animation** while fetching data.  
- ❌ **Error handling** for invalid or empty inputs.  

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **APIs Used:**  
  - [OpenWeatherMap API](https://openweathermap.org/api) – Current weather  
  - [WeatherAPI](https://www.weatherapi.com/) – 5-day forecast  
- **IDE:** Visual Studio Code (with Live Server extension)  

---

## 📂 Project Structure
📁 WeatherHub
│── index.html # Main HTML structure
│── index.css # Styling for layout & UI
│── index.js # JavaScript logic (API calls, tab switch, DOM updates)
│── weather-news.png # App icon
│── assets/ # (Optional) GIFs or images
## ⚙️ Setup & Usage
1. Clone the repository or download the files.  
   ```bash
   git clone https://github.com/your-username/weather-hub.git
   cd weather-hub

   Open the project in VS Code.

Install the Live Server extension if not already installed.

Right-click index.html → Open with Live Server (or click Go Live).

Enter a city name in the search bar to fetch weather updates.

🔑 API Keys

The app requires API keys for fetching data:

OpenWeatherMap
 – for current weather

WeatherAPI
 – for 5-day forecast

Update your keys in index.js:

const OPENWEATHER_KEY = "YOUR_OPENWEATHERMAP_KEY";
const WEATHERAPI_KEY = "YOUR_WEATHERAPI_KEY";

📚 Learning Outcomes

Practiced API integration with JavaScript.

Improved DOM manipulation and error handling.

Gained experience in creating a responsive and user-friendly interface.

🙌 Credits

APIs: OpenWeatherMap & WeatherAPI

Icons: Font Awesome

Loading GIFs: Free online resources

📜 License

This project is part of an assignment for Verto.
For learning and demonstration purposes only.
