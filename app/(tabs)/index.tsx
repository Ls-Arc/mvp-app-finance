import { View, StyleSheet, Text } from 'react-native'
import Card from '@/components/Card'
import { styles } from '@/utils/styles'

export default function Index() {


  return (
    <View style={styles.cardContainer}>
      <Card color='purple' label='Ingresos' labelColor='yellow' onPress={() => { }} />
      <Card color='purple' label='Egresos' labelColor='yellow' onPress={() => { }} />
    </View>
  )
}

