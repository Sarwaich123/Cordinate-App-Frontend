import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet'; 
import { useState } from 'react/cjs/react.development';
import App from '../App';
//const [initialPosition, setInitialPosition] = useState<[number, number]>([0,0]);
function MyComponent(props) {
    const [selectedPosition, setSelectedPosition] = useState([0,0]);
const map = useMapEvents({
    click(e) {                                
     props.passtoparent(e.latlng.lat,e.latlng.lng)
    // console.log('latitude on click'+e.latlng.lat)
    // console.log('longtude on click'+e.latlng.lng)                
    },           
})
return null;
}


const Mapselector = (props) => {
const[zoom,setzoom]=useState(70)
const [selectedPosition, setSelectedPosition] = useState([0,0]);
function getvaluefromchild(val1,val2)
{

    props.passtograndparent(val1,val2)

}
        const position=[24.8608,67.0104]

        return(
            <div className="Mapcontainer">
            <div style={{flex:1,marginBottom:20,marginTop:10,marginLeft:50}}>
            <h1 style={{fontSize:24}}>Select Cordinates</h1> 
            </div>
            <div style={{flex:2,marginLeft:50}}>
            <MapContainer className="map" center={position} zoom={zoom} >
           <MyComponent passtoparent={getvaluefromchild}/>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
          </MapContainer>
          </div>
          </div>
    )   
    



    }
export default Mapselector