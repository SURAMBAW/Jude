import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Avatar from '../Avatar';

const SettingsCard = ({ isDarkMode, toggleSwitch }) => {
  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Avatar/>
      <View style={styles.section}>
        <Text style={[styles.header, isDarkMode && styles.darkText]}>Profile</Text>
        <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
          <Icon name="person" size={24} color={isDarkMode ? "white" : "gray"} />
          <Text style={[styles.item, isDarkMode && styles.darkText]}>Accounts</Text>
          <Icon name="chevron-forward-outline" size={24} color={isDarkMode ? "white" : "gray"} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
          <Icon name="key" size={24} color={isDarkMode ? "white" : "gray"} />
          <Text style={[styles.item, isDarkMode && styles.darkText]}>Passwords</Text>
          <Icon name="chevron-forward-outline" size={24} color={isDarkMode ? "white" : "gray"} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={[styles.header, isDarkMode && styles.darkText]}>Settings</Text>
        <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
          <Icon name="notifications" size={24} color={isDarkMode ? "white" : "gray"} />
          <Text style={[styles.item, isDarkMode && styles.darkText]}>Notifications</Text>
          <Icon name="chevron-forward-outline" size={24} color={isDarkMode ? "white" : "gray"} />
        </TouchableOpacity>
        <View style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
          <Icon name="moon" size={24} color={isDarkMode ? "white" : "gray"} />
          <Text style={[styles.item, isDarkMode && styles.darkText]}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81C784" }}
            thumbColor={isDarkMode ? "#f4f3f4" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#F7F7F7', 
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 20,
    marginBottom: -10,
  },
  darkContainer: {
    backgroundColor: '#1C1C1E', 
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  
  rowWithBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginVertical: 15, 
  },
  lightRow: {
    backgroundColor: '#FFFFFF',
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  darkRow: {
    backgroundColor: '#2C2C2E',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 5, 
    color: '#000',
  },
  darkText: {
    color: '#FFFFFF',
  },
  item: {
    fontSize: 16,
    color: '#263238',
    flex: 1,
    marginLeft: 10,
  },
});

export default SettingsCard;