import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';

const ProfileLayout = ({ personalInfo }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {personalInfo && (
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: personalInfo.imageUrl }}
            style={[styles.profileImage, { width: width * 0.6, height: width * 0.6 * (3 / 4) }]}
          />
          <Text style={styles.profileName}>{personalInfo.name}</Text>
          <Text style={styles.profileBio}>{personalInfo.bio}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    borderRadius: 10,
    resizeMode: 'cover',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileBio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default ProfileLayout;
