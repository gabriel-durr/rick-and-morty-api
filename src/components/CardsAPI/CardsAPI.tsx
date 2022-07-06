import axios from "axios";

import { useEffect, useState } from "react";
import { Card } from "../Card/Card";

// Paramos na parte para pegar os episodes do JSON que estão em um array

export function CardsAPI() {
    let page = 2;
    let url = `https://rickandmortyapi.com/api/character?page=${page}`;
    const [characters, setCharacters] = useState<any>({
        title: "",
        avatar: "",
        status: "",
        species: "",
        origin: "",
        location: "",
        episodes: "",
    });

    useEffect(() => {
        axios.get(url).then((response) => {
            let data = response.data.results;
            // Cmoo não sobrescreber ao percorrer estrutura de dados map / usando hook useState

            data.map((perso: any) => {
                setCharacters({
                    title: perso.name,
                    avatar: perso.image,
                    status: perso.status,
                    species: perso.species,
                    origin: perso.origin,
                    location: perso.location,
                    episodes: Object.keys(perso.episode).length,
                });
            });
        });
    }, []);

    return (
        <>
            <Card
                title={"Gabriel"}
                avatar={
                    "https://i.pinimg.com/originals/91/08/a1/9108a189a3a076595381321da0ac86ad.png"
                }
                imageAlt={"doguin"}
                life={true}
                species={"Human"}
                origin={"Planeta Acorda pedrin"}
                location={"Gotham City"}
                episodes={22}
                popularity={"70.5"}
            />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </>
    );
}
