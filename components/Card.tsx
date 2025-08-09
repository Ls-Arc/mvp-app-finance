import { View, StyleSheet, Text } from 'react-native'

type Props = {
  color: string;
  label: string;
  labelColor: string;
  onPress: () => void;
};

export default function Card({ color, label, labelColor }: Props) {


  return (
    <>
      <View style={{ backgroundColor: color, ...styles.card }}>
        <View>
          <Text style={{ color: labelColor, ...styles.text }}>{label}</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    zIndex: -1,
    height: 100,
    width: '100%',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 25,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }

})

