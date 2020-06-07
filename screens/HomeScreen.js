import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, ScrollView, Image, Dimensions, ImageBackground } from 'react-native'

import Carousel from 'react-native-snap-carousel';

import face from '../assets/images/face.jpg'
import paul from '../assets/images/paul.jpg'
import lady1 from '../assets/images/lady1.png'
import lady2 from '../assets/images/lady2.jpg'
import lady3 from '../assets/images/lady3.png'
import man1 from '../assets/images/man1.jpg'
import man2 from '../assets/images/man2.jpg'
import clip1 from '../assets/images/clip1.jpg'
import playIcon from '../assets/images/di9rnbxjT.gif'

import yellow from '../assets/images/yellow.jpg'
import blue from '../assets/images/blue.jpg'
import green from '../assets/images/green.jpg'
import red from '../assets/images/red.jpg'

import ImageCardWithText from './ImageCardWithText'

export default class HomeScreen extends Component {
    state={
        
      cards: [
        {
          image: yellow,
          id: 1,
          title: "walking like a king down the hallways"
        },
        {
          image: blue,
          id: 2,
          title: "blue oil paint"
        },
        {
          image: green,
          id: 3,
          title: "green artist paint"
        },
        {
          image: red,
          id: 4,
          title: "red blood"
        }
      ],
    }

    _renderItem({item,index}){
        return(
          <View style={{width:100,height:450}}>
              <ImageBackground source={item.image} style={styles.image} imageStyle={{borderRadius:15}} resizeMode="cover">
    
              </ImageBackground>
          </View>
        )
      }
    

    render() {
        return (
            // <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{
                            backgroundColor : "#6b5bda",
                            borderRadius : 50,
                            paddingHorizontal : 15,
                        }}>
                        <Text style={styles.headerText}>FitNiceApp</Text>
                    </View>
                    <View style={styles.imageStyle}>
                        <Image source={face} style={styles.imageStyle}/>
                    </View>
                </View>
                <View >
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.tagStyle}>
                            <View style={styles.topTags}>
                                <Text>Cycling</Text>
                            </View>
                            <View style={styles.topTags}>
                                <Text>Swimming</Text>
                            </View>
                            <View style={styles.topTags}>
                                <Text>Brisk walking</Text>
                            </View>
                            <View style={styles.topTags}>
                                <Text>Dancing</Text>
                            </View>
                            <View style={styles.topTags}>
                                <Text>Aerobics</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

