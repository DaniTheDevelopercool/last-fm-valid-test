import React from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import ListHorizontal from '../../utils/ListComponents/ListHorizontal';
import ListVertical from '../../utils/ListComponents/ListVertical';

export default function Top({
    artist,
    tracks,
    tags,
    selectArt,
    selectTrack,
    showAll,
}) {
    return (
        <SafeAreaView>
            <StatusBar
                hidden={true}
            />
            <ScrollView style={styles.pageContent}>
                <Text style={styles.mainTitle}>Lo mejor de lo mejor</Text>
                <ListHorizontal title={"Artistas"} onClick={(art) => selectArt(art)} list={artist} showAll={()=>{showAll("A")}}/>
                <ListVertical title={"Canciones"} onClick={(track) => selectTrack(track)} list={tracks} showAll={()=>{showAll("C")}}/>
                {/* <ListVertical title={"Categorias"} onClick={() => null} list={tags} /> */}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    pageContent: {
        padding: 16
    },
    titles: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    containerArtists: {
        marginVertical: 8,
        marginHorizontal: 4
    },
    containerArtist: {
        margin: 4
    },
    imageArtist: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    nameArtist: {
        width: 100,
        maxHeight: 20,
        overflow: 'hidden'
    },
    containerTracks: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 8,
        flexWrap: 'wrap',
    },
    containerTrack: {
        margin: 8,
        width: 90 / 2 + "%"
    },
    imageTrack: {
        width: "100%",
        height: 175,
        borderRadius: 8,
    },
    nameTrack: {
        width: 100,
        maxHeight: 20,
        overflow: 'hidden'
    },
    mainTitle: {
        marginVertical: 24,
        fontSize: 32,
        fontWeight: 'bold'
    }
});

