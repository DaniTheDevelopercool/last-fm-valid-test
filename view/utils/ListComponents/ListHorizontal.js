import React from 'react';
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';

export default function ListHorizontal({ title, list, onClick,showAll }) {
    return (
        list.length >= 1 ?
            <View style={styles.contentList}>
                {showAll != null ?
                    <View style={styles.sectionHeader}>
                        <Text style={styles.titles}>{title}</Text>
                        <TouchableHighlight onPress={() => { showAll() }}>
                            <Text style={styles.more}>{"Ver mas ->"}</Text>
                        </TouchableHighlight>
                    </View> :
                    <Text style={styles.titles}>{title}</Text>
                }
                <ScrollView horizontal={true} style={styles.containerLi} showsHorizontalScrollIndicator={false}>
                    {list.slice(0, 10).map((li,i) => {
                        return <View key={li.name + li.name+i} style={styles.containerLi}>
                            <TouchableHighlight onPress={() => { onClick(li) }}>
                                {li.image != undefined &&li.image[3]['#text']!=""? <Image style={styles.imageLi} source={{ uri: li.image[3]['#text'], }} /> : <View style={styles.imageLi}></View>}
                            </TouchableHighlight>
                            <Text style={styles.nameLi}>{li.name}</Text>
                        </View>

                    })}
                </ScrollView>
            </View>
            :
            <View style={[styles.containerActivityI, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
    );

}

const styles = StyleSheet.create({
    pageContent: {
        margin: 16
    },
    titles: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    more: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    containerLi: {
        marginVertical: 8,
        marginHorizontal: 4
    },
    containerLi: {
        margin: 4
    },
    imageLi: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    nameLi: {
        width: 100,
        maxHeight: 20,
        overflow: 'hidden'
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    contentList: {
        height: 175
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    }
});