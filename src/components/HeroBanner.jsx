import HeroBannerImage from "../assets/images/banner.png"

const HeroBanner = () => {
  return (
    <div>
      Fitness Craze Sweat, Smile <br /> & Repeat. Check out the most effective
      exercises
      <a href="#exercises">Explore Exercises</a>
      <div
        className="opacity-10"
        // sx={{
        //   opacity: 0.1,
        //   display: { lg: "block", xs: "none" },
        //   fontWeight: 600,
        //   fontSize: 200,
        // }}
      >
        Exercises
      </div>
      <img src={HeroBannerImage} alt="" className="hero-banner-img" />
    </div>
  )
}

export default HeroBanner
