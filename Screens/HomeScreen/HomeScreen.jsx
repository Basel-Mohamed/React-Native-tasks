import React from 'react'
import { SafeAreaView } from 'react-native'
import Home from '../../Components/Home/Home'
import styles from './style'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Home/>
    </SafeAreaView>
  )
}