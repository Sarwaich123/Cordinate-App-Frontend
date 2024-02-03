import '../App.css';
import { Component } from 'react';
import LoginData from '../Data/LoginData';
import React from 'react';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { map,MapContainer, TileLayer,Marker,Popup,useMapEvents } from 'react-leaflet';
//convert it into functional component pass data as props 
export default class Mymap extends React.Component{
  constructor(props){
    super(props);  
  this.state={
        lotitude:24.8608,
        longitude:67.0104,
        zoom:70,
        selectedlat:25.4,
        selectedlong:68.3,
        }
 
}


render(){
    const position=[this.state.lotitude,this.state.longitude]
    const selectedPosition=[this.state.selectedlat,this.state.selectedlong]
    return(
        <div className="Mapcontainer">
        <div style={{flex:1,marginBottom:20,marginTop:10,marginLeft:50}}>
        <h1 style={{fontSize:24}}>Select Cordinates</h1> 
        </div>
        <div style={{flex:2,marginLeft:50}}>
        <MapContainer className="map" center={position} zoom={this.state.zoom} >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker           
            key={selectedPosition}
            position={selectedPosition}
            interactive={false} 
            />
      </MapContainer>
      </div>
      </div>
    )
}
  
 
}
