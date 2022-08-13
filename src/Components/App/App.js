import { useState, useEffect } from "react";
import AddMovie from "../AddMovie/AddMovie.js";
import "../App/App.css";
import MovieList from "../MovieList/MovieList.js";
import Filtring from "../Filtring/Filtring.js";

const info = [
  {
    title: "Chernobyl",
    img: "https://imgsrc.cineserie.com/2021/05/cher.jpg?ver=1",
    description:
      "The events recount the circumstances of the explosion of the Chernobyl nuclear reactor in April 1986 in the Soviet Socialist Union, which became one of the worst human disasters in the twentieth century.",
    posterURL: "www.chernobyl.com",
    rating: 9.4,
  },
  {
    title: "Cosmos",
    img: "https://upload.wikimedia.org/wikipedia/en/8/8e/Cosmos_spacetime_odyssey_titlecard.jpg",
    description:
      "An exploration of our discovery of the laws of nature and coordinates in space and time.",
    posterURL: "www.cosmos.com",
    rating: 9.3,
  },
  {
    title: "MR. ROBOT",
    img: "https://starzplay-img-prod-ssl.akamaized.net/474w/universal/MRROBOTY2015S01E001/MRROBOTY2015S01E001-474x677-PST.jpg",
    description:
      "The series tells the story of a young man who suffers from social anxiety disorder. Working as a computer programmer in the morning and a hacker in the evening, he is assigned to work by a mysterious man who calls himself 'Mr. Robot' to infiltrate large corporations they believe are corrupting society.",
    posterURL: "www.mrrobot.com",
    rating: 8.5,
  },
  {
    title: "Planet Earth",
    img: "https://a.ltrbxd.com/resized/sm/upload/r1/42/e6/sy/uqP8U0eNzDgIlSvveywQ9JbpZZT-0-230-0-345-crop.jpg?v=ac4d6ea50c",
    description:
      "Emmy Award-winning, 11 episodes, five years in the making, the most expensive nature documentary series ever commissioned by the BBC, and the first to be filmed in high definition.",
    posterURL: "www.planetearth.com",
    rating: 9.4,
  },
  {
    title: "Prison Break",
    img: "https://www.cdiscount.com/pdt2/3/2/2/1/700x700/auc0030206697322/rw/various-artists-prison-break-seasons-3-4-ori.jpg",
    description:
      "An innocent man is imprisoned and sentenced to death, and his only hope now is in his younger brother, who commits a crime in order to send himself to prison and devises a plan for their escape together, in addition to some other civilians in prison, they encounter a series of interesting and exciting problems and dilemmas, and they try to solve them in order to implement the plan, no matter what it costs them.",
    posterURL: "www.prisonbreak.com",
    rating: 8.3,
  },
  {
    title: "Roman Empire",
    img: "https://m.media-amazon.com/images/M/MV5BY2UxYmY0NDktYTk2Mi00ZjI4LWJhYTAtYTEzMzYyNGU3ZTEzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjMyMTk1OQ@@._V1_FMjpg_UX1000_.jpg",
    description:
      "Chronicles some of the most famous leaders of the Roman Civilization.",
    posterURL: "www.romanempire.com",
    rating: 6.9,
  },
  {
    title: "The Expanse",
    img: "https://imgsrc.cineserie.com/2018/12/1293799.jpg?ver=1",
    description:
      "In the 24th century, a disparate band of antiheroes unravel a vast conspiracy that threatens the Solar System's fragile state of cold war.",
    posterURL: "www.theexpanse.com",
    rating: 8.5,
  },
  {
    title: "The Walking Dead",
    img: "https://pictures.betaseries.com/fonds/poster/d338e649f57a342598ec430862798ad3.jpg",
    description:
      "Police officer (Rick) wakes up from a coma in which he was in for several months as a result of being shot while on the job, to find that the world has been ravaged by the zombies and he is the only survivor. An army of the zombies, events escalate.",
    posterURL: "www.thewalkingdead.com",
    rating: 4.2,
  },
  {
    title: "Voltron",
    img: "https://cdn.theplaylist.net/wp-content/uploads/2022/03/14165941/VOLTRON-LIVE-ACTION_MOVIE_BIDDING-WAR_.jpg",
    description:
      "Five teenagers become the last line of defense for the galaxy in an intergalactic battle against the evil alien force led by King Zarkon.",
    posterURL: "www.voltron.com",
    rating: 2.1,
  },
];

function App() {
  const [list, setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate, setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie) {
    if (movie.title && movie.img && movie.description && movie.posterURL) {
      setList([...list, movie]);
    }
  }

  function filter(key, rate) {
    setKeyword(key);
    setRate(rate);
    console.log(rate + "  " + key);
    setFiltredList(
      list.filter((element) => {
        return (
          element.title.toLowerCase().includes(key.toLowerCase()) &&
          element.rating >= rate
        );
      })
    );
  }

  useEffect(() => {
    filter(keyword, rate);
  }, [list]);

  return (
    <div className="App">
      <Filtring filter={filter} />
      <MovieList list={filtredList} />
      <AddMovie adding={adding} />
    </div>
  );
}

export default App;
