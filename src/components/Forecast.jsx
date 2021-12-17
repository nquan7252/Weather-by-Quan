import React, { Component } from 'react';
import DayForecast from './DayForecast';
class Forecast extends React.Component {
    state={daily:true}
    render() {
        return <div style={{paddingLeft:50}}>
            <div className='daily-hourly'>
                <h5 onClick={this.toggleDaily}>{this.displayDaily()}</h5>
                <div className='vertical-line'><h5 onClick={this.toggleHourly}>{this.displayHourly()}</h5></div>
            </div>
            <div className='forecast-container' style={{ bottom: 10, marginRight: "50px", display: 'flex' }}>
                {this.state.daily?this.getDailyForecast():this.getHourlyForecast()}
            </div>
        </div>;
    }
    getDailyForecast = () => {
        return this.props.data == null ? '' : this.props.data.daily.map((single) => <DayForecast offset={this.props.data.timezone_offset} value='daily' data={single} temp={single.temp.day} day={single.dt} key={single.dt}></DayForecast>)
    }
    getHourlyForecast=()=>{
        let newArr=this.props.data.hourly.slice(0,25);
        return this.props.data == null ? '' : newArr.map((single) => <DayForecast offset={this.props.data.timezone_offset} value='hourly' data={single} temp={single.temp.day} day={single.dt} key={single.dt}></DayForecast>)
    }
    displayDaily=()=>{
        if (this.state.daily)
        return <span id='daily-on'>Daily</span>
        return <span id='daily-off'>Daily</span>
    }
    displayHourly=()=>{
        if (!this.state.daily)
        return <span id='hourly-on'>Hourly</span>
        return <span id='hourly-off'>Hourly</span>
    }
    toggleDaily=()=>{
        this.setState({daily:true})
    }
    toggleHourly=()=>{
        this.setState({daily:false})
    }
}

export default Forecast;