import React from 'react'


function CityDetails(props) {
    console.log(props);
    const detail= props.location.state.details;
    return (
        <div className="result">
           {detail.name}

        </div>
    )
}
export default CityDetails;