import classes from "./Hero.module.css";

function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes.overlay}></div>
      <video
        playsInline="playsinline"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
        loading="lazy"
        className={classes.hero_video}
      >
        <source src="src/assets/food_video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Hero;
