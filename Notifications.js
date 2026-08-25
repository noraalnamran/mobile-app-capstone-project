import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function NotificationsScreen() {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [sound, setSound] = useState(true);
  const [reminders, setReminders] = useState(true);

  useEffect(() => {
    configureNotifications();
  }, []);

  const configureNotifications = async () => {
    const currentPermission =
      await Notifications.getPermissionsAsync();

    let finalStatus = currentPermission.status;

    if (finalStatus !== "granted") {
      const requestedPermission =
        await Notifications.requestPermissionsAsync();

      finalStatus = requestedPermission.status;
    }

    setPermissionGranted(finalStatus === "granted");
  };

  const sendTestNotification = async () => {
    if (!permissionGranted) {
      Alert.alert(
        "Permission Required",
        "Please enable notification permission first."
      );
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "ShopEasy Test Notification",
        body: "Notifications are configured successfully!",
        sound: sound ? "default" : undefined,
      },
      trigger: null,
    });

    Alert.alert(
      "Success",
      "Test notification triggered successfully."
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

      <View style={styles.permissionBox}>
        <Text style={styles.permissionTitle}>
          Permission status
        </Text>

        <Text style={styles.permissionText}>
          {permissionGranted ? "Granted ✓" : "Not granted"}
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        Notification Settings
      </Text>

      <View style={styles.row}>
        <Text style={styles.label}>Push Notifications</Text>
        <Switch
          value={pushNotifications}
          onValueChange={setPushNotifications}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Sound</Text>
        <Switch
          value={sound}
          onValueChange={setSound}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Reminders</Text>
        <Switch
          value={reminders}
          onValueChange={setReminders}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={sendTestNotification}
      >
        <Text style={styles.buttonText}>
          Send Test Notification
        </Text>
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
    marginBottom: 25,
  },

  permissionBox: {
    backgroundColor: "#ECFDF5",
    padding: 18,
    borderRadius: 12,
    marginBottom: 30,
  },

  permissionTitle: {
    fontSize: 15,
    color: "#6B7280",
  },

  permissionText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#059669",
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  label: {
    fontSize: 17,
  },

  button: {
    backgroundColor: "#6D28D9",
    borderRadius: 12,
    padding: 17,
    marginTop: 30,
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
