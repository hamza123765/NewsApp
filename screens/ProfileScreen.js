import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Feather name="user" size={60} color="#333" />
        <Text style={styles.title}>My Account</Text>
        <Text style={styles.subtitle}>
          Manage your preferences
        </Text>
      </View>

      {/* Options */}
      <View style={styles.menu}>
        <ProfileItem icon="bookmark" title="Saved Articles" />
        <ProfileItem icon="bell" title="Notifications" />
        <ProfileItem icon="settings" title="App Settings" />
        <ProfileItem icon="info" title="About App" />
        <ProfileItem icon="help-circle" title="Help & Support" />
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logout}>
        <Feather name="log-out" size={20} color="#d00" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

/* ---------- Reusable Row ---------- */
function ProfileItem({ icon, title }) {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.itemLeft}>
        <Feather name={icon} size={20} color="#333" />
        <Text style={styles.itemText}>{title}</Text>
      </View>
      <Feather name="chevron-right" size={20} color="#999" />
    </TouchableOpacity>
  );
}

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    alignItems: "center",
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  menu: {
    marginTop: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#f1f1f1",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    fontSize: 15,
    marginLeft: 12,
  },
  logout: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  logoutText: {
    color: "#d00",
    fontSize: 16,
    marginLeft: 8,
    fontWeight: "600",
  },
});