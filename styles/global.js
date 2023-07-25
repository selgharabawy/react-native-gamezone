import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor:'white'
    },
    titleText: {
        // fontFamily: 'nunito-bold',
        fontFamily: "Helvetica",
        fontSize: 18,
        color:'#333',
        // padding: 20,
    },
    paragragh: {
        marginVertical: 8,
        lineHeight:20
    },
    // list:{
    //     flex:1,
    //     padding: 20,
    //     borderStyle:'solid',
    // },
    // listItem: {
    //     fontFamily: 'nunito-bold',
    //     fontSize: 18,
    //     color:'#333',
    //     borderStyle:'solid',
    //     borderWidth:2,
    //     padding: 20,
    //     borderColor:'#999',
    //     borderRadius:10,
    //     backgroundColor: '#eee'
    // },

});

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}