const Mapa = () => {
  return (
    <section className="container pb-4">
      <h2 className="text-center text-orange">Ubicación</h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7120.165881301701!2d-65.21429730184951!3d-26.837314158017158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses!2sar!4v1699854269358!5m2!1ses!2sar"
            allowFullScreen=""
            className="w-100 mapa border-orange"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Mapa;
