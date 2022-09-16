import {useState} from "react";
import Character from "../Character/Character";

export default function Characters() {

    const [characters,setCharacters] = useState([]);

   fetch(`https://rickandmortyapi.com/api/character`)
           .then(value => value.json())
           .then(value => {
                setCharacters(value.results.slice(0,6))

           });


    return (<div>
        {
            characters.map(character => <Character character={character} key={character.id}/>)
        }

    </div>);
}