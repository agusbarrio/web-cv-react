import './Main.scss';
import { useState, useEffect, useContext } from 'react';
import { useMediaQuery } from '@mui/material';
import { MEDIAQUERIES } from '../../constants';
import NavbarContext from '../../contexts/NavbarContext';
import Section from '../Section';
function Main() {
  const [videoSrc, setVideoSrc] = useState(null);
  const isMobile = useMediaQuery(MEDIAQUERIES.xs);
  const { closeNavbar } = useContext(NavbarContext);
  useEffect(() => {
    if (isMobile) setVideoSrc('movil-video.mp4');
    else setVideoSrc('video.mp4');
  }, [isMobile]);
  return (
    <main data-component="Main" onClick={closeNavbar}>
      <section className="hero-video-section">
        <video
          className="hero-video"
          autoPlay={true}
          muted={true}
          type="video/mp4"
          src={videoSrc}
        ></video>
      </section>
      <Section id="about"></Section>
      <Section id="skills"></Section>
      <Section id="projects"></Section>
      <Section id="experience"></Section>
      <Section id="studies"></Section>
      <Section id="contact"></Section>
    </main>
  );
}

export default Main;
