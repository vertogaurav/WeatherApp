import { useState } from 'react'
import './App.css';
import Search from './components/Searchbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CityDetails from './components/Cardlist'

function App() {
  const [searchText, setSearchText] = useState("")

  const handleInput = (e) => {
    setSearchText(e.target.value)
  }
  return (
    <div className="App">
      <h1>Weather App</h1>
      <br></br>
      <Switch>
        <Route exact path="/" render={() => 
          <Search searchText={searchText} handleInput={handleInput} />

        }/>
        <Route exact path="/:city" component={CityDetails}/>
      </Switch>
      {/* <Route exact path="/"/> */}


    </div>
  );
}

export default App;