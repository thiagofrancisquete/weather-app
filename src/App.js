import React from "react";
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "e57ab28d4a95370c1b9cef842c7d68a9"
// http://api.openweathermap.org/data/2.5/weather?id=3448636&APPID=e57ab28d4a95370c1b9cef842c7d68a9&units=metric


class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        max: undefined,
        min: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`)
        const data = await api_call.json()
        if (city && country){
            console.log(data)
            this.setState({
                temperature: data.main.temp,
                max: data.main.temp_max,
                min: data.main.temp_min,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            })
        } else {
           this.setState({
               temperature: undefined,
               max: undefined,
               min: undefined,
               city: undefined,
               country: undefined,
               humidity: undefined,
               description: undefined,
               error: "Please enter a valid value"
           })
        }
    }
    render(){
        return (
            <div>
                <Titles />
                <Form getWeather={this.getWeather}/>
                <Weather 
                    temperature={this.state.temperature}
                    max={this.state.max}
                    min={this.state.min}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default App