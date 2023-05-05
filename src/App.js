import "./App.css";
import "./movies.js";

const HeroImage = () => {
  const styles = {
    backgroundImage:
      'url("https://www.pngkit.com/png/full/316-3163594_onlinelabels-clip-art-movie-tape-roll-of-film.png")',
    backgroundSize: "cover",
    height: "365px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textShadow: "2px 2px #500",
    textAlign: "center",
  };
  return (
    <div style={styles}>
      <h1 class="title">Disney Movie Reviews</h1>
    </div>
  );
};
//hero image at the top of the page with the page title

export default HeroImage;
