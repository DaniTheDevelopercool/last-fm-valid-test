import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Track = ({
  track,
  trackInfo,
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
            source={{ uri: track.image[3]['#text'], }}
            style={styles.imageArtist}
          />
          <View style={styles.infoContent}>
            <Text style={styles.titleArtist}>{trackInfo != null ? trackInfo.name : track.name}</Text>
            <Text style={{}}>{trackInfo != null && trackInfo.wiki != null ? trackInfo.wiki.summary.split("<a")[0] : ""}</Text>
            <Text style={{ marginVertical: 8 }}>{trackInfo != null && trackInfo.artist != null ? "Artista: " + trackInfo.artist.name : ""}</Text>
            <Text style={{ marginVertical: 8 }}>{trackInfo != null && trackInfo.album != null ? "Album: " + trackInfo.album.title : ""}</Text>
            <Text style={{ marginVertical: 8 }}>{trackInfo != null && trackInfo.listeners != null ? "Oyentes: " + trackInfo.listeners : ""}</Text>
            <Text style={{ marginVertical: 8 }}>{trackInfo != null && trackInfo.playcount != null ? "Reproducciones: " + trackInfo.playcount : ""}</Text>
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
export default Track;