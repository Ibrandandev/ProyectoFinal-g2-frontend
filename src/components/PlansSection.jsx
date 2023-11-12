import "../css/home-section.css"

const PlansSection = () => {
  return (
    <section className="container mt-5">
      <h2 className="text-center">Plans</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fs-3">Plan Total</h5>
                <hr />
                <p className="card-text fs-5 text-center py-2">
                  $<span>10,000</span>/mes
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
              <div className="card-body">
                <a href="#" className="btn btn-primary w-75 mx-auto d-block">
                  Asociate
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fs-3">Plan Total</h5>
                <hr />
                <p className="card-text fs-5 text-center py-2">
                  $<span>10,000</span>/mes
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
              <div className="card-body">
                <a href="#" className="btn btn-primary w-75 mx-auto d-block">
                  Asociate
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fs-3">Plan Total</h5>
                <hr />
                <p className="card-text fs-5 text-center py-2">
                  $<span>10,000</span>/mes
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
              <div className="card-body">
                <a href="#" className="btn btn-primary w-75 mx-auto d-block">
                  Asociate
                </a>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default PlansSection;
