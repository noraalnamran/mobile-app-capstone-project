import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");

  const changeLanguage = () => {
    const nextLanguage =
      language === "English" ? "Arabic" : "English";

    setLanguage(nextLanguage);
  };

  const saveSettings = () => {
    Alert.alert(
      "Settings Saved",
      "Your preferences have been saved successfully."
    );
  };

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <Text style={[styles.title, darkMode && styles.darkText]}>
        Settings
      </Text>

      <View style={styles.settingRow}>
        <View>
          <Text style={[styles.label, darkMode && styles.darkText]}>
            Dark Mode
          </Text>
          <Text style={styles.description}>
            Use a darker appearance
          </Text>
        </View>

        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
        />
      </View>

      <View style={styles.settingRow}>
        <View>
          <Text style={[styles.label, darkMode && styles.darkText]}>
            Notifications
          </Text>
          <Text style={styles.description}>
            Receive app alerts
          </Text>
        </View>

        <Switch
          value={notifications}
          onValueChange={setNotifications}
        />
      </View>

      <TouchableOpacity
        style={styles.settingRow}
        onPress={changeLanguage}
      >
        <View>
          <Text style={[styles.label, darkMode && styles.darkText]}>
            Language
          </Text>
          <Text style={styles.description}>{language}</Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={saveSettings}
      >
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        Preferences are saved automatically.
      </Text>
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
  darkContainer: {
    backgroundColor: "#111827",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#111827",
  },
  darkText: {
    color: "#FFFFFF",
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  label: {
    fontSize: 17,
    fontWeight: "600",
    color: "#111827",
  },
  description: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  arrow: {
    fontSize: 28,
    color: "#9CA3AF",
  },
  saveButton: {
    backgroundColor: "#6D28D9",
    padding: 16,
    borderRadius: 12,
    marginTop: 30,
  },
  saveText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  note: {
    textAlign: "center",
    color: "#6B7280",
    marginTop: 18,
  },
});
