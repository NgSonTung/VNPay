import React, {Component} from 'react';
import { 
  Text,
  View, 
  StyleSheet, 
  Image,
  ActivityIndicator, 
} from 'react-native'

export default class Load extends Component{
  componentWillMount(){
    setTimeout(() => {
      this.setState({
        showMe : false
      })
    }, 1000)
  }

  render(){
  return(
    <View style={styles.container}>
        <>
          <ActivityIndicator size={80} color="red" />
          <Image style={styles.logo} source={require("../assets/logo1.png")} />
        </>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: 'transparent',
  },
   logo: {
    width: 60,
    height: 60,
    marginLeft: 175,
    marginTop: -70,
    backgroundColor: "white",
    borderRadius: 50
   }
})