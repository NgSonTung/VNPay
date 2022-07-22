import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";

const Time = () => {
    const [currenDate, setcurrenDate] = useState('')
    useEffect(() => {
        var date = new Date().getDate()
        var month = new Date().getMonth() + 1
        var year = new Date().getFullYear()
        return () => {
            setcurrenDate( date + '/' + month + '/' + year)
        }
    }, [])
    return(
        <Text style={styles.time}>
            {currenDate}
        </Text>
    )
}
export default Time;

const styles = StyleSheet.create({
    time:{
        color: "gray",
        marginTop: 20,
        marginLeft: 20,
        fontSize: 16,
    }
})
