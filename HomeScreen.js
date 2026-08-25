import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const products = [
    { id: "1", name: "Fresh Tomatoes", price: "$2.49", category: "Vegetables" },
    { id: "2", name: "Chicken Breast", price: "$4.99", category: "Meat" },
    { id: "3", name: "Fresh Milk", price: "$1.79", category: "Dairy" },
    { id: "4", name: "Strawberries", price: "$3.29", category: "Fruits" },
  ];

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>ShopEasy</Text>
        <Text style={styles.notification}>🔔</Text>
      </View>

      <Text style={styles.greeting}>Hi, Nora!</Text>
      <Text style={styles.subtitle}>What are you shopping for today?</Text>

      <TextInput
        style={styles.search}
        placeholder="Search products..."
        value={search}
        onChangeText={setSearch}
      />

      <Text style={styles.sectionTitle}>Categories</Text>

      <View style={styles.categories}>
        <Text style={styles.category}>Fruits</Text>
        <Text style={styles.category}>Vegetables</Text>
        <Text style={styles.category}>Meat</Text>
        <Text style={styles.category}>Dairy</Text>
      </View>

      <Text style={styles.sectionTitle}>Recommended for you</Text>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productCategory}>{item.category}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>

            <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
              <Text style={styles.heart}>
                {favorites.includes(item.id) ? "♥" : "♡"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.bottomNav}>
        <Text style={styles.activeNav}>Home</Text>
        <Text>Categories</Text>
        <Text>Favorites</Text>
        <Text>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6D28D9",
  },
  notification: {
    fontSize: 24,
  },
  greeting: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 25,
  },
  subtitle: {
    color: "#6B7280",
    marginTop: 5,
  },
  search: {
    backgroundColor: "#F3F4F6",
    padding: 14,
    borderRadius: 12,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 12,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  category: {
    backgroundColor: "#F3E8FF",
    padding: 10,
    borderRadius: 10,
    color: "#6D28D9",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    marginBottom: 12,
  },
  productName: {
    fontSize: 17,
    fontWeight: "bold",
  },
  productCategory: {
    color: "#6B7280",
    marginTop: 3,
  },
  price: {
    color: "#6D28D9",
    fontWeight: "bold",
    marginTop: 5,
  },
  heart: {
    fontSize: 28,
    color: "#E11D48",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  activeNav: {
    color: "#6D28D9",
    fontWeight: "bold",
  },
});
