import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const GoBackButton = () => {
  const navigation = useNavigation(); // used for navigation.navigate()
  const [fontsLoaded] = useFonts({
    'Manrope-SemiBold': require('../assets/fonts/Manrope-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Return null to render nothing while loading fonts
  }

  return (
    <TouchableOpacity 
      style={styles.GoBackButton}
      onPress={() => navigation.goBack()}
    >
      <View style={styles.row}>
        <Image source={require('../assets/arrow_back.png')} style={styles.icon} />
        <Text style={styles.GoBackButtonText}>Go Back</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({
  GoBackButton: {
    alignItems: 'center',
    borderRadius: 30,
    width: '78%',
    padding: 23,
    marginTop: 7,
    marginBottom: 7,
    backgroundColor: '#fff',
    shadowColor: '#A59D95',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 7,
    zIndex: 11,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginLeft: -25,
  },
  icon: {
    // marginRight: 5,
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  GoBackButtonText: {
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '600',
    letterSpacing: 0.3,
    fontSize: 19,
    color: '#000',
    marginLeft: 10,
  },
});