{/* Category - Men, Women, Kids */}
                {/* <View style={{
                    paddingTop : 10, 
                    // flexDirection : "row", 
                    // justifyContent : "space-around",
                    
                }}>
                    <Text style={{
                        // paddingTop : 20,
                        fontSize : 15,
                        fontWeight : "bold",
                        color : "tomato",
                        marginLeft : 15,
                        
                    }}>Explore by category</Text>
                </View> */}
                <View style={{
                    paddingTop : 15, 
                    flexDirection : "row", 
                    justifyContent : "space-around",
                    
                }}>
                    {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
                        {/* <ImageCardWithText path={man2} text="3 Minutes"/> */}
                        <View style={[styles.topCategoryTags, {backgroundColor : "#ffc392"}]}>
                            <Text style={{fontSize : 15, fontWeight : "bold", color : "#8973b5"}}>Kids</Text>
                        </View>
                        <View style={[styles.topCategoryTags, {backgroundColor : "#f8c9df"}]}>
                            <Text style={{fontSize : 15, fontWeight : "bold", color : "#8973b5"}}>Men</Text>
                        </View>
                        <View style={[styles.topCategoryTags, {backgroundColor : "#9adcf1"}]}>
                            <Text style={{fontSize : 15, fontWeight : "bold", color : "#8973b5"}}>Women</Text>
                        </View>
                    {/* </ScrollView> */}
                </View>

{/* Video section */}
                <View style={styles.videoSectionStyle}>
                    <View style={{marginLeft : 10, backgroundColor : "#6b5bda", borderRadius : 25,}}>
                        <View style={{paddingLeft : 20}}>
                            <View style={{}}>
                                <Image source={playIcon} style={{
                                    width: 100,
                                    height: 100,
                                    position : "absolute",
                                    zIndex : 1,
                                    // borderRadius : 25,
                                    // opacity : 0.9,
                                }}/>
                            </View>
                            <Image source={clip1} 
                                style={{
                                    width: Dimensions.get('window').width,
                                    height: Dimensions.get('window').height/3,
                                    // height: 200,
                                    resizeMode : "cover",
                                    borderRadius : 25,
                                }}/>
                        </View>
                    </View>
                </View>

{/* BMI */}
                <View style={{ marginHorizontal : 10, 
                        borderRadius : 25, 
                        backgroundColor : "#5440de", 
                        flex : 1, 
                        height: Dimensions.get('window').height/4,
                        flexDirection : "row",
                        marginTop : 30,
                    }}>
                    <View style={{ paddingHorizontal : 20, 
                            // borderRadius : 25, 
                            // backgroundColor : "#7916b7", 
                            // flex : 1, 
                            width: Dimensions.get('window').width/2,
                            flexDirection : "column",
                            justifyContent : "space-around",
                        }}>
                        <Text style={[styles.headerText,{
                                backgroundColor : "tomato",
                                paddingHorizontal : 10,
                                paddingVertical : 5,
                                borderRadius : 15,
                                textAlign : "center",
                                elevation : 5,
                            }]}>
                            BMI
                        </Text>
                        <Text style={styles.headerText}>
                            Height : 170cm
                        </Text>
                        <Text style={styles.headerText}>
                            Weight : 65kg
                        </Text>
                    </View>
                    <View style={{ /* paddingHorizontal : 20,  */
                                borderRadius : 25, 
                                backgroundColor : "#41e482", 
                                flex : 1, 
                                elevation : 5,
                                // width: "100%",
                                // flexDirection : "column",
                                justifyContent : "space-evenly",
                                alignItems : "center",
                            }}>
                        <Text style={[styles.headerText,{fontSize : 14}]}>22.5 kg/m2 (Normal)</Text>
                    </View>
                </View>

{/* carousal */}
                <View style={{paddingTop:35, }}>
                    <View>
                        <Text>Swipe right and explore videos!</Text>
                    </View>
                    <View /* style={{paddingLeft:35, }} */>
                        <Carousel
                            ref={c=>{this._carousel=c}}
                            renderItem={this._renderItem}
                            sliderWidth={350}
                            itemWidth={300}
                            layout={"stack"}
                            data={this.state.cards}
                        />
                    </View>
                </View>
<Text>hkjhg</Text>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        // backgroundColor : 'red'
    },
    header : {
        flexDirection : 'row',
        paddingHorizontal : 24,
        justifyContent : 'space-between',
        alignItems :"center",
        paddingTop : 12,

    },
    headerText : {
        fontSize : 20,
        fontWeight : 'bold',
        // color : "#8b82d0",
        color : "#fff",
        textShadowColor : "black",
        textShadowRadius : 3,
    },
    imageStyle : {
        height : 37,
        width : 37,
        resizeMode : "center",
        borderRadius : 37,
    },
    tagStyle : {
        paddingTop : 12,
        flexDirection : "row",
        paddingLeft : 10,
        
    },
    topTags : {
        borderRadius : 10,
        height : 28,
        borderWidth : 0.7,
        borderColor : "white",
        width : 87,
        alignItems : "center",
        justifyContent : "center",
        marginRight : 10,
        backgroundColor : "#8a81cf17",
        

    },
    topCategoryTags : {
        width: Dimensions.get('window').width/3.5,
        height: Dimensions.get('window').height/8,
        // height : 200,
        // backgroundColor : "tomato",
        borderRadius : 5,
        alignItems : "center",
        justifyContent : "center",
        elevation : 15,
    },
    videoSectionStyle : {
        marginTop : 30,
        // backgroundColor : "tomato",
    },
    image:{
        width:292,
        height:411,
        borderRadius:15
      },
    
})
