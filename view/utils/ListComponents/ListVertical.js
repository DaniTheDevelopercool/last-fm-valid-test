import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function ListVertical({ title, list, onClick, showAll }) {
    const [orientation, setOrientation] = useState(1);
    useEffect(() => {
        getOrientation();
    }, [])
    const getOrientation = async () => {
        var orientation = await ScreenOrientation.getOrientationAsync();
        setOrientation(orientation)
    }
    ScreenOrientation.addOrientationChangeListener(getOrientation)
    return (
        <View>
            {showAll != null ?
                <View style={styles.sectionHeader}>
                    <Text style={styles.titles}>{title}</Text>
                    <TouchableHighlight onPress={() => { showAll() }}>
                        <Text style={styles.more}>{"Ver mas ->"}</Text>
                    </TouchableHighlight>
                </View> :
                <Text style={styles.titles}>{title}</Text>
            }
            {list.length > 1 ? <View style={styles.containerTracks} >
                {list.slice(0, 10).map((li, i) => {
                    return (
                        <View key={li.name, i} style={{
                            margin: 8,
                            width: orientation == 1 ? 90 / 2 + "%" : 90 / 4 + "%"
                        }}>
                            <TouchableHighlight onPress={() => { onClick(li) }}>
                                <Image style={styles.imageTrack} source={{ uri: li.image[3]['#text'], }} />
                            </TouchableHighlight>
                            <Text style={styles.nameTrack}>{li.name}</Text>
                        </View>
                    );
                })}
            </View> :
                <View style={[styles.containerActivityI, styles.horizontal]}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    pageContent: {
        padding: 16
    },
    more: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left'
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
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    }

});
