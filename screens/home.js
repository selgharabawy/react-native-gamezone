import React, { useState } from "react";
import {StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Modal} from 'react-native';
import { globalStyles } from "../styles/global";
import {MaterialIcons} from '@expo/vector-icons';
import Card from "../Shared/card";
import ReviewForm from "./reviewForm";

export default function Home({navigation}){
    // const pressHandler = () => {
    //     navigation.navigate('ReviewDetails');
    // }
    const [modalOpen, setModalOpen] = useState(false)
    const [reviews, setReviews] = useState([
        {title: 'Zelda, Breath of Fresh Air', rating: 5, body:'lorem ipsum', key:1},
        {title: 'Gotta Catch Them All (again)', rating: 4, body:'lorem ipsum', key:2},
        {title: 'Not so "Final" Fantasy', rating: 3, body:'lorem ipsum', key:3},
    ])

    return(
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}> Home Screen</Text>
            <Button title="go to review dets" onPress={pressHandler}/> */}
            <Modal visible={modalOpen} animationType="slide">
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name="close"
                        size={24}
                        style={{...styles.modalToggle, ...styles.modalClose}}
                        onPress={()=> setModalOpen(false)}
                    />
                    <ReviewForm/>
                </View>
            </Modal>

            <MaterialIcons
                name="add"
                size={24}
                style={styles.modalToggle}
                onPress={()=> setModalOpen(true)}
            />

            <FlatList
            data={reviews}
            renderItem={({item}) => (
                <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails', item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding:10,
        borderRadius: 10,
        alignSelf:  'center',
    },
    modalClose: {
        marginTop: 40,
        marginBottom:0,
    },
    modalContent: {
        flex:1,
        marginHorizontal: 20
    }
})
