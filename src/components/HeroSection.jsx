import "../css/hero.css";

const HeroSection = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://thefitnesslocker.co.uk/wp-content/uploads/2022/07/1920-x-600-Fitness-locker-1.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Cambia tu vida de la mano de RollingGym</h5>
            <p className="w-50 mx-auto">
              Comprometidos en desarrollar el bienestar de nuestra comunidad a
              traves del equipamiento mas moderno y la mas variada oferta de
              clases, para que nadie se quede afuera!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://thefitnesslocker.co.uk/wp-content/uploads/2022/07/1920-x-600-Fitness-locker-3.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Conoce nuestros servicios</h5>
            <p>Zumba, Spinning, Treking entre los más populares</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://thefitnesslocker.co.uk/wp-content/uploads/2022/07/1920-x-600-Fitness-locker-5.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Reserva ahora tu proxima clase</h5>
            <p>Hazlo las 24hs, estaremos atentos a tus consultas</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default HeroSection;
