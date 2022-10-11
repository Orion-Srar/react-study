import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {albumActions} from "../../redux";
import {Album} from "../album/Album";

function Albums() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(albumActions.getAll())
    }, [])

    const {albums} = useSelector(state => state.albumReducer);

    return (
        <div>

            {
                albums.map(album => <Album key={album.id} album={album} />)
            }

        </div>
    );
}

export {Albums};
