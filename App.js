import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  state = {
    isLoading: true,
    error: null,
  };

  render() {
    const { isLoading, weatherCondition, temperature, location, humidity } = this.state

    return (
      <View style={styles.container}>
          <View style={styles.loadingContainer}>
            <Text stlye={styles.loadingText}>React Native Example</Text> 
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4'
  },
  loadingText: {
    fontSize: 30
  }
});
