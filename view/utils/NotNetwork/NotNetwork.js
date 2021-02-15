import React from 'react'
import { Text, View } from 'react-native';
import styles from './NotNetworkStyles';

export default function NotNetwork() {
    return (
        <View style={styles.pageContent}>
            <Text>Hasta aqui nos acompaño el internet</Text>
        </View>
    )
}
