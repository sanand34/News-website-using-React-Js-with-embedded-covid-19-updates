import React, { useState, useEffect } from "react";
import Movie from "./Movie.js";
import Infobox from "./Infobox.js";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import MediaCard from "./News.js";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Latest from "./Latest.js";
function App() {
  const [countryname, setCountryname] = useState("India");
  const [country, setCountry] = useState(null);
  const [allCountry, setAllCountry] = useState(null);
  const [news, setNews] = useState(null);
  const [covid, setCovid] = useState(null);

  useEffect(() => {
    async function data() {
      await fetch(
        `https://restcountries.eu/rest/v2/name/${countryname}?fullText=true`
      )
        .then((response) => response.json())
        .then((data) => {
          setCountry(data);
        });
    }

    data();
  }, [countryname]);

  useEffect(() => {
    async function data() {
      await fetch(
        `https://api.currentsapi.services/v1/search?country=${country[0].alpha2Code}&language=en&apiKey=${'Get From website'}`
      )
        .then((response) => response.json())
        .then((data) => {
          setNews(data);
        });
    }
    {
      country && data();
    }
  }, [country]);

  useEffect(() => {
    async function data() {
      await fetch(
        `https://disease.sh/v3/covid-19/countries/${country[0].alpha2Code}`
      )
        .then((response) => response.json())
        .then((data) => {
          setCovid(data);
        });
    }
    {
      country && data();
    }
  }, [country]);

  useEffect(() => {
    async function data() {
      await fetch(`https://restcountries.eu/rest/v2/all
      `)
        .then((response) => response.json())
        .then((data) => {
          setAllCountry(data);
        });
    }
    data();
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <div style={{ display: "grid", placeContent: "center" }}>
          <Switch>
            <Route exact path="/">
              <FormControl className="app__dropdown">
                <Select
                  variant="outlined"
                  onChange={(e) => {
                    setCountryname(e.target.value);
                  }}
                  value={allCountry ? countryname : "Worldwide"}
                >
                  {allCountry?.map((data) => (
                    <MenuItem key={data.name} value={data.name}>
                      {data.name}
                    </MenuItem>
                  ))}
                  <MenuItem value="Worldwide"></MenuItem>
                </Select>
              </FormControl>
              <div style={{ overflowY: "scroll", height: "800px" }}>
                {covid && (
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <Infobox
                      title="Coronavirus Cases"
                      cases={covid.todayCases}
                      total={covid.cases}
                    />

                    <Infobox
                      title="Deaths"
                      cases={covid.todayDeaths}
                      total={covid.deaths}
                    />
                  </div>
                )}

                <div>
                  {news &&
                    news.news.map((news) => (
                      <div style={{ padding: "30px" }}>
                        <MediaCard key={news.id} news={news} />
                      </div>
                    ))}
                </div>
              </div>
            </Route>

            <Route path="/search/:id">
              <div
                style={{
                  height: "80vh",
                  overflowY: "scroll",
                }}
              >
                <Latest />
              </div>
            </Route>
            <Route path="/movie/new">
              {" "}
              <div
                style={{
                  height: "80vh",
                  overflowY: "scroll",
                }}
              >
                {" "}
                <Movie />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
