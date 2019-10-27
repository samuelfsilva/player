/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon, Button} from 'react-native-elements';

const iconSize = 40;

// create a component
class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      play: true,
    };
  }

  play() {
    const mudaPlay = !this.state.play;
    this.setState({play: mudaPlay});
  }

  clicaPlay(play) {
    return play ? (
      <Icon reverse name={'play-arrow'} size={iconSize} color={'red'} />
    ) : (
      <Icon reverse name={'pause'} size={iconSize} color={'red'}/>
    );
  }

  render() {
    return (
      <View style={styles.coluna}>
        <View style={styles.container}>
          <Text>Música</Text>
        </View>
        <View style={styles.container2}>
          <View style={styles.linha}>
            <Icon name="skip-previous" size={iconSize} />
            <Button
              icon={this.clicaPlay(this.state.play)}
              onPress={this.play.bind(this)}
              type={'clear'}
            />
            <Icon name="skip-next" size={iconSize} />
          </View>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopColor: 'gray',
    borderTopWidth: 1,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coluna: {
    flexDirection: 'column',
    flex: 1,
  },
});

//make this component available to the app
export default App;

