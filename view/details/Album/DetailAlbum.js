import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListHorizontal from '../../utils/ListComponents/ListHorizontal';
import ListTags from '../../utils/ListComponents/ListTags';

const Album = ({
    route,
    album,
    albumInfo,
    tags,
    tracks,
    selectTrack
}) => {
    return (
        <View style={styles.pageContent}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image
                        source={{ uri: album.image[3]['#text'], }}
                        style={styles.imageArtist}
                    />
                    <View style={styles.infoContent}>
                        <Text style={styles.titleArtist}>{albumInfo != null ? albumInfo.name : album.name}</Text>
                        <Text style={{}}>{albumInfo != null && albumInfo.wiki != null ? albumInfo.wiki.summary.split("<a")[0] : ""}</Text>
                        <Text style={{ marginVertical: 8 }}>{albumInfo != null && albumInfo.artist != null ? "Artista: " + albumInfo.artist : ""}</Text>
                        <Text style={{ marginVertical: 8 }}>{albumInfo != null && albumInfo.listeners != null ? "Oyentes: " + albumInfo.listeners : ""}</Text>
                        <Text style={{ marginVertical: 8 }}>{albumInfo != null && albumInfo.playcount != null ? "Reproducciones: " + albumInfo.playcount : ""}</Text>
                        <ListTags tags={tags}/>
                        <ListHorizontal title={"Canciones"} onClick={(track) => selectTrack(track)} list={tracks} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    pageContent: {
        margin: 16
    },
    infoContent: {
        width: "100%"
    },
    imageArtist: {
        flex: 1,
        width: 200,
        height: 200,
        borderRadius: 16,
        margin: 16,
    },
    titleArtist: {
        fontSize: 32,
        fontWeight: 'bold'

    },
    titleAlbums: {
        marginTop: 32,
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    containerAlbums: {
        marginVertical: 8,
        marginHorizontal: 4
    },
    containerAlbum: {
        margin: 4
    },
    imageAlbum: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    nameAlbum: {
        width: 100,
        maxHeight: 20,
        overflow: 'hidden'
    },
    nameTag: {
        width: 50,
        maxHeight: 20,
        overflow: 'hidden',
    },
    containerActivityI: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});
export default Album;