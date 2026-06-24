import { StyleSheet } from "react-native";
import { Colors } from "../../../constant/colors";

export const style = StyleSheet.create({
  homeContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 16,
    gap: 12
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  smallText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.GRAY
  }
})