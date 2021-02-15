import ServiceFactory from "./factory";

export default class ServiceInteractor extends ServiceFactory {

    //----------------------Info----------------------
    static getInfoArtist = async (artist) => {
        var response = await ServiceFactory.handlerMethod({
            keyDb: "getInfoArtist",
            method: 'GET',
            url: ServiceFactory.methodArtistInfo + ServiceFactory.paramArtist + artist
        });
        return response != undefined ? response.artist : undefined;
    }
    static getInfoTrack = async ({ track, artist }) => {
        var response = await ServiceFactory.handlerMethod({
            keyDb: "getInfoTrack",
            method: 'GET',
            url: ServiceFactory.methodTrackInfo + ServiceFactory.paramTrack + track + ServiceFactory.paramArtist + artist
        });
        return response != undefined ? response.track : undefined;
    }
    static getTracksOfArtist = async (artist) => {
        var response = await ServiceFactory.handlerMethod({
            keyDb: "getTracksOfArtist",
            method: 'GET',
            url: ServiceFactory.methodTracksOfArtist + ServiceFactory.paramArtist + artist
        });
        return response != undefined ? response.toptracks : undefined;
    }
    static getInfoAlbum = async ({ album, artist }) => {
        var response = await ServiceFactory.handlerMethod({
            keyDb: "getInfoAlbum",
            method: 'GET',
            url: ServiceFactory.methodAlbumInfo + ServiceFactory.paramAlmbum + album + ServiceFactory.paramArtist + artist
        });
        return response != undefined ? response.album : undefined;
    }

    //----------------------Geo----------------------
    static getGeoArtists = async () => {
        var response = await ServiceFactory.handlerMethod({
            keyDb: "getGeoArtists",
            method: 'GET',
            url: ServiceFactory.methodGeoArtist + ServiceFactory.paramCountry
        });
        return response != undefined ? response.topartists : undefined;
    }
    static getGeoTracks = async () => {
        var response = await ServiceFactory.handlerMethod({
            keyDb: "getGeoTracks",
            method: 'GET',
            url: ServiceFactory.methodGeoTracks + ServiceFactory.paramCountry
        });
        return response != undefined ? response.tracks : undefined;
    }

    //----------------------Charts----------------------
    static getTopArtists = async () => {
        var response = await ServiceFactory.handlerMethod({
            keyDb: "getTopArtists",
            method: 'GET',
            url: ServiceFactory.methodTopArtists
        });
        return response != undefined ? response.artists : undefined;
    }
    static getTopTracks = async () => {
        var response = await ServiceFactory.handlerMethod({
            keyDb: "getTopTracks",
            method: 'GET',
            url: ServiceFactory.methodTopTracks
        });
        return response != undefined ? response.tracks : undefined;
    }
    static getTopTags = async () => {
        var response = await ServiceFactory.handlerMethod({
            keyDb: "getTopTags",
            method: 'GET',
            url: ServiceFactory.methodTopTags
        });
        return response != undefined ? response.tags : undefined;
    }

    //----------------------GeoPagination----------------------
    static getGeoArtistsPagination = async (page) => {
        var response = await ServiceFactory.handlerMethod({
            keyDb: "getGeoArtistsPagination",
            method: 'GET',
            url: ServiceFactory.methodGeoArtist + ServiceFactory.paramCountry + ServiceFactory.paramPage + page
        });
        return response != undefined ? response.topartists : undefined;
    }
    static getGeoTracksPagination = async (page) => {
        var response = await ServiceFactory.handlerMethod({
            keyDb: "getGeoTracksPagination",
            method: 'GET',
            url: ServiceFactory.methodGeoTracks + ServiceFactory.paramCountry + ServiceFactory.paramPage + page
        });
        return response != undefined ? response.tracks : undefined;
    }

    //----------------------ChartsPagination----------------------
    static getTopArtistsPagination = async (page) => {
        var response = await ServiceFactory.handlerMethod({
            keyDb: "getTopArtistsPagination",
            method: 'GET',
            url: ServiceFactory.methodTopArtists + ServiceFactory.paramPage + page
        });
        return response != undefined ? response.artists : undefined;
    }
    static getTopTracksPagination = async (page) => {
        var response = await ServiceFactory.handlerMethod({
            keyDb: "getTopTracksPagination",
            method: 'GET',
            url: ServiceFactory.methodTopTracks + ServiceFactory.paramPage + page
        });
        return response != undefined ? response.tracks : undefined;
    }

    //----------------------Search----------------------
    static getSearchArtists = async (artist) => {
        var response = await ServiceFactory.handlerMethod({
            keyDb: "getSearchArtists",
            method: 'GET',
            url: ServiceFactory.methodArtistSearch + ServiceFactory.paramArtist + artist
        });
        return response != undefined ? response.results : undefined;
    }
    static getSearchTracks = async (track) => {
        var response = await ServiceFactory.handlerMethod({
            keyDb: "getSearchTracks",
            method: 'GET',
            url: ServiceFactory.methodTrackSearch + ServiceFactory.paramTrack + track
        });
        return response != undefined ? response.results : undefined;
    }
    static getSearchAlbum = async (album) => {
        var response = await ServiceFactory.handlerMethod({
            keyDb: "getSearchAlbum",
            method: 'GET',
            url: ServiceFactory.methodAlbumSearch + ServiceFactory.paramAlmbum + album
        });
        return response != undefined ? response.results : undefined;
    }
}