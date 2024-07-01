const express = require("express")
const axios = require("axios")
const app = express()
const port = process.env.PORT || 3000


app.get("/api/hello", async(req, res) => {
  const visitorName = req.query.visitor_name || "Guest";
  const clientIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  
  try {
    const apiKey = "269e25333904429ca6012904240107"
    const weatherResponse = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${clientIP}`)
    const weatherData = weatherResponse.data
    const city = weatherData.location.name || "Unkown Location"
    const temperature = weatherData.current.temp_c;

    res.json({
      client_ip: clientIP,
      location: city,
      greeting: `Hello, ${visitorName}!, the weather is ${temperature} degrees Celsius today in ${city}`
    })


  } catch (error) {
    res.status(500).json({error: "An error occured ", details: error.message})
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
