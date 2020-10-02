import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'
//import db from '../config.js'

export default class ContactScreen extends Component {
            render(){
            return(
            <View>
                style = {styles.container}
              <Image
                source={require("../assets/xyz-logo-1.png")}
                style={{width:200, height: 200}}/>
              <Text style={{textAlign: 'center', fontSize: 30}}>Contact Us</Text>
            
            <View>
            <Text style={styles.container}>

            <input type="text" value="Your Name"/>
            <br/>
            <br/>
            <input type="text" value="Your Email"/>
            <br/>
            <br/>
            <input type="text" value="Your Message"/>
            <br/>
            <br/>
            <button onClick="send()">Send</button>

            function send(){
            alert("Your message has been received by XYZ Foundation \n One of our volunteers will contact you as soon as possible.")
            }

            Contact:
            XYZ Foundation, Thakker Building, 1st floor, 
            Champsi Bhimji Road, Mazgaon, Mumbai, 
            Maharashtra, India 400010

            +919820683398
            +919821349283

            info@xyzfoundation.net
            </Text>
            </View>
            </View>
        )
    }
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    }
  });