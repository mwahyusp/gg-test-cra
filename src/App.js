import "./App.css";
import Gallery from "./Pages/Gallery.js";
import gifs from "./Data/dataGif";

function App() {
  return (
    <div className="App">
      <Gallery />
       {gifs.map(({id,title,webp,rating}) => (
        rating === 'g' && <img src={webp} title={title} alt={title} key={id} />
       ))}
    </div>
  );
}

export default App;