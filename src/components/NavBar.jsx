import React, { Component } from 'react';
import cities from 'cities.json'
function NavBar({data,getNew}){

    return (
        <div style={{display:'block'}}>
        <form onSubmit={getNew} className="d-flex " style={{marginRight:100,marginLeft:100,paddingTop:50}}>
        <input id="input" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{color:'white',background:'transparent',borderColor:'white'}}/>
        <button className="btn btn-outline-light"  type="submit">Search</button>
        </form>
  
        </div>
    )
}
 
export default NavBar;