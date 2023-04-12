import {View, Text, Image, StyleSheet, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import TrackPlayer, {Capability, useProgress} from 'react-native-track-player';
import {SongImage} from './assets';

TrackPlayer.updateOptions({
  capabilities: [
    Capability.Play,
    Capability.Pause,
    Capability.SkipToNext,
    Capability.SkipToPrevious,
  ],
  compactCapabilities: [Capability.Play, Capability.Pause],
});
export const HomePage = () => {
  const progress = useProgress();

  const [currentState, setCurrentState] = useState<'play' | 'pause'>('play');

  const [counter, setCounter] = useState(0);

  const [listOfSongs, setListOfSongs] = useState([]);

  const setupTrackPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(listOfSongs);
    setCounter(0);
  };

  const [currentSong, setCurrentSong] = useState({
    id: '',
    url: '',
    title: '',
    artist: '',
    artwork: '',
  });

  useEffect(() => {
    fetch('https://native-player.onrender.com/songs')
      .then(res => res.json())
      .then(data => {
        const reversedData = data;
        const reqData = JSON.stringify(reversedData);
        const rereqData = JSON.parse(reqData);
        setListOfSongs(rereqData);
        setCurrentSong(rereqData[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (listOfSongs.length) {
      setupTrackPlayer();
    }
  }, [listOfSongs]);

  useEffect(() => {
    setCurrentSong(listOfSongs[counter]);
  }, [counter, listOfSongs]);

  return (
    <View style={styles.container}>
      <Text style={styles.counterStyle}>
        Songs in Playlist : {counter} / {listOfSongs.length - 1}
      </Text>
      <Image source={SongImage} style={styles.SongImage} />
      <View style={styles.SongDetail}>
        <View style={styles.SongTextDetails}>
          <Text style={styles.textStyle}>{currentSong?.title}</Text>
          <Text style={styles.textStyle}>{currentSong?.artist}</Text>
        </View>
      </View>

      {/*  Progress Bar */}
      <View style={styles.progressBar}>
        {/* <Text>{progress.position}</Text>
          <Text>{progress.duration}</Text> */}
        <View
          style={[
            {width: `${(progress.position / progress.duration) * 100}%`},
            styles.currentProgress,
          ]}
        />
      </View>

      <View style={styles.ControlButtons}>
        <Button
          title="Previous"
          color="green"
          onPress={() => {
            TrackPlayer.skipToPrevious();
            setCounter(counter - 1);
          }}
        />

        {currentState === 'play' ? (
          <Button
            title="Play"
            color=""
            onPress={() => {
              setCurrentState('pause');
              TrackPlayer.play();
            }}
          />
        ) : (
          <Button
            title="Pause"
            color=""
            onPress={() => {
              setCurrentState('play');
              TrackPlayer.pause();
            }}
          />
        )}
        <Button
          title="Next"
          color="green"
          onPress={() => {
            if (counter !== listOfSongs.length - 1) {
              setCounter(counter + 1);
              TrackPlayer.skipToNext();
            } else {
              setCounter(0);
              TrackPlayer.reset();
              TrackPlayer.add(listOfSongs);
              setCurrentState('play');
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  ControlButtons: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
  },
  buttonNext: {
    backgroundColor: 'green',
    width: 50,
    padding: 10,
  },
  progressBar: {
    borderRadius: 1,
    backgroundColor: '#e5e5e5',
    width: '100%',
    height: 10,
  },
  currentProgress: {
    height: 10,
    backgroundColor: 'black',
  },
  SongImage: {
    width: 300,
    height: 300,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 14,
    padding: 8,
    color: 'grey',
  },
  buttonStyle: {
    padding: 10,
  },
  LikeButtonStyle: {
    padding: 10,
    margin: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 200,
  },
  ScrollContainer: {
    backgroundColor: 'yellow',
    marginTop: 30,
    padding: 20,
    width: 200,
    borderRadius: 10,
  },
  SongDetail: {
    display: 'flex',
    flexDirection: 'row',
  },
  SongTextDetails: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
