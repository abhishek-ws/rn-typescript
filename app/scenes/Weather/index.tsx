import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import { Card } from "@rneui/themed";
import { useGetCurrentWeatherQuery } from "../../services/weather";

const Weather = () => {
  const { data, isLoading } = useGetCurrentWeatherQuery({
    lat: "18.5247663",
    lon: "73.7929271",
  });

  return (
    <View style={styles.weather}>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.weatherMain}>
          <Text style={styles.title}>
            {data?.weather?.[0]?.main}, {data?.weather?.[0]?.description},{" "}
            {data?.main?.temp}
          </Text>
          <Text style={styles.title}>⬆️ {data?.main.temp_max}°C</Text>
          <Text style={styles.title}>⬇️ {data?.main.temp_min}°C</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  weather: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  loaderContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  weatherMain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  weatherSub: {
    flex: 1,
  },
  title: { fontSize: 24 },
});

export default Weather;
