import React from "react";
import Screen from "../../layout/Screen";
import UserForm from "../../entity/users/UserForm";
const AddFriendScreen = ({ route, navigation }) => {
  const { onAddFriend } = route.params;

  const handleAddFriend = (friend) => {
    onAddFriend(friend); // Call the passed handler to add the friend
    navigation.goBack(); // Go back to the SocialScreen
  };

  return (
    <Screen>
      <UserForm onSubmit={handleAddFriend} type="addFriend" />
    </Screen>
  );
};

export default AddFriendScreen;
