import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

const ResourceButton = ({ onPress, imageSource, title }) => {
  return (
    <TouchableOpacity style={styles.resourceButton} onPress={onPress}>
      <View style={styles.row}>
        <Image source={imageSource} style={styles.icon} />
        <Text style={styles.resourceButtonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ResourceButton;

const styles = StyleSheet.create({
  resourceButton: {
    alignItems: 'left',
    borderRadius: 30,
    width: '78%',
    padding: 16,
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
    marginRight: 8,
    width: 45,
    height: 45,
    resizeMode: 'contain'
  },
  resourceButtonText: {
    fontWeight: '600',
    letterSpacing: 0.3,
    fontSize: 20,
    color: '#000',
    marginLeft: 10,
  },
});
