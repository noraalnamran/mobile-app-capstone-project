import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function SettingsMenu({ navigation }) {
  const openScreen = (screenName) => {
    navigation?.navigate?.(screenName);
  };

  const handleLogout = () => {
    Alert.alert("Log Out", "You have been logged out successfully.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Menu</Text>
      <Text style={styles.subtitle}>Manage your ShopEasy account</Text>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => openScreen("Settings")}
      >
        <Text style={styles.icon}>⚙️</Text>
        <Text style={styles.menuText}>Settings</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => openScreen("Notifications")}
      >
        <Text style={styles.icon}>🔔</Text>
        <Text style={styles.menuText}>Notifications</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.icon}>◐</Text>
        <Text style={styles.menuText}>Appearance</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.icon}>🔒</Text>
        <Text style={styles.menuText}>Privacy & Security</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.icon}>ⓘ</Text>
        <Text style={styles.menuText}>About ShopEasy</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.menuItem, styles.logout]}
        onPress={handleLogout}
      >
        <Text style={styles.icon}>↪</Text>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
  },
  subtitle: {
    color: "#6B7280",
    marginTop: 5,
    marginBottom: 30,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  icon: {
    fontSize: 20,
    width: 35,
  },
  menuText: {
    flex: 1,
    fontSize: 17,
    color: "#111827",
  },
  arrow: {
    fontSize: 28,
    color: "#9CA3AF",
  },
  logout: {
    marginTop: 20,
    borderBottomWidth: 0,
  },
  logoutText: {
    fontSize: 17,
    color: "#DC2626",
    fontWeight: "600",
  },
});
