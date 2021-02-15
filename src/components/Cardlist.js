import React from 'react'


function CityDetails(props) {
    console.log(props);
    const detail= props.location.state.details;
    return (
        <div className="result">
            <div>{detail.name}</div>
            <div>{detail.main.temp}</div>
           

        </div>
    )
}
export default CityDetails;