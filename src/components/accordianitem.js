import React from 'react'
import SubmitButton from './SubmitButton'
import '../accordianstyle.css';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import Deletebutton from './deletebutton';
import { map,MapContainer, TileLayer,Marker,Popup,useMapEvents } from 'react-leaflet';


class AccordionItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.Deleteuser = this.Deleteuser.bind(this);
        this.state = {
            visibility: false,
            lotitude:24.8608,
            longitude:67.0104,
            zoom:400
        }
    }
    async Deleteuser(myid){
        const requestOptions = {
           method: 'POST',
           headers: { 'Content-Type': 'application/json'},
           body: JSON.stringify({id:myid})
         };
         await fetch('https://localhost:44340/ViewRecord/deleteuser',requestOptions)
         .then(response =>{
            if(response.ok)
            {
              response.text().then((result)=> {
            if(result=='Deletion performed Successfully')
            {
                window.location.reload(false);
            }
              })
        }})
      }
    
    
    
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility,
            }
        })
    }
    render() {
        const activeStatus = this.state.visibility ? 'active' : ''
        const position=[this.state.lotitude,this.state.longitude]
        console.log(position)
        return (
            <div>
                <button className="accordion__button" onClick={this.handleToggleVisibility}>{this.props.hiddenText.name}<span className={this.state.visibility? 'fas fa-minus': 'fas fa-plus'}></span></button>
                <div className={`accordion__content ${activeStatus}`} style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
                    <div style={{display:'flex',flexDirection:'column'}}>  
                    <div style={{marginBottom:20}}>
                    <text>User Role {this.props.hiddenText.role}</text>    
                    </div>
                    <div style={{marginBottom:20}}>
                    <text>User Station {this.props.hiddenText.station_City}</text>
                    </div>
                    <div style={{marginBottom:20}}>
                    <SubmitButton
                    disabled={false}
                    text={'Delete'}
                     onClick={()=>this.Deleteuser(this.props.hiddenText.id)}           
                     />  
                    </div>
                    </div>    
                <div>
                    <MapContainer className="map12" center={position} zoom={this.state.zoom} >
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    
                    </MapContainer>
                    
                </div>    
                </div>
                
            </div>
        );
    }
}
export default AccordionItem