import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Image, ImageBackground,SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsCard = ({ isDarkMode, toggleSwitch }) => {
    return (
      <View style={[styles.container, isDarkMode && styles.darkContainer]}>
        <View style={[styles.containers, isDarkMode && styles.darkContainers]}>
          <ImageBackground
            source={require('../../assets/goku.png')} // Path to Goku image
            style={styles.avatarBackground} // Apply the background style
            resizeMode="cover" // Ensure the image scales properly
          >
            <View style={styles.content}>
              <Image
                source={require('../../assets/back.png')} // Path to the profile image
                style={styles.image}
              />
              <View style={styles.joinedContainer}>
                <Text style={[styles.nameText, isDarkMode && styles.darkText]}>
                  Jude Adrianne Jimoya
                </Text>
                <Text
                  style={[
                    styles.statusText,
                    isDarkMode ? styles.darkStatusText : styles.lightStatusText,
                  ]}
                >
                  Joined 10 years ago
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>

      <View style={styles.cardContent}>
        <View style={styles.section}>
          <Text style={[styles.header, isDarkMode && styles.darkText]}>
            Profile
          </Text>
          <TouchableOpacity
            style={[
              styles.rowWithBackground,
              isDarkMode ? styles.darkRow : styles.lightRow,
            ]}
          >
            <Icon name="person" size={24} color={isDarkMode ? 'white' : 'gray'} />
            <Text style={[styles.item, isDarkMode && styles.darkText]}>
              Accounts
            </Text>
            <Icon
              name="chevron-forward-outline"
              size={24}
              color={isDarkMode ? 'white' : 'gray'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={[styles.header, isDarkMode && styles.darkText]}>
            Settings
          </Text>
          <TouchableOpacity
            style={[
              styles.rowWithBackground,
              isDarkMode ? styles.darkRow : styles.lightRow,
            ]}
          >
            <Icon
              name="notifications"
              size={24}
              color={isDarkMode ? 'white' : 'gray'}
            />
            <Text style={[styles.item, isDarkMode && styles.darkText]}>
              Notifications
            </Text>
            <Icon
              name="chevron-forward-outline"
              size={24}
              color={isDarkMode ? 'white' : 'gray'}
            />
          </TouchableOpacity>
          <View
            style={[
              styles.rowWithBackground,
              isDarkMode ? styles.darkRow : styles.lightRow,
            ]}
          >
            <Icon name="moon" size={24} color={isDarkMode ? 'white' : 'gray'} />
            <Text style={[styles.item, isDarkMode && styles.darkText]}>
              Dark Mode
            </Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81C784' }}
              thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isDarkMode}
            />
          </View>
        </View>
      </View>
      </View>

  );
};


const styles = StyleSheet.create({
    avatarBackground: {
        width: '120%',
        height: 250, 
        justifyContent: 'center', 
        alignItems: 'center',
        right: 50, 
        bottom: 30,
      },
        container: {
          flex: 1, 
          justifyContent: 'center',
          alignItems: 'center',
          width: '120%',
          height: 250, 
          marginBottom: 300,
          right: 40,
        },
        content: {
          alignItems: 'center', 
          padding: 20,
        },
        image: {
          width: 150,
          height: 150,
          borderRadius: 75, 
          borderColor: '#E0E0E0',  
          borderWidth: 2,
          margin: 45         
        },

        joinedContainer: {
          justifyContent: 'center', 
          padding: 10,  
          borderRadius: 10,  
          maxWidth: '80%', 
          alignItems: 'center', 
          marginTop:-50, 
        },
        nameText: {
          fontSize: 18,  
          fontWeight: 'bold',
          color: 'black',  
          textShadowColor: '#FFFFFF', 
          textShadowOffset: { width: 1, height: 1 }, 
          textShadowRadius: 2, 
          marginBottom: 3,  
        },
      
        darkText: {
          color: 'black',  
          textShadowColor: '#FFFFFF', 
          textShadowOffset: { width: 1, height: 1 }, 
        },
        
        statusText: {
          fontSize: 14,
          fontWeight: 'bold',
          color: 'gray',  
          textShadowColor: '#FFFFFF',
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 2, 
        },
      
        darkStatusText: {
          fontSize: 14,
          fontWeight: 'bold',
          color: 'gray',  
          textShadowColor: '#FFFFFF', 
          textShadowOffset: { width: 1, height: 1 }, 
          textShadowRadius: 2, 
        },

  container: {
    flex: 1,
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  headerContent: {
    alignItems: 'center',
    marginBottom: 20,
  },

  
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#E0E0E0',
    borderWidth: 2,
  },

  joinedContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  darkText: {
    color: 'white',
  },
  statusText: {
    fontSize: 14,
    color: 'gray',
  },
  darkStatusText: {
    color: '#bbb',
  },
  cardContent: {
    flex: 1,
  },
  section: {
    marginVertical: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rowWithBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  lightRow: {
    backgroundColor: '#f9f9f9',
  },
  darkRow: {
    backgroundColor: '#444',
  },
  item: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
  },
});

export default SettingsCard;