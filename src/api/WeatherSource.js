import axios from 'axios';

const getApi=()=>{
    let result =axios.get("api.openweathermap.org/data/2.5/weather?q=London&appid=e899757c1162bf7b2b2684a0b2b8f5cc")
    return result;
}
export default getApi;