
import './Style/app.scss';

import { BrowserRouter as Router ,Route , Routes } from "react-router-dom";
import Home from './Components/Home'
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
     <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/' element={<Home />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/' element={<Home />}/> */}
      </Routes>
     </Router>
    </div>
  );
}

export default App;
