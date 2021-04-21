
import { useEffect } from 'react';
import './App.css';
import { useStateValue } from './store/StateProvider';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  
  
  const [{ term, isLoading, images }, dispatch] = useStateValue();
  

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // setImages(data.hits);
        // setIsLoading(false)
        dispatch({
          type: "SET_IMAGES",
          images: data.hits,
        });

        dispatch({
          type: "SET_LOADING",
          isLoading: false,
        });
      })
      .catch((err) => console.log(err));
  }, [term, dispatch]);


  return (
    <div className="container mx-auto">
      <ImageSearch />

      {!isLoading && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto text-green-500">Image Not Found.</h1>
      )}
      
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto">Loading....</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          <ImageCard />
        </div>
      )}
    </div>
  );
}

export default App;
