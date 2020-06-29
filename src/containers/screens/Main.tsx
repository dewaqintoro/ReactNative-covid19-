import React from 'react'
import { View,Text, Button,Image, ScrollView } from 'react-native'
import color from '../../config/constant/color'
import CardInfo from '../../components/cards/CardInfo'
import CardInfoGrid from '../../components/cards/CardInfoGrid'

const MainScreen = () => {
  return(
    <ScrollView style={{backgroundColor: color.black, flex:1}}>
      <View style={{
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between',
        marginHorizontal: 10,
        }}>

      <Image
        style={{width:50, height:50}}
        source={{
          uri:'https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png',
        }}
      />
      <Button onPress={() => console.log('wadudu')} title="dew" >wa</Button>
      </View>
      <View
        style={{backgroundColor: color.blackLight, margin: 10, padding: 20, borderRadius: 10}}>

        <CardInfo color="blue" status="Confirmed" value="1234"/>
        <CardInfo color="green" status="Recovered" value="1233"/>
        <CardInfo color="red" status="Died" value="1"/>

      </View>

      <View
        style={{
          backgroundColor: color.blackLight, 
          margin: 10, 
          paddingVertical: 10, 
          paddingHorizontal:20,
          borderRadius: 10}}>
        <Text style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 28,
          }}>Indonesia</Text>

        <Text 
        style={{
          marginVertical:10,
          textAlign: 'center',
          color: '#fff'
        }}>Last Update Senin</Text>

        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <CardInfoGrid color="teal" status="Confirmed" value="123"/>
          <CardInfoGrid color="green" status="Confirmed" value="123"/>
          <CardInfoGrid color="grey" status="Confirmed" value="123"/>
        </View>
        <Button title="Detail" onPress={() => console.log('detail')}/>
      </View>
    </ScrollView>
  )
}


export default MainScreen