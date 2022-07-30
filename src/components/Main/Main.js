import './Main.scss';
import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { MEDIAQUERIES } from '../../constants';

function Main() {
  const [videoSrc, setVideoSrc] = useState('movil-video.mp4');
  const isMobile = useMediaQuery(MEDIAQUERIES.xs);
  useEffect(() => {
    if (isMobile) setVideoSrc('movil-video.mp4');
    else setVideoSrc('video.mp4');
  }, [isMobile]);
  return (
    <main data-component="Main">
      <section className="page-section">
        <video
          className="hero-video"
          autoPlay={true}
          muted={true}
          type="video/mp4"
          src={videoSrc}
        ></video>
      </section>
      <section className="page-section" id="about"></section>
      <section className="page-section" id="skills"></section>
      <section className="page-section" id="projects"></section>
      <section className="page-section" id="experience"></section>
      <section className="page-section" id="studies"></section>
      <section className="page-section" id="contact"></section>
    </main>
  );
}

export default Main;
