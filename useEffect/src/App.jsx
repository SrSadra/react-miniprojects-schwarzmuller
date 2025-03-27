import { useCallback, useEffect, useRef, useState } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';


const selectedIds = JSON.parse(localStorage.getItem("selectedPlaces"));
// const selectedLocation = selectedIds.map((id) => AVAILABLE_PLACES.filter((place) => place.id == id))

function App() {
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState([]);
  const [sortedLocation , setSortedLocation] = useState([]);
  const [modalIsOpen , setModalIsOpen] = useState(false);



  useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
      console.log("pos" , position.coords.latitude , position.coords.longitude);
      const sortedBased = sortPlacesByDistance(AVAILABLE_PLACES , position.coords.latitude , position.coords.longitude);
      setSortedLocation(sortedBased);
    }); // to get user location when user accepted
  }, []);

  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || []; // stored item in localstorage is in string form
    if (storedIds.indexOf(id) === -1) { // the array doesnt contain that id
      localStorage.setItem("selectedPlaces" ,JSON.stringify([...storedIds , id])); // the second attr must be string
    }
  }

  const handleRemovePlace = useCallback (function handleRemovePlace(id) {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false);

    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || []; // stored item in localstorage is in string form
    if (storedIds.indexOf(id) === -1) { // the array doesnt contain that id
      localStorage.setItem("selectedPlaces" ,JSON.stringify([...storedIds , id])); // the second attr must be string
    }
  }, []);

  return (
    <>
      <Modal open={modalIsOpen}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          fallbackText="sorting places by distance"
          places={sortedLocation}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
