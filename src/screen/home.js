import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const Home = ({navigation}) => {
  return (
    <LinearGradient colors={['#1f1c2c', '#928dab']}>
      <SafeAreaView style={{height: '100%'}} backgroundColor="transparent">
        <StatusBar translucent backgroundColor="transparent" />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <View
            style={{
              height: '100%',
              flexDirection: 'column',
            }}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Tracking')}
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
                    Start App
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() =>
                    setTimeout(() => {
                      Alert.alert(
                        'Syncing',
                        'Please Wait!',
                        [
                          {
                            text: 'OK',
                          },
                        ],
                        {cancelable: false},
                      );
                    }, 100)
                  }
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
                    Sync App
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});

export default Home;
