export default function Character(props) {
    const {character} = props;
    return(<div>
            <h3>{character.id}.{character.name}</h3>
            <p>{character.status} <br/> {character.species}</p>
        <img src={character.image} alt={character.name}/>


        </div>


    );
}
