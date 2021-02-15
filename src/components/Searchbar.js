import React, { useEffect, useState } from "react";
import Card1 from './Card';


export default function Search(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("aman");
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${props.searchText}&units=metric&appid=e899757c1162bf7b2b2684a0b2b8f5cc`;
      const response = await fetch(url);

      const resJson = await response.json();
      setData([...data, resJson]);
    };
    fetchApi();
  }, [props.searchText]);

  return (
    <React.Fragment>
      <div className='seacrhStyle'>
        <input value={props.searchText} onChange={props.handleInput} />
      </div>
      <br></br>
      <hr></hr>
      <div>
      <Card1 data={data} />
      </div>
    </React.Fragment>
  );
}