import React from 'react'
import { View, Button, Text } from 'react-native'
import color from '../../../config/constant/color'
import CardInfoGrid from '../../../components/cards/CardInfoGrid'
import CardInfo from '../../../components/cards/CardInfo'

const CardGlobal = () => {
  return (
    <View
      style={{backgroundColor: color.blackLight, 
      margin: 10, 
      padding: 20, 
      borderRadius: 10
      }}>

      <CardInfo color="blue" status="Confirmed" value="1234"/>
      <CardInfo color="green" status="Recovered" value="1233"/>
      <CardInfo color="red" status="Died" value="1"/>

    </View>
  )
}

export default CardGlobal