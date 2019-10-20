import React, { Component } from 'react'
import { StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { Card, View, Text, Item, Input, Button } from 'native-base'
import Location from './Trip/Location'
import PropTypes from 'prop-types'
import Colors from '../../constants/Colors'
import CardIcon from './Trip/CardIcon'

class FinishTrip extends Component {
  constructor(props) {
    super(props)
    this.state = { driver: 'Camilo', destiny: 'San Joaquin' }
  }

  render() {
    const { driver, destiny } = this.state
    return (
      <Card style={styles.container}>
        <View style={styles.locationContainer}>
          <Location color={Colors.tintColor} location={destiny} />
          <View style={styles.textFinish}>
            <Text style={{ fontWeight: 'bold' }}>
              Haz finalizado tu recorrido{' '}
            </Text>
            <Text>
              Evalua y agradece a {driver} por su buena onda y disposición.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: '5%',
            }}
          >
            <TouchableOpacity>
              <CardIcon
                name={Platform.OS === 'ios' ? 'ios-thumbs-up' : 'md-thumbs-up'}
                onPress={() => null}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <CardIcon
                name={
                  Platform.OS === 'ios' ? 'ios-thumbs-down' : 'md-thumbs-down'
                }
                onPress={() => null}
              />
            </TouchableOpacity>
          </View>
          <Item
            rounded
            style={{
              marginTop: '5%',
              height: 50,
            }}
          >
            <Input placeholder="Añade una descripción"></Input>
          </Item>
          <Button block borderRadius={10} style={styles.button}>
            <Text>Terminar Viaje</Text>
          </Button>
        </View>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
  container: {
    alignItems: 'flex-start',
    borderRadius: 20,
    flexDirection: 'row',
    // height: 300,
    justifyContent: 'space-between',
    padding: 10,
  },
  iconContainer: {
    alignItems: 'flex-end',
    height: 150,
    justifyContent: 'space-between',
  },
  locationContainer: {
    justifyContent: 'space-evenly',
    marginTop: '10%',
  },
  textFinish: {
    marginTop: '10%',
  },
})

export default FinishTrip
