import React from "react";
import Detail from "./Detail";

const Card = () => {
  return (
    <div className="Card">
      <div className="container">
        <div className="movie-card">
          <Detail
            img="./img/Jesus.png"
            name="Jesus revolution"
            director="Jon Erwin & Brent McCorkle"
            link="https://www.fandango.com/jesus-revolution-2023-229145/movie-overview?cid=fandango_web_home_carousel"
            btn="Detials"
          />
        </div>
        <div className="movie-card">
          <Detail
            img="./img/Bear.png"
            name="Cocaine Bear"
            director="Elizabeth Banks"
            link="https://www.fandango.com/cocaine-bear-2023-230407/movie-overview?cid=fandango_web_home_carousel"
            btn="Details"
          />
        </div>
        <div className="movie-card">
          <Detail
            img="./img/Magic.png"
            name="Magic Mike's Last Dance"
            director="Reid Carolin"
            link="https://www.fandango.com/magic-mikes-last-dance-2023-230344/movie-overview?cid=fandango_web_home_carousel"
            btn="Details"
          />
        </div>
        <div className="movie-card">
          <Detail
            img="./img/Happy.png"
            name="My Happy Ending"
            director="Sharon Maymon & Tal Granit"
            link="https://www.fandango.com/my-happy-ending-2023-230972/movie-overview?cid=fandango_web_home_carousel"
            btn="Details"
          />
        </div>
      </div>
      <div className="container">
        <div className="movie-card">
          <Detail
            img="./img/80.png"
            name="80 for Brady"
            director="Kyle Marvin"
            link="https://www.fandango.com/80-for-brady-2023-230345/movie-overview?cid=fandango_web_home_carousel"
            btn="Details"
          />
        </div>
        <div className="movie-card">
          <Detail
            img="./img/Miss.png"
            name="Missing"
            director="Will Merrick & Nick Johnson"
            link="https://www.fandango.com/missing-2023-230335/movie-overview"
            btn="Details"
          />
        </div>
        <div className="movie-card">
          <Detail
            img="./img/Women.png"
            name="Women Talking"
            director="Sarah E. Polley"
            link="https://www.fandango.com/women-talking-2022-228124/movie-overview"
            btn="Details"
          />
        </div>
        <div className="movie-card">
          <Detail
            img="./img/Cat.png"
            name="The Amazing Maurice"
            director="Toby Genkel"
            link="https://www.fandango.com/the-amazing-maurice-2023-230477/movie-overview"
            btn="Details"
          />
        </div>
      </div>
      <div className="container">
        <div className="movie-card">
          <Detail
            img="./img/Age.png"
            name="Of an Age"
            director="Goran Stolevski"
            link="https://www.fandango.com/of-an-age-2023-230599/movie-overview"
            btn="Details"
          />
        </div>
        <div className="movie-card">
          <Detail
            img="./img/World.png"
            name="Strange World"
            director="Don Hall"
            link="https://www.fandango.com/strange-world-2022-228137/movie-overview"
            btn="Details"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
