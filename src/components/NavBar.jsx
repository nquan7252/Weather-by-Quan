import React, { Component } from 'react';
import cities from 'cities.json'
function NavBar({data,getNew}){

    return (
        <div style={{display:'block'}}>
        <form onSubmit={getNew} className="d-flex " style={{marginRight:100,marginLeft:100,paddingTop:50}}>
        <input id="input" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"   style={{background:'transparent',borderColor:'black'}}/>
        <button className="btn btn-outline-dark"  type="submit">Search</button>
        </form>
  
        </div>
    )
}
 
export default NavBar;