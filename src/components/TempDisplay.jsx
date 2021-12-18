import React, { Component } from 'react';
import Detail from './Detail';
class TempDisplay extends React.Component {
    render() { 
        return (<div className='info-container'>
             <div className='temp-container'>
        
                 <div className='location-container'>
                     
                     {/* <img className='icon'src={require('../assets/location.png')}></img> */}
                     {this.getLocation()}
                 </div>
               
                 <span>{this.getTemp()}</span>
             </div>
             <span className='meta-container'><Detail data={this.props.data}></Detail></span>
             </div>)
        ;
    }
    getTemp=()=>{
        console.log(this.props.data);
        return this.props.data==null? '':
        <div>
            <img className='icon'src={require('../assets/location.png')}></img>
            <span className='city'>{this.props.data.current.temp+"°C"}</span>;
            </div>
    }
    getLocation=()=>{
        return this.props.data==null?'':this.props.city;
    }
}
 
export default TempDisplay;