import classes from "./Hero.module.css";

function Hero({scrollToMenu}) {
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
      <div className={classes.content}>
        <div className={classes.content_animation}>
          <h1>Order Your Favorite Food!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button onClick={scrollToMenu}>Explore Menu</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
