import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ListTags({tags}) {
    return (
        tags.length >= 1 ?
            <View style={styles.contentList}>
                <Text style={styles.titleTags}>Categorias</Text>

                <ScrollView horizontal={true} style={styles.containerTracks} showsHorizontalScrollIndicator={false}>
                    {tags.map((tg, i) => {
                        return <View key={tg.name + i} style={styles.containerTrack}>
                            <Text style={styles.nameTag}>{tg.name}</Text>
                        </View>

                    })}
                </ScrollView>
            </View>
            :
            <View style={[styles.containerActivityI, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
    )
}

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
    titleTags: {
        marginTop: 32,
        fontSize: 24,
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