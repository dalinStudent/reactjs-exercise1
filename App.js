import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Pressable, Alert } from 'react-native';

export default function App () {
  const [password, setPassword] = useState('');
  const [cfPassword, setCfPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {

    let PWS = "hello123";
    const emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    if(password && email === "") {
      setError("Username or Password should not be empty. Please try again.")
    }
    else if(!password && cfPassword) {
      setError("Password must be the same!.")
    } 
    else if (password !== PWS) {
      setError("Incorrect Password. Please try again.")
    } else if (!emailValid.test(email)) { 
      setError("Email is invalid. Please try again.")
    } 
    else {
      Alert.alert("Register successfully!");
    }
    
    
  }

  return (
    <View style={styles.container}>
        <Text style={styles.logo}>Sign Up</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            value={email}
            name="email"
            placeholder="Email your email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setEmail(text)}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            name="password"
            placeholder="Enter your password..."
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry
            value={password}
            enablesReturnKeyAutomatically
            onChangeText={text => setPassword(text)}
          />

        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            name="Cf_password"
            placeholder="Enter your comfirm password..."
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry
            value={cfPassword}
            enablesReturnKeyAutomatically
            onChangeText={text => setCfPassword(text)}
          />

        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
          <Text style={styles.loginText}>SUBMIT</Text>
        </TouchableOpacity>
        <Text style={styles.error}>{error}</Text>
  
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"white"
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    loginBtn:{
      width:"80%",
      backgroundColor: "#fb5b5a",
      
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    },
    error: {
      color: "red"
    }
  });