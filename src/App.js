import { useEffect, useState } from "react";
import { request } from "axios";
import Wordle from "./components/Wordle";
import randonWordsApi from "./hooks/randomWordsApi";

function App() {
  const [solution, setSolution] = useState(null);

  console.log("Solution", solution)

  useEffect(() => {
    request(randonWordsApi)
      .then(function (response) {
        const randomSolution =
          response.data[Math.floor(Math.random() * response.data.length)];
        setSolution(randomSolution);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [setSolution]);

  return (
    <div className="App">
      <h1>
        Wordle {" "}
        <span className="reload" onClick={() => window.location.reload()}>
          reload
        </span>
      </h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
