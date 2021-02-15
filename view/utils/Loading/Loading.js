import React from 'react'
import { ActivityIndicator, View } from 'react-native';
import styles from './LoadingStyles';

export default function Loading() {
    return (
        <View style={styles.pageContent}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}
