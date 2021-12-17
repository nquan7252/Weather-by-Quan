import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import vid from './assets/winter.mp4'
import React from 'react';
import Forecast from './components/Forecast';
import TempDisplay from './components/TempDisplay'
import DayForecast from './components/DayForecast';
import cities from 'cities.json'
class App extends React.Component {

  constructor(){
    super();
    this.state={
      data:null,
      longitude:null,
      latitude:null,
      currentCity:null
    }
  }
  initGeoLocation=()=>{
    if( navigator.geolocation)
        {
           // Call getCurrentPosition with success and failure callbacks
           navigator.geolocation.getCurrentPosition(this.success,this.fail );
        }
        else
        {
           alert("Sorry, your browser does not support geolocation services.");
        }
  }
  success=(position)=>{
    var city;
    console.log(position.coords.longitude); 
    this.state={data:null,longitude:position.coords.longitude,latitude:position.coords.latitude,currentCity:null}

    fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng='+this.state.latitude+","+this.state.longitude+'&key=AIzaSyAg4lzVlKVc1BjhmKMh3D8YGJwb3K8ME08')
  .then(res=>res.json())
  .then(json=>{ city= json.results[json.results.length-3].formatted_address});
  

    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+this.state.latitude+'&lon='+this.state.longitude+'&units=metric&exclude=minutely&appid=af68688154fa0ded984ff31d3127a687')
  .then(res=>res.json())
  .then(json=>this.setState({data:json,longitude:this.state.longitude,latitude:this.state.latitude,currentCity:city}))
  }
  componentDidMount(){
    console.log('Component did mount called')
    if (this.state.data==null)
      this.initGeoLocation();
  }

  render(){
  return (
    <div className="App">
      <video id="background-vid" autoPlay muted loop>
        <source src={vid} type='video/mp4'/>
      </video>
      <NavBar getNew={this.handleSubmit} data={cities}></NavBar>
      <TempDisplay city={this.state.currentCity} data={this.state.data}></TempDisplay>
      <Forecast data={this.state.data}></Forecast>
    </div>
  );
}
getData=()=>{
  return this.state.data==null?'':this.state.data
}
 handleSubmit=(event)=>{
  event.preventDefault();
  const word=event.target[0].value;
  const found=cities.find(element=>element.name.toLowerCase()==word.toLowerCase()) ;
  let cityFormat=found.name+", "+found.country;
  console.log(found);
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+found.lat+'&lon='+found.lng+'&units=metric&exclude=minutely&appid=af68688154fa0ded984ff31d3127a687')
  .then(res=>res.json())
  .then(json=>this.setState({data:json,longitude:found.lat,latitude:found.lng,currentCity:cityFormat}))
  }
// getCurrentCity=()=>{
//   if (this.state.latitude!=null){
  
// }
// return null;
// }
}

export default App;
