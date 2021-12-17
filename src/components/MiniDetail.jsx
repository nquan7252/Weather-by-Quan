import React, { Component } from 'react';
class MiniDetail extends React.Component {
    render() { 
        return <div>{this.getData()}</div>;
    }
    getData=()=>{
        // console.log(this.props.title)
        // switch(this.props.title){
        //     case 'humidity':
        //         return 
        //     default:
        //         break;
            
        return (<div className='total-container'>
            <div className='icon-container'>
            <img className='icon' src={this.getImage()}></img>
            </div>
            <div className='detail-container'>
            <h4>{this.props.title}</h4>
            <h4 id="value">{this.props.value}</h4>
            </div>
        </div>)
    }
    getImage=()=>{
        switch(this.props.title){
            case 'Humidity':
                return require('../assets/humidity.png');
            case 'Pressure':
                return require('../assets/pressure.png');
            case 'Wind':
                return require('../assets/wind.png');
            case 'Feels like':
                return require('../assets/feelslike.png')
            default:
                return '';
        }
    }
}
 
export default MiniDetail;