import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
import { map } from "lodash";
import { Image, AirbnbRating } from "@rneui/base";
export default function HouseDetail(props) {
  const {
    route: { params },
  } = props;
  const { images, title, description, price, rating } = params;
  console.log("HouseDetail", props);
  console.log("title", title);
  //cambiar nombre de la cabecera
  props.navigation.setOptions({ title: title });

  return (
    <View style={styles.container}>
      <PagerView style={{ height: 256 }}>
        {map(images, (item) => (
          <View key={item}>
            <Image
              source={{ uri: item }}
              style={{ width: "100%", height: 256 }}
            />
          </View>
        ))}
      </PagerView>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 8,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{title}</Text>
        <View style={{ flexDirection: "column" }}>
          <AirbnbRating
            count={5}
            defaultRating={rating}
            size={8}
            showRating={false}
            isDisabled
          />
          <Text style={{color: 'green'}}>${price}</Text>
        </View>
      </View>
      <Text style={{ fontSize: 14, color: "gray", marginHorizontal: 8 }}>
        {description}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
