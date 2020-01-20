import React, { Component } from 'react'
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import movieData from '../assets/data.json'

export default class DetailsScreen extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { params } = this.props.navigation.state
    const item = params ? params.item : null
    // console.log(item.id)
    return (
      <View style={{ flex: 1, marginHorizontal: 21, marginVertical: 12 }}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500_and_h282_face/${item.poster_path}`
              }}
              style={{ width: 150, height: 220, borderRadius: 16 }}
              resizeMode='cover'
            />
            <Text style={{ fontSize: 24, fontFamily: 'Roboto-Bold', marginLeft: 15 }}>{item.title || item.name}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#FFA44D', fontFamily: 'Roboto-Regular', fontSize: 16 }}>{item.vote_average}/10</Text>
            <FontAwesome5 name='star' size={14} color='#FFA44D' />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 18, fontFamily: 'Roboto-Bold' }}>{item.title || item.name}</Text>
            <Text style={{ fontSize: 16, fontFamily: 'Roboto-Bold', marginVertical: 4 }}>Ngày sản xuất: {item.release_date}</Text>
            <Text style={{ fontSize: 18, fontFamily: 'Roboto-Light' }} numberOfLines={10}><Text style={{ fontSize: 16, fontFamily: 'Roboto-Bold' }}>Nội dung phim: </Text>{item.overview}</Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 16, fontFamily: 'Roboto-Bold', marginTop: 14 }}>Phim đang hot:</Text>
          <FlatList
            horizontal
            data={movieData.results}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={{ marginRight: 18, marginTop: 0 }} onPress={() => this.props.navigation.navigate('DetailsScreen', { item })}>
                  <View>
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500_and_h282_face/${item.poster_path}`
                      }}
                      style={{ width: 70, height: 80, borderRadius: 16 }}
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
      </View>
    )
  }
}
