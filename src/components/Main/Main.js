import './Main.scss';
import { useState, useEffect, useContext } from 'react';
import { useMediaQuery } from '@mui/material';
import { MEDIAQUERIES } from '../../constants';
import NavbarContext from '../../contexts/NavbarContext';
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
      <section className="page-section">
        <video
          className="hero-video"
          autoPlay={true}
          muted={true}
          type="video/mp4"
          src={videoSrc}
        ></video>
      </section>
      <section className="page-section" id="about">
        <article className="card-section"></article>
      </section>
      <section className="page-section" id="skills">
        <article className="card-section"></article>
      </section>
      <section className="page-section" id="projects">
        <article className="card-section"></article>
      </section>
      <section className="page-section" id="experience">
        <article className="card-section"></article>
      </section>
      <section className="page-section" id="studies">
        <article className="card-section"></article>
      </section>
      <section className="page-section" id="contact">
        <article className="card-section"></article>
      </section>
    </main>
  );
}

export default Main;
