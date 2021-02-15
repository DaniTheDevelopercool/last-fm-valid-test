import React, { useEffect, useState } from 'react';
import ServiceInteractor from '../../controlers/services/interactor';
import Artist from '../../view/details/Artist/DetailArtist';
import Loading from '../../view/utils/Loading/Loading';

export default function ArtistController({ route }) {
    const [artist, setArtist] = useState(route.params.artist)
    const [artistInfo, setArtistInfo] = useState(null);
    const [similarArtist, setSimilarArtist] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const interactor = ServiceInteractor;

    useEffect(() => {
        getData();
    }, [artist]);

    const getData = async () => {
        cleanData();
        var artistName = artist.name.replace(/ /g, "%20");

        var res = await interactor.getInfoArtist(artistName);
        if(res==undefined){
            route.params.navigation.navigate('NotNetwork',)
        }
        setArtistInfo(res);
        setSimilarArtist(res.similar.artist);
        setTags(res.tags.tag);
        res = await interactor.getTracksOfArtist(artistName);
        if(res==undefined){
            route.params.navigation.navigate('NotNetwork',)
        }
        setTracks(res.track)

        setLoading(false)
    }

    const cleanData = () => {
        setLoading(true);
        setTracks(null);
        setSimilarArtist(null);
        setArtistInfo(null);
    }

    const selectArtist = (art) => {
        setArtist(art);
    }

    const selectTrack = (track) => {
        route.params.navigation.navigate('Track', { track: track });
    }
    return !loading ? 
    <Artist
        route={route}
        artist={artist}
        artistInfo={artistInfo}
        similarArtist={similarArtist}
        tracks={tracks}
        tags={tags}
        selectTrack={selectTrack}
        selectArtist={selectArtist}
    /> : <Loading />

}

