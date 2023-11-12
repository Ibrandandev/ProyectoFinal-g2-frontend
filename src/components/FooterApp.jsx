import GoogleMap from "./GoogleMap";

const FooterApp = () => {
  return (
    <div className="bg-blue container-fluid pt-3">
      <GoogleMap />
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 border-top mx-xl-5">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1 ">
            <span className="mb-3 mb-md-0 text-orange">© 2023 Rolling GYM</span>
          </a>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="" href="#">
              <i className="fa fa-instagram text-orange" aria-hidden="true"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="" href="#">
              <i className="fa fa-facebook text-orange" aria-hidden="true"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="" href="#">
              <i className="fa fa-twitter text-orange" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default FooterApp;
