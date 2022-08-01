import React, { Component, useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ActivityIndicator } from "react-native";

const Load = () => {
  const [showLoad, setLoad] = useState(true);
  const [timeOut, setTime] = useState(0);

  useEffect(() => {
    setTime(
      setTimeout(() => {
        setLoad(!showLoad);
      }, 2000)
    );
    return () => {
      setTime(0);
    };
  }, []);

  return (
    <>
      {showLoad && (
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
          <>
            <ActivityIndicator
              style={{ position: "absolute" }}
              size={80}
              color="red"
            />
            <Image
              style={styles.logo}
              source={require("../assets/logo1.png")}
            />
          </>
        </View>
      )}
    </>
  );
};

export default Load;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 1,
  },
  logo: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 50,
  },
});
