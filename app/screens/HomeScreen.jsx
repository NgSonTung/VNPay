import React from 'react';
import {Dimensions , Text , Image, Alert , View, Button, StatusBar} from 'react-native';
import styles from './HomeScreenStyles.jsx'
const HomeScreen = () => {
    return (
        <View>
            {/* top bar */}
            <View>
                <Image
                    source={{uri: "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"}} style={styles.avatar}
                />
            </View>
            <StatusBar/>
        </View>
    )

}
export default HomeScreen;