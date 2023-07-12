import React from "react";
import {StyleSheet, View, Text, Button, Image, ImageBackground} from 'react-native';
import { globalStyles, images } from "../styles/global";
import Card from "../Shared/card";

export default function ReviewDetails({route, navigation}){
    const pressHandler = () => {
        navigation.goBack();
        // navigation.pop();
    }
    const {title, body, rating} = route.params;
    return(
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}> {title}</Text>
                <Text style={globalStyles.titleText}>{body}</Text>
                {/* <Text style={globalStyles.titleText}>{rating}</Text> */}
                <View style={styles.rating}>
                    <Text>GameZone rating: </Text>
                    <Image source={images['ratings'][rating]}/>
                </View>
            </Card>
            <Button title="back to home page" onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    rating:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
})
