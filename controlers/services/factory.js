import * as Network from 'expo-network';
import { AsyncStorage } from 'react-native'

export default class ServiceFactory {
    static isConnected
    //----------------------Constants----------------------
    static apiKey = "&api_key=829751643419a7128b7ada50de590067"
    static routeServer = "http://ws.audioscrobbler.com/2.0/";
    static format = "&format=json";
    //----------------------Params----------------------
    static paramCountry = '&country=colombia';
    static paramArtist = '&artist=';
    static paramTrack = '&track=';
    static paramAlmbum = '&album=';
    static paramPage = '&page=';
    //----------------------Info----------------------
    static methodArtistInfo = '?method=artist.getinfo';
    static methodTrackInfo = '?method=track.getinfo';
    static methodTracksOfArtist = '?method=artist.gettoptracks';
    static methodAlbumInfo = '?method=album.getinfo';
    //----------------------Geo----------------------
    static methodGeoArtist = '?method=geo.gettopartists';
    static methodGeoTracks = '?method=geo.gettoptracks';
    //----------------------Charts----------------------
    static methodTopArtists = '?method=chart.gettopartists';
    static methodTopTracks = '?method=chart.gettoptracks';
    static methodTopTags = '?method=chart.gettoptags';
    //----------------------Search----------------------
    static methodArtistSearch = '?method=artist.search'
    static methodTrackSearch = '?method=track.search'
    static methodAlbumSearch = '?method=album.search'

    static handlerMethod = async ({ method, url, keyDb }) => {

        await Network.getNetworkStateAsync().then((res) => {
            this.isConnected = res.isConnected
        });
        switch (method) {
            case 'GET':
                console.log(this.routeServer + url + this.apiKey + this.format);
                response = await fetch(this.routeServer + url + this.apiKey + this.format);
                var jsonResponse = !this.isConnected ? await this.dbSelect(keyDb) : await response.json();
                if (this.isConnected) { await this.dbInsert(keyDb, jsonResponse); }
                return jsonResponse
            default:
                break;
        }
    }


    static dbSelect = async (keyDb) => {
        var data = await AsyncStorage.getItem(keyDb)
        return JSON.parse(data)
    }


    static dbInsert = async (keyDb, jsonObject) => {
        var textToInsert = JSON.stringify(jsonObject);
        await AsyncStorage.removeItem(keyDb);
        await AsyncStorage.setItem(keyDb, textToInsert);
    }
}