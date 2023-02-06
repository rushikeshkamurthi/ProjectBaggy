import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { RoundBorderCard, SimpleContainer } from '../../common/components/containers'

const Landing = () => {
  return (
    <ScrollView>
    <SimpleContainer >
    <ScrollView horizontal >
    <RoundBorderCard xSmall/><RoundBorderCard xSmall/><RoundBorderCard xSmall/><RoundBorderCard xSmall/><RoundBorderCard xSmall/><RoundBorderCard xSmall/>
    </ScrollView>
    <ScrollView horizontal >
    <RoundBorderCard medium/><RoundBorderCard medium/><RoundBorderCard medium/>
    </ScrollView>
    <Text style={{fontSize : 24,fontWeight: 'bold', alignSelf : 'center' }}> - - - DISCOVER BAGGY - - - </Text>
    <RoundBorderCard xLarge/>
    <RoundBorderCard xLarge/>
    </SimpleContainer>
    </ScrollView>
  )
}

export default Landing