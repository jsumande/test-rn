import React, { Component } from 'react';
import { StyleSheet,Image,View,Text} from 'react-native';

  export default LotsOfStyles = () => {
      return (
        <View style={styles.container}>
            <Image source={require('./images/logo.png')} style={styles.img} />
        </View>
      );
  }


  const styles = StyleSheet.create({
    container: {
      flex : 1,
      justifyContent : "center",
      alignItems : "center",
      backgroundColor : "#282828",
    },

    img :{
        width : 190,
        height : 60,
        resizeMode: 'stretch'
    },
  });