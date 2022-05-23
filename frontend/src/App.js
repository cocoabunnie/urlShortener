import './App.css';
import Home from './Home';
import Analytics from './Analytics';
import Instructions from './Instructions';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route exact path = "/analytics" element = {<Analytics/>}/>
          <Route exact path = "/instructions" element = {<Instructions/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
