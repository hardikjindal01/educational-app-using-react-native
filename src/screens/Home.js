import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Menu from '../component/Menu';

const Home = () => {
  const description =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure accusantium molestiae, alias rem architecto consequatur pedita odio?";
return (
  <View style={styles.mainContainer}>
    <View style={styles.homeTop}>
      <Image
        style={styles.headerImage}
        resizeMode="contain"
        source={require("../../assets/logo.jpeg")}
      />
      <Text style={styles.mainheader}>welcome to </Text>
      <Text
        style={[
          styles.mainheader,
          {
            fontSize: 33,
            color: "#4c5dab",
            marginTop: 0,
          },
        ]}
      >
        Learner Club
      </Text>
      <Text style={styles.parastyle}>{description}</Text>
    </View>
    <View style={styles.menuStyle}>
    <View style={styles.LineStyle}></View>
      <Menu/>
      <View style={[
        styles.LineStyle,
        {
          marginVertical:10,
        },]}></View>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
mainContainer: {
 height: "100%",
 display: "flex",
 justifyContent: "space-between",
 paddingHorizontal: 20,
 backgroundColor:"#fff",
 textAlign: "center",
},

homeTop: {
 display: "flex",
 justifyContent: "center",
 alignItems : "center",
 paddingHorizontal: 10
},

headerImage:{
  height: undefined,
  width: "100%",
  aspectRatio: 1,
  display:"flex",
  alignItems:"stretch",
  marginTop: 20,   
  borderRadius: 20,
},
mainheader :{
  fontSize : 30,
  color : "#344055",
  textTransform: "uppercase",
  marginTop: 20,
},
parastyle:{
  textAlign:"left",
  fontSize: 19,
  color:"#7d7d7d",
  marginTop: 20,
  paddingBottom:50,
  lineHeight:26,
},
LineStyle:{
  marginBottom:10,
  borderWidth:1,
  borderColor:"grey",
},
});

export default Home

