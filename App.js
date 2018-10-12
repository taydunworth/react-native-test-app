import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Here's a React Native App!</Text>
        </View>
        <View style={styles.btn}>
          <Button
            onPress={() => {
              Alert.alert('You pressed the button!');
            }}
            color="#fff"
            title="Press Me"
            accessibilityLabel="Learn more about this button"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  btn: {
    backgroundColor: '#002949',
    margin: 10,
    padding: 5,
  },
});
