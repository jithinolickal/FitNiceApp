import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class ImageCardWithText extends Component {
    render() {
        return (
            <View /* style={{backgroundColor : "blue"}} */>
                <Image source={this.props.path} style={styles.imageCategory}/>
                <Text style={styles.textStyle}>{this.props.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageCategory : {
        height : 150,
        width : 150,
        borderRadius : 10,
        marginRight : 10,
        backgroundColor : "blue",
        
    },
    textStyle : {
        position : "absolute",
        bottom : 10,
        left : 10,
        color : "white",
        width : 80,
        borderRadius : 5,
        backgroundColor : "tomato",
        padding : 5,
        fontSize : 15,
        fontWeight : "700",

    }
})
