import "../css/review-section.css";

const ReviewsSection = () => {
  return (
    <section className="container">
      <h2 className="text-center">Reviews</h2>
      <section
        id="carouselExampleFade"
        className="carousel slide carousel-dark w-100 mx-auto"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card-group mx-auto">
              <article className="card">
                <div className="card-body">
                  <div className="card-top d-flex gap-3 align-items-center mb-3">
                    <img
                      src="https://mi.econ.uba.ar/assets/images/user-avatar-empty.png"
                      alt=""
                      className="rounded rounded-circle user-img"
                    />
                    <h5 className="card-title mb-0">User</h5>
                  </div>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                    excepturi!
                  </p>
                  <div className="card-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                </div>
              </article>
              <article className="card">
                <div className="card-body">
                  <div className="card-top d-flex gap-3 align-items-center mb-3">
                    <img
                      src="https://mi.econ.uba.ar/assets/images/user-avatar-empty.png"
                      alt=""
                      className="rounded rounded-circle user-img"
                    />
                    <h5 className="card-title mb-0">User</h5>
                  </div>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, delectus!
                  </p>
                  <div className="card-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                </div>
              </article>
              <article className="card">
                <div className="card-body">
                  <div className="card-top d-flex gap-3 align-items-center mb-3">
                    <img
                      src="https://mi.econ.uba.ar/assets/images/user-avatar-empty.png"
                      alt=""
                      className="rounded rounded-circle user-img"
                    />
                    <h5 className="card-title mb-0">User</h5>
                  </div>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, adipisci!
                  </p>
                  <div className="card-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-group mx-auto">
              <article className="card">
                <div className="card-body">
                  <div className="card-top d-flex gap-3 align-items-center mb-3">
                    <img
                      src="https://mi.econ.uba.ar/assets/images/user-avatar-empty.png"
                      alt=""
                      className="rounded rounded-circle user-img"
                    />
                    <h5 className="card-title mb-0">User</h5>
                  </div>
                  <p className="card-text">
                    Gracias por la informacion. La pagina es excelente
                  </p>
                  <div className="card-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                </div>
              </article>
              <article className="card">
                <div className="card-body">
                  <div className="card-top d-flex gap-3 align-items-center mb-3">
                    <img
                      src="https://mi.econ.uba.ar/assets/images/user-avatar-empty.png"
                      alt=""
                      className="rounded rounded-circle user-img"
                    />
                    <h5 className="card-title mb-0">User</h5>
                  </div>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, quos!
                  </p>
                  <div className="card-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                </div>
              </article>
              <article className="card">
                <div className="card-body">
                  <div className="card-top d-flex gap-3 align-items-center mb-3">
                    <img
                      src="https://mi.econ.uba.ar/assets/images/user-avatar-empty.png"
                      alt=""
                      className="rounded rounded-circle user-img"
                    />
                    <h5 className="card-title mb-0">User</h5>
                  </div>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, deleniti?
                  </p>
                  <div className="card-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev d-none d-lg-flex"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next d-none d-lg-flex"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>

        <section className="form-review d-flex flex-column flex-lg-row gap-3 mx-auto mt-3">
          <div className="group">
            <label htmlFor="customRange3" className="form-label">
              Nombre de Usuario
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="group">
            <label htmlFor="customRange3" className="form-label">
              Valoracion
            </label>
            <input
              type="range"
              className="form-range mt-2"
              min="0"
              max="5"
              step="1"
              id="customRange3"
            />
          </div>
        </section>
        <section className="form-floating form-review mx-auto mt-3">
          <textarea className="form-control" id="textarea"></textarea>
          <label htmlFor="textarea">Agregar Nuevo comentario</label>
        </section>
      </section>
    </section>
  );
};

export default ReviewsSection;
