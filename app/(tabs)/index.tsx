import { View, StyleSheet, Text } from 'react-native'
import Card from '@/components/Card'
import CircleButton from '@/components/CircleButton'

export default function Index() {


  return (
    <View style={styles.cardContainer}>
      <Card color='purple' label='Ingresos' labelColor='yellow' onPress={() => { }} />
      <Card color='purple' label='Egresos' labelColor='yellow' onPress={() => { }} />
      <Card color='purple' label='Metas' labelColor='yellow' onPress={() => { }} />
      <CircleButton customStyle={styles.circleButton} onPress={() => { }} />
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    overflow: 'hidden',
    zIndex: 10,
    position: 'relative',
    margin: 10,
    paddingTop: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    gap: 10,
    top: 10,
    borderRadius: 25,
    borderColor: 'blue',
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
