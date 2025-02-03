import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../../config/theme";

const FriendDetailScreen = ({ route, navigation }) => {
  const { friend, onDelete } = route.params;
  const [isFriend, setIsFriend] = useState(true); // Already a friend

  const handleDelete = () => {
    onDelete(friend);
    setIsFriend(false);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20, alignItems: "center" }}>
      {/* Profile Picture */}
      <Image
        source={{ uri: friend.UserImageURL }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />

      <Text style={{ fontSize: 24, fontWeight: "bold", marginVertical: 10 }}>
        {friend.UserName}
      </Text>
      <Text>{friend.UserEmail}</Text>

      {/* ❌ Remove Friend */}
      {isFriend && (
        <TouchableOpacity
          onPress={handleDelete}
          style={{
            marginTop: 20,
            padding: 10,
            backgroundColor: COLORS.error,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Remove Friend</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FriendDetailScreen;
