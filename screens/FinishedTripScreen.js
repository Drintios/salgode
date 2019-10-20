import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import FinishTrip from '../components/Trips/FinishTrip'

class FinishedTripScreen extends Component {
  static navigationOptions = {
    title: 'Viaje terminado',
  }

  render() {
    return (
      <View style={styles.container}>
        <FinishTrip />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f7ff',
    padding: 15,
    ...StyleSheet.absoluteFill,
  },
})

export default FinishedTripScreen
