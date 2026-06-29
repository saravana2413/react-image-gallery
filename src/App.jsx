import "./App.css";
import ImageCard from "./components/ImageCard";
import images from "./data/images";

function App() {
  return (
    <>
      <h1 className="heading">Dynamic Image Gallery</h1>

      <div className="gallery">
        {images.map(function (item) {
          return (
            <ImageCard
              key={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;