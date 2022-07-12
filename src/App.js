import "./App.css";
import axios from "axios";
import { useState } from "react";
import Answers from "./components/Answers";
import Results from "./components/Results";
import GooglePic from "./assets/googlelogo_light_color_272x92dp.png";
function App() {
  const [search, setSearch] = useState("");
  const [answers, setAnswers] = useState([]);
  const [results, setResults] = useState([]);
  const options = {
    method: "GET",
    url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${search}`,
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "EU",
      "X-RapidAPI-Key": "5eea81f06dmsh50ae870038a1594p14d1c7jsnf5358246dcc4",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
    },
  };

  const getResult = () => {
    axios
      .request(options)
      .then(function (response) {
        setAnswers(response.data.answers);
        setResults(response.data.results);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <img src={GooglePic} alt="logo" />

      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button onClick={getResult}>Keresés</button>
      <div className="container">
        {/*{" "}
        {answers.map((a) => {
          return <Answers key={a} answers={a} />;
        })}
      */}
        {results.map((r) => {
          console.log(r);
          return (
            <Results
              key={r}
              results={r.title}
              link={r.link}
              description={r.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
