import React from "react";
import Screen from "../../layout/Screen";
import UserView from "../../entity/users/UserView";
const FriendDetailScreen = ({ route, navigation }) => {
  const { friend, onDelete } = route.params;

  const handleDelete = (friendToDelete) => {
    onDelete(friendToDelete); // Remove friend from the list
    navigation.goBack(); // Go back to the SocialScreen
  };

  return (
    <Screen>
      <UserView user={friend} onDelete={handleDelete} />
    </Screen>
  );
};

export default FriendDetailScreen;
