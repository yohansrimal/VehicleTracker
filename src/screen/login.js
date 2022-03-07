import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const Login = ({navigation}) => {
  return (
    <LinearGradient colors={['#1f1c2c', '#928dab']}>
      <SafeAreaView style={{height: '100%'}} backgroundColor="transparent">
        <StatusBar translucent backgroundColor="transparent" />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <View style={{height: '100%', flexDirection: 'column'}}>
            <View style={{flex: 4, justifyContent: 'center'}}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.logo}
                  source={require('../assets/logo.png')}
                />
              </View>

              <Text style={styles.heading}>User Code</Text>

              <TextInput
                style={styles.input}
                placeholderTextColor={'#A1B9CF'}
                placeholder="CODE HERE"
              />
            </View>

            <View style={{flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 24,
                }}>
                <View style={{flex: 1}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={{
                      alignSelf: 'stretch',
                      backgroundColor: '#683396',
                      borderRadius: 12,
                    }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        color: '#ffffff',
                        fontSize: 23,
                        fontWeight: '600',
                        paddingTop: 10,
                        paddingBottom: 10,
                      }}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{margin: 4}} />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  logo: {
    justifyContent: 'center',
    width: 260,
    height: 260,
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    marginLeft: 20,
    marginTop: 50,
    textAlign: 'left',
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
  },

  subheading: {
    color: '#BDBDBD',
    marginTop: 11,
    marginLeft: 20,
    fontSize: 14,
  },
  input: {
    borderRadius: 12,
    margin: 20,
    borderWidth: 0,
    padding: 10,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Login;
