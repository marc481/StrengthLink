import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../config/theme";

const Icons = {
  Add: (props) => <MaterialIcons name="add" {...props} />,
  Delete: (props) => <MaterialIcons name="delete" {...props} />,
  Edit: (props) => <MaterialIcons name="edit" {...props} />,
  Save: (props) => <MaterialIcons name="save" {...props} />,
  Search: (props) => <MaterialIcons name="search" {...props} />,
  Home: (props) => <MaterialCommunityIcons name="home" {...props} />,
  Workout: (props) => <MaterialCommunityIcons name="dumbbell" {...props} />,
  Social: (props) => <MaterialCommunityIcons name="account-group" {...props} />,
  Progress: (props) => <MaterialCommunityIcons name="chart-line" {...props} />,
  Profile: (props) => <MaterialCommunityIcons name="account" {...props} />,
  User: (props) => <MaterialCommunityIcons name="account-circle" {...props} />,
};

export default Icons;

console.log("Icons object:", Icons);
console.log("Icons.Save:", Icons.Save);
console.log("Icons.Add:", Icons.Add);
console.log("Icons.Delete:", Icons.Delete);
