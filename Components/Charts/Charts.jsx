import { View} from 'react-native'
import React from 'react'
import ExcuseHoursChart from '../ExcuseHoursChart/ExcuseHoursChart'
import LocationChart from '../LocationChart/LocationChart'
import BusinessTripChart from '../BusinessTripChart/BusinessTripChart'
import styles from './style'

export default function Charts() {
  return (
    <View style={styles.container} >
        <ExcuseHoursChart/>
        <View style={styles.containerRightSection}>
        <LocationChart/>
        <BusinessTripChart/>
        </View>
    </View>
  )
}