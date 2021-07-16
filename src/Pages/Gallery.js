import Search from "../Components/Search/";
import Image from "../Components/Image/";
import Data from "../Data/dataGif";

function Gallery() {
  return (
    <div>
       <form>
        <input type="search" placeholder="Search ..."></input>
        <button id="search-button">Search</button>
      </form>
      <Search />
      <Image img={Data.url} title={Data.title} />
    </div>
  );
}

export default Gallery;