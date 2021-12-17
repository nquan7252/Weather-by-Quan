import React, { Component } from 'react';
class DayForecast extends React.Component {

  render() {
    return <div className="card border-dark bg-transparent" style={{ minWidth: 150, marginRight: "20px", border: 'none' }}>
      <div className="day-container" style={{ color: 'white', marginBottom: 20 }}>
        {this.getDay()}
      </div>
      <div className='card-img-container'>
        <img className="card-img" src={this.getImage()} alt="" />
      </div>
      <div className="card-body" style={{ display: 'block', justifyContent: 'center' }}>
        <span style={{color:'white'}}>{this.getStatus()}</span>
        {this.props.value == 'daily' && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span style={{ paddingRight: 7, color: 'white' }}>{this.getHi()}</span>
            <div className='vertical-line' style={{ paddingLeft: 7, color: '#c9c9c9' }}>{this.getLo()}</div>
          </div>
        )}
        {this.props.value != 'daily' && (
          <div>
            <span style={{ paddingRight: 7, color: 'white' }}>{this.getHourTemp()}</span>
          </div>
        )}
      </div>

    </div>;
  }
  getStatus=()=>{
    return this.capitalizeFirstLetter(this.props.data.weather[0].description);
  }
  capitalizeFirstLetter=(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  getHourTemp=()=>{
    return this.props.data.temp
  }
  getHi = () => {
    return this.props.data.temp.max;
  }
  getLo = () => {
    return this.props.data.temp.min;
  }
  getDay = () => {
    
    var a = new Date((Number(this.props.day)+Number(this.props.offset))* 1000);
 
    if (this.props.value == 'daily') {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      return days[a.getDay()];

    }
    else {
      console.log(this.props.day);
    console.log(this.props.offset);
    console.log(a.getUTCHours());
    return a.getUTCHours()+":00";
      return a.toUTCString('en-US', { hour: 'numeric', hour12: true })

      return a.getHours();
     //return a.toLocaleString('en-US', { hour: 'numeric', hour12: true })
    }
  }
  getImage = () => {
    if (this.props.value=='daily'){
    if (this.props.data.weather[0].main == null)
      return '';
    switch (this.props.data.weather[0].main) {
      case 'Rain':
        return require('../assets/rain.png');
      case 'Drizzle':
        return require('../assets/rain.png');
      case 'Clear':
        return require('../assets/sun.png');
      case 'Thunderstorm':
        return require('../assets/storm.png')
      case 'Snow':
        return require('../assets/snowflake.png')
      case 'Clouds':
        return require('../assets/cloudy.png')
      default:
        return ''
    }
  }
  else{
    var a = new Date((this.props.day+this.props.offset) * 1000);
    let hour24=a.getUTCHours();
    switch (this.props.data.weather[0].main) {
      case 'Rain':
        return require('../assets/rain.png');
      case 'Drizzle':
        return require('../assets/rain.png');
      case 'Clear':
        if (hour24<6||hour24>=18)
        return require('../assets/moon.png')
        return require('../assets/sun.png');
      case 'Thunderstorm':
        return require('../assets/storm.png')
      case 'Snow':
        return require('../assets/snowflake.png')
      case 'Clouds':
        if (hour24<6||hour24>=18)
        return require('../assets/cloudnight.png')
        return require('../assets/cloudy.png')
      default:
        return ''
    }
  }
}
}

export default DayForecast;