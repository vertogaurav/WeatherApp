import React from 'react'
import { Card } from "react-bootstrap";
import TimeIcon from './wi-time-3.svg';

function CityDetails(props) {
    console.log(props);
    const detail = props.location.state.details;
    return (
        <div className="result">
            <div className="sideNav">    
                <h2>{detail.name}</h2>
                <div><img src={TimeIcon}  className="ImgDeatail"/></div>
                <div>Temp - {detail.main.temp}°Cel</div>
                <div>Sky - {detail.weather[0].description}</div>
            </div>
            <div><h2>Today Highlights</h2></div>
           <div className="Card">
            <div> 
                <Card className="content">
                <Card.Body>
                <Card.Title>Temprature</Card.Title>
                <Card.Text>
                <div>
                Min-{detail.main.temp_min}°Cel
                </div>
                <div>
                Max-{detail.main.temp_max}°Cel
                </div>
                </Card.Text>
                
            </Card.Body>
            </Card>
            </div>
            <div> 
                <Card className="content">
                <Card.Body>
                <Card.Title>Wind Status</Card.Title>
                <Card.Text>
                <div>
                Min-{detail.wind.speed}km/hr
                </div>
                <div>
                Max-{detail.main.temp_max}°Cel
                </div>
                </Card.Text>
                
            </Card.Body>
            </Card>
            
            </div>
            <div> 
                <Card className="content">
                <Card.Body>
                <Card.Title>Humidity</Card.Title>
                <Card.Text>
                <div>
                {detail.main.humidity}%
                </div>
                
                </Card.Text>
                
            </Card.Body>
            </Card>
            
            </div>
           
            </div>

        </div>
    )
}
export default CityDetails;