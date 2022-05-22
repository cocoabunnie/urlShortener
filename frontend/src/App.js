import './App.css';
import Home from './home';
import Analytics from './analytics';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route exact path = "/analytics" element = {<Analytics/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
