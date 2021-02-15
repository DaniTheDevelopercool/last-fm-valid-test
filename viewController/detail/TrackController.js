import React, { useEffect, useState } from 'react';
import Track from '../../view/details/Track/DetailTrack';
import ServiceInteractor from '../../controlers/services/interactor';
import Loading from '../../view/utils/Loading/Loading';

export default function TrackController({ route }) {
    const [track, setTrack] = useState(route.params.track);
    const [trackInfo, setTrackInfo] = useState(null);
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(false);
    const interactor = ServiceInteractor;
    useEffect(() => {
        getData();
    }, [track]);
    const getData = async () => {
        cleanData();
        var trackName = track.name.replace(/ /g, "%20");
        var artistName = track.artist.name != undefined ? track.artist.name.replace(/ /g, "%20") : track.artist.replace(/ /g, "%20");
        var res = await interactor.getInfoTrack({ track: trackName, artist: artistName })
        if(res==undefined){
            route.params.navigation.navigate('NotNetwork',)
        }
        setTrackInfo(res);
        setTags(res.toptags.tag);
        setLoading(false);
    }
    const cleanData = () => {
        setLoading(true);
        setTrackInfo([]);
        setTags([]);
    }
    return !loading ?
        <Track track={track}
            trackInfo={trackInfo}
            tags={tags}
        /> :
        <Loading />

}