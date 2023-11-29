import React, { useState } from "react";
import {
  view,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import Constants from "expo-constants";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [description, setDescription] = useState("");

  const CalculateBmi = () => {
    const bmi = weight / ((height / 100) * (height / 100));
    setBmi(bmi.toFixed(1));

    if (bmi < 18.5) {
      setDescription("UnderWeight , Eat More");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setDescription("Normal , Keep it up");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setDescription("OverWeight , Start Working out...!");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setDescription("Normal , Keep it up");
    } else if (bmi >= 30) {
      setDescription("Obese , Hit the gym");
    }
  };

  const handleTouchablePress  =()=>{
    Keyboard.dismiss();
  }
    
  
  return (
    <TouchableWithoutFeedback onPress={handleTouchablePress}>
      <ScrollView>
        <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>BmiCalculator</Text>
      </View>
      <TextInput
        style={styles.Input}
        value={weight}
        onChangeText={(text) => setWeight(text)}
        placeholder="Weight in Kg"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.Input}
        value={height}
        onChangeText={(text) => setHeight(text)}
        placeholder="Height in Cm"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={CalculateBmi}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      <View style={styles.resultView}>
        <Text style={styles.result}>{bmi}</Text>
        <Text style={styles.result}>{description}</Text>
      </View>
      <View style={{ display: 'flex', alignItems: 'center' }}>
            <Text style={styles.copyrightText}>© Sandeep Kadam</Text>
          </View>
    </View>
    
    </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default BmiCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
  },
  title: {
    backgroundColor: "#2c6975",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  titleText: {
    fontSize: 30,
    color: "white",
    fontFamily: "poppins",
    fontWeight: "bold",
  },
  Input: {
    height: 55,
    margin: 15,
    borderWidth: 1 / 2,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#cde0c9",
    fontSize: 18,
  },
  button:{
    height:55,
    margin:15,
    borderWidth:1/2,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "#2c6975",
    borderRadius:5
  },
  buttonText:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  },
  resultView:{
    margin:15,
  },
  result:{
    fontSize:30,
    color:'#2c6975',
    fontWeight:'bold'
  },
  copyrightText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
    alignItems: 'center',
  },
  
});
