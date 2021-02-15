import React, { useEffect, useState } from 'react';
import ServiceInteractor from '../../controlers/services/interactor';
import Geo from '../../view/Tabs/Geo/Geo';
import Loading from '../../view/utils/Loading/Loading';

export default function GeoController({ navigation }) {

    const interactor = ServiceInteractor;
    const [responseArtist, setResponseArtist] = useState({});
    const [artist, setArtist] = useState([]);
    const [responseTracks, setResponseTracks] = useState({});
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        cleanData();
        var res = await interactor.getGeoArtists();
        if (res == undefined) {
            navigation.navigate('NotNetwork',)
        }
        setResponseArtist(res);
        setArtist(res.artist)
        res = await interactor.getGeoTracks();
        if (res == undefined) {
            navigation.navigate('NotNetwork',)
        }
        setResponseTracks(res);
        setTracks(res.track);
        setLoading(false);
    }

    const cleanData = () => {
        setLoading(true)
        setArtist([])
        setTracks([])
    }

    const selectArt = (art) => {
        navigation.navigate('Artist', { artist: art, navigation: navigation })
    }

    const selectTrack = (track) => {
        navigation.navigate('Track', { track: track, navigation: navigation })
    }

    const showAll = (content) => {
        navigation.navigate('ShowAll', { content: content, type: "GEO", responseArtist: responseArtist, responseTracks: responseTracks });
    }

    return !loading ?
        <
        Geo
    artist = { artist }
    tracks = { tracks }
    selectArt = { selectArt }
    selectTrack = { selectTrack }
    showAll = { showAll }
    /> : <
    Loading / >

}