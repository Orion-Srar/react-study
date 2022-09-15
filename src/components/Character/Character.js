export default function Character(props) {
    const {character} = props;
    return(<div>
            {character.id}.{character.name}

        </div>


    );
}
