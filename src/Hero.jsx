import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            magnam deleniti dignissimos consectetur voluptatum debitis quasi vel
            laborum totam, praesentium sint repudiandae vitae accusamus? Earum
            esse optio nostrum laborum ad!
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
