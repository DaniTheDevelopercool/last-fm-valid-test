import React, { useEffect, useState } from 'react'
import ServiceInteractor from '../../controlers/services/interactor';
import Loading from '../../view/utils/Loading/Loading';
import ShowAll from '../../view/utils/ShowAll/ShowAll'
import * as ScreenOrientation from 'expo-screen-orientation';

export default function ShowAllController({ navigation, route }) {
    const [page, setPage] = useState(1);
    const [list, setList] = useState(route.params.content == "A" ? route.params.responseArtist.artist : route.params.responseTracks.track);
    const [loading, setLoading] = useState(false);
    const interactor = ServiceInteractor;
    const [orientation, setOrientation] = useState(1);
    useEffect(() => {
        getOrientation();
    }, [])
    const getOrientation = async () => {
        var orientation = await ScreenOrientation.getOrientationAsync();
        setOrientation(orientation)
    }
    ScreenOrientation.addOrientationChangeListener(getOrientation)
    const getMore = async () => {
        setPage(page + 1);
        setLoading(true);
        switch (route.params.content) {
            case "A":
                var res = route.params.type == "GEO" ?
                    await interactor.getGeoArtistsPagination(page) :
                    await interactor.getTopArtistsPagination(page);
                if (res == undefined) {
                    navigation.navigate('NotNetwork',)
                }
                var newList = list.concat(res.artist);
                setList(newList);
                break;

            case "C":
                var res = route.params.type == "GEO" ?
                    await interactor.getGeoTracksPagination(page) :
                    await interactor.getTopTracksPagination(page);
                if (res == undefined) {
                    navigation.navigate('NotNetwork',)
                }
                var newList = list.concat(res.track);
                setList(newList);
                break;

            default:
                break;
        }
        setLoading(false);
    }

    const selectArt = (art) => {
        navigation.navigate('Artist', { artist: art, navigation: navigation })
    }

    const selectTrack = (track) => {
        navigation.navigate('Track', { track: track, navigation: navigation })
    }
    return list != undefined ?
        <ShowAll title={route.params.content == "A" ? "Artistas" : "Canciones"} list={list} onClick={route.params.content == "A" ? selectArt : selectTrack} showMore={getMore} loading={loading} orientation={orientation} /> :
        <Loading />
}
