import { FlatList, ActivityIndicator } from "react-native";
import Emoji from "../../components/atoms/Emoji";
import { useGetEmojisQuery } from "../../services/github";

const Emojis = () => {
  const { isLoading, data } = useGetEmojisQuery();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Emoji uri={item.uri} value={item.value} />}
      keyExtractor={(item) => item.uri}
    />
  );
};

export default Emojis;
