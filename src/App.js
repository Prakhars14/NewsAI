import React, { useState, useEffect } from "react";
import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

const App = () => {
  const alanKey = process.env.APIKEY;

  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadLines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);
  return (
    <div className="App">
      <div styles={{ marginTop: "20%" }}>
        <h1>Prakhar news application</h1>
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
