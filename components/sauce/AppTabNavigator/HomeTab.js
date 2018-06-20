import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';


export default class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="home" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home Section</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center',
    }
});