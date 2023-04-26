
import './App.css'
import searchicon from'./search.svg';
import MovieCard from './MovieCard';
import { useEffect ,useState} from "react";


const  API= "http://www.omdbapi.com?apikey=52c62190"



function App() {
const [searchTerm, setSearchTerm] = useState('')
const [movies,setMovies] = useState([])
const [showModal, setShowModal] = useState(false);



const searchMovies = async (title) => {
  const response = await fetch(`${API}&s=${title}`);
  const data = await response.json();
  if (data.Response === 'False') {
    setShowModal(true);
    setMovies([]);
  } else {
    setMovies(data.Search);
    setShowModal(false);
  }
};


useEffect(() => {
  searchMovies('spiderman');
}, []);

const handleSearch = () => {
  searchMovies(searchTerm);
};

const handleModalClose = () => {
  setShowModal(false);
};
  
return (
  <div className="App">
    <h1>Movie Land</h1>

    <div className="search">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />


      <img src={searchicon} alt="Search" onClick={handleSearch} />
      </div>

      <div className="container">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} data={movie} />
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Movie not found.</p>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}

      <div className={`container ${showModal ? 'hidden' : ''}`}>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} data={movie} />
        ))}
      </div>
  </div>
    
)}
    
export default App;
