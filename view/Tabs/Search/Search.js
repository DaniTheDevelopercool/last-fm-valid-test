import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import ListHorizontal from '../../utils/ListComponents/ListHorizontal';

export default function Search({
    artist,
    tracks,
    albums,
    value,
    onChangeText,
    getData,
    selectArt,
    selectTrack,
    selectAlbum,
    notSearch
}) {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={!notSearch ? styles.spacing : styles.centerContent}>
                    <Text style={styles.mainTitle}>Buscar</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        onSubmitEditing={() => { getData() }}
                    />
                    <Button
                        title="Buscar"
                        disabled={value.length < 1}
                        color="#0000ff" 
                        onPress={() => { getData() }}
                    />
                </View>
                {!notSearch ?
                    <View style={styles.spacing}>
                        <Text style={styles.titles}>Resultados</Text>
                        {artist != null && artist.length > 0 ? <ListHorizontal title={"Artistas"} onClick={(art) => selectArt(art)} list={artist} /> : <View></View>}
                        {tracks != null && tracks.length > 0 ? <ListHorizontal title={"Canciones"} onClick={(track) => selectTrack(track)} list={tracks} /> : <View></View>}
                        {albums != null && albums.length > 0 ? <ListHorizontal title={"Albumes"} onClick={(album) => selectAlbum(album)} list={albums} /> : <View></View>}
                    </View> :
                    <View></View>
                }
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    spacing: {
        margin: 16
    },
    centerContent: {
        marginVertical: 16,
        marginHorizontal: 16
    },
    mainTitle: {
        marginTop: 24,
        marginBottom:16,
        fontSize: 32,
        fontWeight: 'bold'
    },
    titles: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 16
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 16,
        padding: 8,
        borderRadius: 10
    },
});
