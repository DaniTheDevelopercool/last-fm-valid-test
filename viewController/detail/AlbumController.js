import React, { useEffect, useState } from 'react';
import ServiceInteractor from '../../controlers/services/interactor';
import Album from '../../view/details/Album/DetailAlbum';
import Loading from '../../view/utils/Loading/Loading';


export default function AlbumController({ route }) {
    const interactor = ServiceInteractor;
    const [album, setAlbum] = useState(route.params.album);
    const [albumInfo, setAlbumInfo] = useState(null);
    const [tags, setTags] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, [album]);

    const getData = async () => {
        cleanData();
        var albumName = album.name.replace(/ /g, "%20");
        var artistName = album.artist.replace(/ /g, "%20");
        var res = await interactor.getInfoAlbum({ album: albumName, artist: artistName })
        if(res==undefined){
            route.params.navigation.navigate('NotNetwork',)
        }
        setAlbumInfo(res);
        setTags(res.tags.tag);
        setTracks(res.tracks.track);
        setLoading(false);
    }
    const cleanData = () => {
        setLoading(true);
        setAlbumInfo([]);
        setTags([]);
        setTracks([]);
    }
    const selectTrack = (track) => {
        route.params.navigation.navigate('Track', { track: track })
    }

    return (!loading ?
        <
            Album album={album}
            albumInfo={albumInfo}
            tags={tags}
            tracks={tracks}
            selectTrack={selectTrack}
        /> : <
            Loading />
    )
}