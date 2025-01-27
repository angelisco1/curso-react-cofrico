import React, { useEffect, useRef, useState } from 'react'
import CmpConFragments from './CmpConFragments'
import Video from '@public/video.mp4'

const playVideo = (videoRef) => {
  videoRef.current.play()
}

const Ej09FragmentsYUseRef = () => {
  const videoRef = useRef(null)
  const [volume, setVolume] = useState(0)

  // const playVideo = () => {
  //   videoRef.current.play()
  // }

  useEffect(() => {
    videoRef.current.volume = volume / 100
  }, [volume])

  return (
    <div>
      <h2>Tema 9 - Fragments y useRef</h2>

      <video src={Video} width={150} ref={videoRef}></video>

      {/* <button type="button" onClick={() => videoRef.current.play()}>Play</button> */}
      {/* <button type="button" onClick={playVideo}>Play</button> */}
      <button type="button" onClick={() => playVideo(videoRef)}>Play</button>
      <button type="button" onClick={() => videoRef.current.pause()}>Pause</button>
      <input type="range" onInput={(event) => setVolume(event.target.value)} value={volume} min={0} max={100} />

      <CmpConFragments />
    </div>
  )
}

export default Ej09FragmentsYUseRef