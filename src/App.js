import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [image, setImage] = useState([]);
  //const isFives = false;

  useEffect(
    //() => console.log("useEffect called"),
    () => {
      fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => setImage(data.message))
    },
    [count]
  )

  useEffect(() => {
    document.title = text
  }, [text]
  )

  useEffect(() => {
    setTimeout(() => setCount(0), 5000)
  }, [])

  console.log("Component rendering");

  return <div>
            <button onClick={() => setCount((count) => count + 1)}>
              I have clicked this button {count} times
            </button>

            <input 
              type="text"
              placeholder="type..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <div>
              {image.map((image) => (
                <img src={image} key={image} alt={image} />
              ))}
            </div>
          </div>
}

export default App;
