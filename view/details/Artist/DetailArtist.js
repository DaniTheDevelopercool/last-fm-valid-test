import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListHorizontal from '../../utils/ListComponents/ListHorizontal';
import ListTags from '../../utils/ListComponents/ListTags';

const Artist = ({
    route,
    artist,
    artistInfo,
    similarArtist,
    tracks,
    tags,
    selectTrack,
    selectArtist
}) => {
    return (
        <View style={styles.pageContent}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {artist.image[3]['#text'] != "" ?
                        <Image
                            source={{ uri: artist.image[3]['#text'], }}
                            style={styles.imageArtist}
                        /> :
                        <View></View>
                    }
                    <View style={styles.infoContent}>
                        <Text style={styles.titleArtist}>{artistInfo != null ? artistInfo.name : artist.name}</Text>
                        <Text style={{}}>{artistInfo != null ? artistInfo.bio.summary.split("<a")[0] : ""}</Text>
                        <Text style={{ marginVertical: 8 }}>{artistInfo != null ? "Oyentes: " + artistInfo.stats.listeners : ""}</Text>
                        <Text style={{ marginVertical: 8 }}>{artistInfo != null ? "Reproducciones: " + artistInfo.stats.playcount : ""}</Text>
                        {tracks != null ? <ListHorizontal title={"Exitos"} onClick={(track) => selectTrack(track)} list={tracks} /> : <View></View>}
                        <ListTags tags={tags} />
                        {similarArtist != null && similarArtist.length > 0 ? <ListHorizontal title={"Artistas similares"} onClick={(art) => selectArtist(art)} list={similarArtist} /> : <View></View>}
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
        width: "100%",
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
    titleTracks: {
        marginTop: 32,
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    containerTracks: {
        marginVertical: 8,
        marginHorizontal: 4
    },
    containerTrack: {
        margin: 4
    },
    imageTrack: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    nameTrack: {
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
export default Artist;