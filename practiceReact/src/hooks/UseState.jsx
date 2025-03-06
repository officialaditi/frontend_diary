import { useState } from "react";

const UseState = () => {
  //   const [counter, setCounter] = useState(0);
  //   const HandleInc = () => {
  //     setCounter(counter + 1);
  //   };
  //   const HandleDec = () => {
  //     setCounter(counter-1);
  //   }

  // using useState with arrays
  //   const [fruits, setFruits] = useState(["Apple", "Strawberry", "Banana"]);
  //   const addFruitHandler = () => {
  //     setFruits([...fruits, "Chickoo"]);
  //   };

  //   const removeFruitHandler = () => {
  //     setFruits(fruits.filter((f) => f !== "Apple"));
  //   };

  //   const updateFruitHandler = () => {
  //     setFruits(fruits.map((f) => f === 'Apple' ? 'I love Apple': f));
  //   }

  // using useState with object
  const [movies, setMovies] = useState([
    {
      title: "Sanam Teri Kasam",
      genre: "Romantic",
      id: "1",
    },
    {
      id: "2",
      title: "Harry Potter",
      genre: "Fiction",
    },
  ]);
  const addGenreHandler = () => {
    setMovies({ ...movies, genre: "Fantasy" });
  };

  return (
    <>
      {/* <h1>Counter App</h1>

      <h3>{counter}</h3>
      <button onClick={HandleInc}>Increment +</button>
      <button onClick={HandleDec}>Decrement +</button> */}
      {/* <ul>
        {fruits.map((f) => (
          <li>{f}</li>
        ))}
      </ul>
      <button onClick={addFruitHandler}>Add fruits</button>
      <button onClick={removeFruitHandler}>Remove fruits</button>
      <button onClick={updateFruitHandler}>Update fruits</button> */}
      {/* <div>
        {/** all about object like how to aaccess the object store in use-State */}
      {/* <div>
          <h1>{movies.title}</h1>
          <h3>{movies.genre}</h3>
        </div>

        <button onClick={addGenreHandler}>Add</button> */}
      {/* </div> */}
      {/* <div> */}
        {/* all about how to get content stored in array of object */}
        {/* <ul>
          {movies.map((movie) => {
            return <li>movie:-{movie.title}, genre:{movie.genre}</li>;
          })}
        </ul> */}
      {/* </div> */}
    </>
  );
};
export default UseState;
