import React, { useState, useEffect } from "react";
import MediaCard from "./News.js";
import { useParams } from "react-router-dom";
function Latest() {
  const [news, setNews] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function data() {
      await fetch(
        `https://api.currentsapi.services/v1/search?keywords=${id}&language=en&&apiKey=96HVoSyCI_4qH_GCA9h70BOBpf932PmwEfJuv_gmIIt_lHws`
      )
        .then((response) => response.json())
        .then((data) => {
          setNews(data);
          console.log(news);
        });
    }

    data();
  }, [id]);
  return (
    <div>
      {news &&
        news.news.map((news) => (
          <div style={{ padding: "30px" }}>
            <MediaCard key={news.id} news={news} />
          </div>
        ))}
    </div>
  );
}

export default Latest;
