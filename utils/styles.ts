import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    overflow: 'hidden',
    zIndex: 10,
    position: 'relative',
    margin: 10,
    marginTop: 40,
    paddingTop: 20,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    gap: 10,
    top: 10,
    borderRadius: 25,
    borderColor: '#f2f2f2',
    borderWidth: 2,
    height: 500,
    backgroundColor: 'white',
  },
  circleButton: {
    position: 'absolute',
    bottom: 10,
    right: -50
  }
})
