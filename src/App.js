import Search from "./Components/Search";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DebouncedSearch from "./Components/DebouncedSearch";
import FetchedSearch from "./Components/FetchedSearch";

function App() {
  return (
    <div className="App">
 
    {/* <Router>
      <nav>
        <ul style={{
          display:'flex',
          justifyContent:'space-around'
        }}>
          <li><Link  to='/'> Simple Search </Link></li>
          <li><Link  to='/debouncedsearch'> Debounced Search </Link></li>
          <li><Link  to='/fetchedsearch'> Fetched Search </Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/debouncedsearch" element={<DebouncedSearch />} />
        <Route path="/fetchedsearch" element={<FetchedSearch />} />
      </Routes>

    </Router> */}

    <div style={{display:'flex', justifyContent:'space-around'}}>
      <div><Search /></div>
      <div><DebouncedSearch /></div>
      <div><FetchedSearch /></div>
    </div>

    </div>
  );
}

export default App;
