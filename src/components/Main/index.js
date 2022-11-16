import './style.scss';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MEDIAQUERIES, ASSETS } from '../../constants';
import Section from '../Section';
import About from '../About';
import useNavbar from '../../hooks/useNavbar';
function Main() {
  const [videoSrc, setVideoSrc] = useState(null);
  const isMobile = useMediaQuery({ query: MEDIAQUERIES.xs });
  const { closeNavbar } = useNavbar();
  useEffect(() => {
    if (isMobile) setVideoSrc(ASSETS.HERO_VIDEO_MOBILE);
    else setVideoSrc(ASSETS.HERO_VIDEO_DESKTOP);
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
      <Section id="about">
        <About></About>
      </Section>
      <Section id="skills"></Section>
      <Section id="projects"></Section>
      <Section id="experience"></Section>
      <Section id="studies"></Section>
      <Section id="contact"></Section>
    </main>
  );
}

export default Main;
