import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

import LoginForm from "../../components/forms/login";
import stcLogo from "../../asset/stc-logo.png";
import info_logo from "../../asset/info_logo.png";
import cancel from "../../asset/cancel.png";
import kietLogo from "../../asset/kiet-logo.png";

import "./styles.scss";
import { useState } from "react";

const Login = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="primary-bg  form-container">
      <img className="stclogo" src={stcLogo} />

      <div className="primary-bg  m-auto">
        <LoginForm />
      </div>
      <img className="stclogo" src={kietLogo} />
      <div className="info_toggle" onClick={() => settoggle(!toggle)}>
        {toggle ? <img src={cancel} /> : <div>DISCLAIMER</div>}
      </div>
      <div className={`info ${toggle && "info_display"}`}>
        {toggle && (
          <div>
            <h4>Disclaimer</h4>
            <br />
            <p>
              <ol>
                <li>
                  The STC (Student Training Coordinators) portal is designed to
                  provide a platform for college students to share information
                  and experiences related to recruitment processes at various
                  companies. The portal features information and interview
                  experiences shared by students who have undergone the
                  recruitment process at these companies.
                  <br />
                </li>
                <li>
                  While the STC club and KIET Group of Institutions, Ghaziabad
                  strive to ensure that the information provided on the portal
                  is accurate and up-to-date, we cannot guarantee the
                  completeness or accuracy of the information shared by
                  students. The experiences and opinions shared by students on
                  the portal are their own and do not necessarily reflect the
                  views of the STC club, KIET Group of Institutions, Ghaziabad,
                  or the companies featured on the portal.
                  <br />
                </li>
                <li>
                  The information and interview experiences shared on the STC
                  portal should not be taken as definitive or exhaustive
                  representations of the companies or their recruitment
                  practices. The STC club and KIET Group of Institutions,
                  Ghaziabad bear no responsibility for the accuracy or
                  completeness of the information provided on the portal, and do
                  not endorse or recommend any particular company or recruitment
                  process.
                  <br />
                </li>
                <li>
                  The STC portal is intended to provide a helpful resource for
                  college students as they navigate the recruitment process. We
                  encourage students to use the information on the portal as a
                  starting point for their own research and to seek out
                  additional sources of information about the companies and
                  recruitment processes that interest them.
                  <br />
                </li>
                <li>
                  In summary, the STC portal is a platform for sharing
                  information and experiences related to recruitment processes
                  at various companies, but the information provided should be
                  used as a guide and not taken as definitive. The STC club and
                  KIET Group of Institutions, Ghaziabad are not responsible for
                  the accuracy or completeness of the information provided on
                  the portal, and do not endorse or recommend any particular
                  company or recruitment process.
                </li>
              </ol>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
