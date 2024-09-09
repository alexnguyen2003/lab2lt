import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';

const BlogLayout = ({ personalInfo, blogPosts }) => {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;

  return (
    <View style={styles.container}>
      {personalInfo && (
        <View style={styles.profileContainer}>
          {personalInfo.imageUrl ? (
            <Image
              source={{ uri: personalInfo.imageUrl }}
              style={[styles.profileImage, { width: width * 0.6, height: width * 0.6 * (3 / 4) }]}
              resizeMode="contain" // Đảm bảo hình ảnh không bị cắt
            />
          ) : (
            <Text>No image available</Text>
          )}
          <Text style={styles.profileName}>{personalInfo.name}</Text>
          <Text style={styles.profileBio}>{personalInfo.bio}</Text>
        </View>
      )}
      <View style={styles.postsContainer}>
        {blogPosts.map((post, index) => (
          <View key={index} style={styles.post}>
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text style={styles.postContent}>{post.content}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    borderRadius: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileBio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  postsContainer: {
    marginTop: 20,
  },
  post: {
    marginBottom: 20,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postContent: {
    fontSize: 16,
    color: '#333',
  },
});

export default BlogLayout;
