import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  Event,
} from 'react-native-track-player';

export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
        Capability.SetRating,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
      ],
      progressUpdateEventInterval: 2,
    });

    isSetup = true;
  } finally {
    return isSetup;
  }
}

export async function addTracks() {
  await TrackPlayer.add([
    {
      id: '1',
      url: require('./../assets/mp3/aminBani.mp3'),
      title: 'sharhrzad',
      artist: 'aminbani',
      duration: 280,
    },
    {
      id: '2',
      url: require('./../assets/mp3/sound.mp3'),
      title: 'phone ring',
      artist: 'no body',
      duration: 60,
    },
  ]);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

export async function playbackService() {
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());
  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
  TrackPlayer.addEventListener(Event.RemoteNext, () =>
    TrackPlayer.skipToNext(),
  );
  TrackPlayer.addEventListener(Event.RemotePrevious, () =>
    TrackPlayer.skipToPrevious(),
  );
  TrackPlayer.addEventListener(Event.RemoteDuck, () =>
    console.info('RemoteDuck'),
  );
  TrackPlayer.addEventListener(Event.RemoteSeek, () =>
    console.info('RemoteSeek'),
  );
  TrackPlayer.addEventListener(Event.RemoteSeek, () =>
    console.info('RemoteSeek'),
  );
  // TrackPlayer.addEventListener(Event.PlaybackProgressUpdated, (e, b) =>
  // console.info('PlaybackProgressUpdated', 'd', e, b),
  // );
}
