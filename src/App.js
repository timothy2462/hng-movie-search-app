

import "./App.css";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
