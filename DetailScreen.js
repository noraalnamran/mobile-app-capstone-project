import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function DetailScreen({ navigation, route }) {
  const [favorite, setFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const item = route?.params?.item || {
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: "$2.49",
    description:
      "Fresh, ripe tomatoes selected for quality, flavor, and everyday cooking.",
  };

  const addToCart = () => {
    Alert.alert(
      "Added to Cart",
      `${quantity} ${item.name} added successfully.`
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack?.()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Item Details</Text>

        <TouchableOpacity onPress={() => setFavorite(!favorite)}>
          <Text style={styles.favorite}>
            {favorite ? "♥" : "♡"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageBox}>
        <Text style={styles.image}>🍅</Text>
      </View>

      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>

      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>{item.description}</Text>

      <Text style={styles.sectionTitle}>Quantity</Text>

      <View style={styles.quantityRow}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => setQuantity(Math.max(1, quantity - 1))}
        >
          <Text style={styles.quantityText}>−</Text>
        </TouchableOpacity>

        <Text style={styles.quantity}>{quantity}</Text>

        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => setQuantity(quantity + 1)}
        >
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.cartButton} onPress={addToCart}>
        <Text style={styles.cartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 24,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  back: {
    fontSize: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  favorite: {
    fontSize: 30,
    color: "#E11D48",
  },
  imageBox: {
    height: 280,
    backgroundColor: "#FFF1F2",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  image: {
    fontSize: 120,
  },
  category: {
    color: "#6B7280",
    marginTop: 25,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 5,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6D28D9",
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 25,
  },
  description: {
    color: "#6B7280",
    lineHeight: 22,
    marginTop: 8,
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  quantityButton: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#F3E8FF",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 25,
    color: "#6D28D9",
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 20,
    marginHorizontal: 25,
  },
  cartButton: {
    backgroundColor: "#6D28D9",
    padding: 17,
    borderRadius: 12,
    marginTop: 35,
  },
  cartText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 17,
  },
});
