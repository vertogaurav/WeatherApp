import React from 'react';
import { Card } from "react-bootstrap";
import './styles.css';
import TimeIcon from './wi-time-3.svg';
import { Link, withRouter } from 'react-router-dom';


function Card1(props) {


    // const handleClick = (city) => {

    //     props.history.push({
    //         pathname: `/city`,
    //         state: { detail: city }
    //     })
    //     console.log("Card clicked", city.name);
    // }
    const apiData = props.data && props.data.filter((city) => {

        return city.cod === 200 ? city : null;
    });
    //   console.log(apiData);
    return (
        <div className='Card' >
            {apiData && apiData.map((city, index) => {
                return <Link to={{
                    pathname:`/${city.name}`,
                    state: { details: city }
                }}><Card  style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{city.name}</Card.Title>
                            <Card.Img variant="top" src={TimeIcon} className="ImgIcon" />
                            <Card.Text>
                                {city.main.temp}°Cel
    </Card.Text>

                        </Card.Body>
                    </Card>
                </Link>
            })}



        </div>
    )
}
export default withRouter(Card1);

