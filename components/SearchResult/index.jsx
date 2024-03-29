//Logica para usar no componente Home

import axios from "axios"
import { useState, useEffect, useRef  } from "react";
import { FaHeart} from "react-icons/fa";

import { Header } from "../../components/Header"
import { Container, AlbumList, AlbumCard} from "./styles"

export function SearchResult() {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);

  const audioRef = useRef();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://deezerdevs-deezer.p.rapidapi.com/search",
          params: { q: searchInput },
          headers: {
            "X-RapidAPI-Key":
              "9c3be6439dmsh0da70461454fffap19aed3jsn9397573041ed",
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          },
        };

        const response = await axios(options);
        // console.log(response);
        // console.log(response.data.data[0].duration)

        if (
          response.data &&
          response.data.data &&
          response.data.data.length > 0
        ) {
          const tracksWithData = response.data.data.map((track) => ({
            ...track,
            duration: track.duration || 0,
          }));
          setResults(response.data.data);
        }
      } catch (error) {
        console.error("Erro ao obter informações:", error);
      }
    };

    fetchResults();
  }, [searchInput]);  

  const formatDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  
  return (
    <Container>
      <Header onSearchChange={setSearchInput} />
      <AlbumList>
        {results.map((result) => (
          <AlbumCard key={result.id}>
            <button
              className={`favorite ${
                favorites.some((fav) => fav.id === result.id) ? "favorited" : ""
              }`}
              onClick={() => handleFavorite(result)}
            >
              <FaHeart />
            </button>
            <img
              src={result.album?.cover_medium || result.artist.picture_medium}
              alt={result.title}
            />
            <p>{result.title}</p>
            <p>{result.artist.name}</p>
            <p>{`Duração: ${formatDuration(result.duration)}`}</p>
          </AlbumCard>
        ))}
      </AlbumList>
      <audio ref={audioRef} className="audio"></audio>
    </Container>
  );
}
