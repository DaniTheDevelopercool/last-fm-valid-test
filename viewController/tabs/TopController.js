import React, { useEffect, useState } from 'react';
import ServiceInteractor from '../../controlers/services/interactor';
import Geo from '../../view/Tabs/Geo/Geo';
import Top from '../../view/Tabs/Top/Top';
import Loading from '../../view/utils/Loading/Loading';

export default function TopController({ navigation }) {

    const interactor = ServiceInteractor;
    const [responseArtist, setResponseArtist] = useState({});
    const [artist, setArtist] = useState([]);
    const [responseTracks, setResponseTracks] = useState({});
    const [tracks, setTracks] = useState([]);
    const [responseTags, setResponseTags] = useState({});
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        cleanData();
        var res = await interactor.getTopArtists();
        if (res == undefined) {
            navigation.navigate('NotNetwork',)
        }
        setResponseArtist(res);
        setArtist(res.artist)
        res = await interactor.getTopTracks();
        if (res == undefined) {
            navigation.navigate('NotNetwork',)
        }
        setResponseTracks(res);
        setTracks(res.track);
        res = await interactor.getTopTags();
        if (res == undefined) {
            navigation.navigate('NotNetwork',)
        }
        setResponseTags(res);
        setTags(res.tag);
        setLoading(false);
    }

    const cleanData = () => {
        setLoading(true);
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
        navigation.navigate('ShowAll', { content: content, type: "TOP", responseArtist: responseArtist, responseTracks: responseTracks });
    }

    return !loading ?
        <
        Top
    artist = { artist }
    tracks = { tracks }
    tags = { tags }
    selectArt = { selectArt }
    selectTrack = { selectTrack }
    showAll = { showAll }
    />: <
    Loading / >

}