import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

import "./styles.scss";

const Info = ({ metric = 0, title = "Title" }) => {
  return (
    <>
      <MDBCard className="info-card primary-bg text-white">
        <MDBCardBody className="card-body">
          <div className="card-text">
            <MDBCardTitle className="card-text-title">{metric}</MDBCardTitle>
            <MDBCardText className="card-text-description">{title}</MDBCardText>
          </div>
          <div className="card-action">
            <MDBBtn className="card-action-btn" href="/reports">
              View Reports <MDBIcon fas icon="angle-right" />
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>

      <br />
    </>
  );
};

export default Info;
