import {StyleSheet, Text, View} from "react-native";
import React from "react";
const DetailsContainer = () => {
    return (
        <View style={styles.details_container}>
            <View style={styles.items}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.data}>Detail</Text>
            </View>
            <View style={styles.items}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.data}>Detail</Text>
            </View>
            <View style={styles.items}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.data}>Detail</Text>
            </View>
            <View style={styles.items}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.data}>Detail</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    details_container: {
        backgroundColor: '#afafaf',
        flex: 0.6,
    },
    items: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flex: 0.25,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    label: {
        flex: 0.9,
        color: 'orange',
        fontSize: 32,
        fontWeight: 700,
    },
    data: {
        fontSize: 24,
    }
})

export default DetailsContainer;