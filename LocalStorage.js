import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "@shopeasy_favorites";
const PREFERENCES_KEY = "@shopeasy_preferences";

// Save favorite items
export const saveFavorites = async (favorites) => {
  try {
    const jsonValue = JSON.stringify(favorites);
    await AsyncStorage.setItem(FAVORITES_KEY, jsonValue);
    return true;
  } catch (error) {
    console.error("Error saving favorites:", error);
    return false;
  }
};

// Load favorite items
export const getFavorites = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY);

    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error("Error loading favorites:", error);
    return [];
  }
};

// Save user preferences
export const savePreferences = async (preferences) => {
  try {
    const jsonValue = JSON.stringify(preferences);
    await AsyncStorage.setItem(PREFERENCES_KEY, jsonValue);
    return true;
  } catch (error) {
    console.error("Error saving preferences:", error);
    return false;
  }
};

// Load user preferences
export const getPreferences = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(PREFERENCES_KEY);

    return jsonValue != null
      ? JSON.parse(jsonValue)
      : {
          darkMode: false,
          notifications: true,
          language: "English",
        };
  } catch (error) {
    console.error("Error loading preferences:", error);

    return {
      darkMode: false,
      notifications: true,
      language: "English",
    };
  }
};

// Remove stored favorites
export const clearFavorites = async () => {
  try {
    await AsyncStorage.removeItem(FAVORITES_KEY);
    return true;
  } catch (error) {
    console.error("Error clearing favorites:", error);
    return false;
  }
};
