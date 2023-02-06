import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { getTheme } from 'react-native-paper/lib/typescript/core/theming';
import styled from 'styled-components/native';

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const borderRadius = '16px'
const SimpleContainerView = styled.View`
background-color: ${props => props.backgroundColor || null};
border-radius: ${props => props.borderRadius || 0};
height: ${props => props.height ? `${props.height}px` : '100%'};
width: ${props => props.width ? `${props.width}px` :  '100%' };
margin : 10px;
`;

export const SimpleContainer = (props) => {
  return (
    <SimpleContainerView 
    style = {props.style}
    borderRadius={props.borderRadius}
    height= {props.height}
    width= {props.width}
    backgroundColor={props.backgroundColor}
    >
    {props.children}
    </SimpleContainerView>
  )
}


export const RoundBorderCard = (props) => {
  if(props.xSmall){
    const width = Math.floor(windowWidth/5);
    const height = width+8;
  return(
    <SimpleContainer style={props.style} backgroundColor= '#ffffff'  height={height} width={width} borderRadius ={borderRadius} >
    {props.children}
    </SimpleContainer>
  )
}else if(props.small){
  const width = Math.floor(windowWidth/3);
  return(
    <SimpleContainer style={props.style} backgroundColor= '#ffffff'  height={width} width={width} borderRadius ={borderRadius} >
    {props.children}
    </SimpleContainer>
  )
}else if(props.medium){
  const width = Math.floor(windowWidth-60);
  const height = Math.floor(windowHeight/4);
  return(
    <SimpleContainer style={props.style} backgroundColor= '#ffffff'  height={height} width={width} borderRadius ={borderRadius} >
    {props.children}
    </SimpleContainer>
  )
}else if(props.large){
  const width = Math.floor(windowWidth/2);
  return(
    <SimpleContainer style={props.style} backgroundColor= '#ffffff'  height={width} width={width} borderRadius ={borderRadius} >
    {props.children}
    </SimpleContainer>
  )
} else if(props.xLarge){
  const height = Math.floor(windowHeight/2);
  return(
    <SimpleContainer style={props.style} backgroundColor= '#ffffff'  height={height}  width={windowWidth-40} borderRadius ={borderRadius} >
    {props.children}
    </SimpleContainer>
  )
} 
else{
  return(

    <SimpleContainer style={props.style} backgroundColor= '#ffffff'  height={props.height}  width={props.width} borderRadius ={props.borderRadius ? props.borderRadius : borderRadius} >
    {props.children}
    </SimpleContainer>
  )
}

}
