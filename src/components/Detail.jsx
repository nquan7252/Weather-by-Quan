import React, { Component } from 'react';
import MiniDetail from './MiniDetail';
class Detail extends React.Component {
    render() { 
        return <div className='a'>
            {this.getData()}
        </div>;
    }
    getData=()=>{
        console.log(this.props.data)
        if(this.props.data==null) return ''
        return (<div>
                <span id='main'>{this.getMain()}</span>
                <div className='b'>
                <MiniDetail title='Humidity' value={this.props.data.current.humidity+'%'} image={'../assets/humidity.png'}></MiniDetail>
                <MiniDetail title='Pressure' value={this.props.data.current.pressure+'hPa'} image={'../assets/pressure.png'}></MiniDetail>
                <MiniDetail title='Wind' value={this.props.data.current.wind_speed+'mph'} image={'../assets/humidity.png'}></MiniDetail>
                <MiniDetail title='Feels like' value={this.props.data.current.feels_like+"°C"} image={'../assets/humidity.png'}></MiniDetail>
                </div>
                </div>
        );
    }
    getMain=()=>{
        return this.capitalizeFirstLetter(this.props.data.current.weather[0].description);
    }
    capitalizeFirstLetter=(string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
}
 
export default Detail;