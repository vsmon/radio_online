import React, {useState, useEffect} from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import TrackPlayer, { useTrackPlayerEvent, TrackPlayerEvents } from 'react-native-track-player'

export default App = () => {
  const [estado, setEstado] = useState('')
  const [buffer, setBuffer] = useState('')

  
      
  useEffect( ()=>{ 
      const track = {
        id: 'Jovem Pam',
        url: 'https://19293.live.streamtheworld.com/JP_NEWSAAC.aac'
      }
      TrackPlayer.setupPlayer({maxCacheSize:2000}).then( async ()=>{
        await TrackPlayer.add(track)
        let estado = await TrackPlayer.getState()
        let buffer = await TrackPlayer.getBufferedPosition()
        setBuffer(buffer)
        TrackPlayer.addEventListener(event => {
          alert(event.type)
        })
      })
      
    
    },[])
  
     
  const play = () => {
    TrackPlayer.play();
  }
  const stop = () => {
    TrackPlayer.stop();
  }
    return(
      <View style={Styles.principal}>
        <Text style={{paddingBottom:200, fontSize: 25}}>MINHAS RADIOS</Text>
        <Text style={Styles.status}>{buffer}</Text>
        <Text style={Styles.status}>{estado}</Text>
        <TouchableOpacity 
          style={Styles.playButton}
          onPress={play}
        >
          <Text style={Styles.fontButton}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={Styles.stopButton}
          onPress={stop}
        >
          <Text style={Styles.fontButton}>Stop</Text>
        </TouchableOpacity>
      </View>
    )
  }



const Styles = StyleSheet.create({
  principal:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
  playButton:{
    backgroundColor: 'green',
    height: 200,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  }, 
  stopButton:{
    backgroundColor: 'red',
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginTop: 40,
    marginBottom: 30
  }, 
  fontButton:{
    color: 'white',
    fontSize: 24
  },
  status:{
    fontSize: 16,
    marginBottom: 20
  }
})