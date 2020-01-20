import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Button, Image, FlatList } from 'react-native'
import { HeaderComponent } from '../components'
import movieData from '../assets/data.json'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
export default class HomeScreen extends Component {
  render () {
    return (
      <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
        <HeaderComponent />
        <Button onPress={() => this.props.navigation.navigate('LoginScreen')} title='LOGOUT' />
        <View style={{ flex: 1, marginHorizontal: 21 }}>
          <FlatList
            horizontal
            data={movieData.results}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={{ marginRight: 18 }} onPress={() => this.props.navigation.navigate('DetailsScreen', { item })}>
                  <View>
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500_and_h282_face/${item.poster_path}`
                      }}
                      style={{ width: 150, height: 220, borderRadius: 16 }}
                      resizeMode='cover'
                    />
                    <Text style={{ fontSize: 12, fontFamily: 'Roboto-Bold', marginTop: 10 }}>{item.title || item.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ color: '#FFA44D', fontFamily: 'Roboto-Regular', fontSize: 12 }}>{item.vote_average}/10</Text>
                      <FontAwesome5 name='star' size={10} color='#FFA44D' />
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        <View style={{ flex: 1, marginHorizontal: 21 }}>
          <Text style={{ marginVertical: 15, fontSize: 17, fontFamily: 'Roboto-Bold', color: '#001F45' }}>Thịnh hành</Text>
          <FlatList
            data={movieData.results}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => this.props.navigation.navigate('DetailsScreen', { item })}>
                  <View style={{ flexDirection: 'row' }}>
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500_and_h282_face/${item.poster_path}`
                      }}
                      style={{ width: 72, height: 89, borderRadius: 8, marginRight: 10 }}
                      resizeMode='cover'
                    />
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                      <Text style={{ fontSize: 14, fontFamily: 'Roboto-Bold' }}>{item.title || item.name}</Text>
                      <Text style={{ fontSize: 12, fontFamily: 'Roboto-Bold', marginVertical: 4 }}>Ngày sản xuất: {item.release_date}</Text>
                      <Text style={{ fontSize: 14, fontFamily: 'Roboto-Light' }} numberOfLines={2}>{item.overview.substring(0, 80)}...</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </View>
    )
  }
}
