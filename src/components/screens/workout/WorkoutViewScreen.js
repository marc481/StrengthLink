import React, { useContext, useState } from "react";
import { View, Text, Alert } from "react-native";
import { WorkoutContext } from "../../../context/WorkoutContext";
import WorkoutView from "../../entity/workouts/WorkoutView";
import { COLORS, STYLES, FONTS } from "../../../config/theme";
import { Button } from "../../UI/Button";
import { useIsFocused } from "@react-navigation/native";
import InviteFriendsButton from "./InviteFriendsButton";

const WorkoutViewScreen = ({ navigation, route }) => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);
  const [invitedIds, setInvitedIds] = useState([]);

  const friends = [
    { id: 1, name: "Jamie" },
    { id: 2, name: "Riley" },
    { id: 3, name: "Casey" },
  ];

  const { workout: workoutParam } = route.params || {};
  const workout = workouts.find((w) => w.WorkoutID === workoutParam.WorkoutID);

  const isFocused = useIsFocused();

  if (!workout || !workout.WorkoutID) {
    return (
      <View style={STYLES.container}>
        <Text style={[FONTS.bold, { color: COLORS.error }]}>
          Workout Not Found
        </Text>
        <Button label="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  const handleDeleteWorkout = () => {
    Alert.alert(
      "Delete Workout",
      `Are you sure you want to delete "${workout.WorkoutName}"?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => {
            const updatedWorkouts = workouts.filter(
              (w) => w.WorkoutID !== workout.WorkoutID
            );
            setWorkouts(updatedWorkouts);
            navigation.goBack();
          },
          style: "destructive",
        },
      ]
    );
  };

  const handleModifyWorkout = (updatedWorkout) => {
    const updatedWorkouts = workouts.map((w) =>
      w.WorkoutID === updatedWorkout.WorkoutID ? updatedWorkout : w
    );
    setWorkouts(updatedWorkouts);
  };

  const handleInvite = (friend) => {
    if (invitedIds.includes(friend.id)) return;
    setInvitedIds([...invitedIds, friend.id]);
  };

  const invitedFriends = friends.filter((f) => invitedIds.includes(f.id));

  return (
    <View style={STYLES.container}>
      <WorkoutView
        workout={workout}
        onModify={() =>
          navigation.navigate("WorkoutModifyScreen", {
            workout,
            onModify: handleModifyWorkout,
          })
        }
        onDelete={handleDeleteWorkout}
      />

      {invitedFriends.length > 0 && (
        <View style={[STYLES.infoTray, { marginVertical: 12 }]}>
          <Text style={FONTS.infoHighlight}>Friends in this workout:</Text>
          <Text style={FONTS.body}>
            {invitedFriends.map((f) => f.name).join(", ")}
          </Text>
        </View>
      )}

      <InviteFriendsButton
        friends={friends}
        invitedIds={invitedIds}
        onInvite={handleInvite}
      />
    </View>
  );
};

export default WorkoutViewScreen;
