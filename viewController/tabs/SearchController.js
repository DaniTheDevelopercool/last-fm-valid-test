import React, { useState } from 'react';
import ServiceInteractor from '../../controlers/services/interactor';
import Search from '../../view/Tabs/Search/Search';
import Loading from '../../view/utils/Loading/Loading';

export default function SearchController({ navigation }) {

    const interactor = ServiceInteractor;
    const [artist, setArtist] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [value, onChangeText] = useState('');
    const [loading, setLoading] = useState(false);
    const [notSearch, setNotSearch] = useState(true);
    const getData = async () => {
        if (value != null && value != "") {
            clearData();
            var search = value.replace(/ /g, "%20");
            var res = await interactor.getSearchArtists(search);
            if (res == undefined) {
                navigation.navigate('NotNetwork',)
            }
            setArtist(res.artistmatches.artist)
            res = await interactor.getSearchTracks(search);
            if (res == undefined) {
                navigation.navigate('NotNetwork',)
            }
            setTracks(res.trackmatches.track);
            res = await interactor.getSearchAlbum(search);
            if (res == undefined) {
                navigation.navigate('NotNetwork',)
            }
            setAlbums(res.albummatches.album);
            setLoading(false);
            setNotSearch(false);
        }
    }
    const clearData = () => {
        setLoading(true);
        setArtist([]);
        setTracks([]);
        setAlbums([]);
    }


    const selectArt = (art) => {
        navigation.navigate('Artist', { artist: art, navigation: navigation })
    }
    const selectTrack = (track) => {
        navigation.navigate('Track', { track: track, navigation: navigation })
    }
    const selectAlbum = (album) => {
        navigation.navigate('Album', { album: album, navigation: navigation })
    }


    return !loading ?
        <Search
            artist={artist}
            tracks={tracks}
            albums={albums}
            value={value}
            onChangeText={onChangeText}
            getData={getData}
            selectArt={selectArt}
            selectTrack={selectTrack}
            selectAlbum={selectAlbum}
            notSearch={notSearch}
        /> :
        <Loading />

}