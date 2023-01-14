import { MDBSpinner, MDBBtn } from "mdb-react-ui-kit";

import "./styles.scss";

const loading = (
  <div className="page-center">
    <MDBBtn className="spinner-btn" disabled>
      <MDBSpinner size="lg" role="status" tag="span" className="spinner me-2" />
      Loading...
    </MDBBtn>
  </div>
);

export default loading;
