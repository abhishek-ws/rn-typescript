import { Avatar, ListItem } from "@rneui/themed";
import { ImageSourcePropType } from "react-native";

const Emoji = ({ uri, value }: { uri?: string; value: string }) => {
  return (
    <ListItem bottomDivider>
      <Avatar
        rounded
        source={{ uri }}
        containerStyle={{ backgroundColor: "#c2c2c2" }}
      />
      <ListItem.Content>
        <ListItem.Title>{value}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

export default Emoji;
