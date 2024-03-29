import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const IconButton = ({ onPress, imageSource, title }) => {

  const [fontsLoaded] = useFonts({
    'Manrope-SemiBold': require('../assets/fonts/Manrope-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Return null to render nothing while loading fonts
  }

  return (
    <TouchableOpacity style={styles.IconButton} onPress={onPress}>
      <View style={styles.row}>
        <Image source={imageSource} style={styles.icon} />
        <Text style={styles.IconButtonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  IconButton: {
    alignItems: 'left',
    borderRadius: 30,
    width: '78%',
    padding: 18,
    marginTop: 7,
    marginBottom: 7,
    backgroundColor: '#E2E9F3',
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
  },
  icon: {
    marginRight: 0,
    width: 42,
    height: 42,
    resizeMode: 'contain'
  },
  IconButtonText: {
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '600',
    letterSpacing: 0.3,
    fontSize: 19,
    color: '#000',
    marginLeft: 10,
  },
});
