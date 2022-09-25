import {useEffect, useState} from "react";

import {albumsService} from "../../services";
import {Album} from "../Album/Album";

function Albums() {
    const [albums,setAlbums] = useState([]);

    useEffect(()=>{
        albumsService.getAll().then(({data})=> (setAlbums(data)))
    },[])
    return (
        <div>
            {albums.map(album=><Album album={album} key={album.id} />)}
        </div>
    );
}

export {Albums};
