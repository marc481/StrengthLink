import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import { COLORS } from "../../../config/theme";

const InviteFriendsButton = ({ friends = [], invitedIds = [], onInvite }) => {
  const [visible, setVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [localInvited, setLocalInvited] = useState(invitedIds);

  const filteredFriends = useMemo(() => {
    if (!query) return friends;
    return friends.filter((f) =>
      f.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, friends]);

  const openModal = () => setVisible(true);
  const closeModal = () => {
    setQuery("");
    setVisible(false);
  };

  const handleInvite = (friend) => {
    if (localInvited.includes(friend.id)) return;
    const next = [...localInvited, friend.id];
    setLocalInvited(next);
    onInvite?.(friend);
  };

  const renderItem = ({ item }) => {
    const invited = localInvited.includes(item.id);
    return (
      <Pressable
        style={[styles.item, invited && { opacity: 0.6 }]}
        onPress={() => handleInvite(item)}
        disabled={invited}
      >
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.symbol}>{invited ? "✓" : "＋"}</Text>
      </Pressable>
    );
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={openModal}>
        <Text style={styles.symbol}>＋</Text>
        <Text style={styles.buttonText}>Invite Friends</Text>
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.backdrop}>
          <View style={styles.sheet}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Invite a Friend</Text>
              <TouchableOpacity onPress={closeModal}>
                <Text style={styles.symbol}>×</Text>
              </TouchableOpacity>
            </View>

            {localInvited.length > 0 && (
              <Text style={styles.invitedLine}>
                Already invited:{" "}
                {friends
                  .filter((f) => localInvited.includes(f.id))
                  .map((f) => f.name)
                  .join(", ")}
              </Text>
            )}

            <TextInput
              style={styles.searchInput}
              placeholder="Search friends..."
              value={query}
              onChangeText={setQuery}
            />

            <FlatList
              data={filteredFriends}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.buttonBackground,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    elevation: 2,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: COLORS.buttonText,
    fontWeight: "600",
    marginLeft: 8,
  },
  symbol: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.buttonText,
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    maxHeight: "70%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  headerText: { fontSize: 18, fontWeight: "700" },
  invitedLine: {
    marginBottom: 8,
    fontStyle: "italic",
    color: COLORS.infoHighlight,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
    backgroundColor: COLORS.inputBackground,
    color: COLORS.inputText,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",
    marginVertical: 4,
    borderRadius: 16,
    elevation: 1,
  },
  itemText: { fontSize: 16, fontWeight: "500", color: COLORS.bodyText },
});

export default InviteFriendsButton;
