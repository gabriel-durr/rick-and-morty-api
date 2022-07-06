import axios from "axios";
import { useEffect, useState } from "react";

export function CardsAPI() {
    let page = 1;
    let url = `https://rickandmortyapi.com/api/character?page=${page}`;
    const [characters, setCharacters] = useState<any>({
        name: "",
        avatar: "",
        status: "",
        species: "",
        origin: "",
        location: "",
        episodes: [],
    });

    console.log(characters);

    useEffect(() => {
        axios.get(url).then((response) => {
            let data = response.data.results;

            data.map((character: any) => {
                setCharacters({
                    name: character.name,
                    avatar: character.image,
                    status: character.status,
                    species: character.species,
                    origin: character.origin.name,
                    episodes: character.episode,
                });
            });
        });
    }, []);

    return <h1>Aee Poourra</h1>;
}
