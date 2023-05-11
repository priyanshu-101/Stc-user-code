import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import Navbar from "../../../components/navbar";
import CompanyDetails from "../../../components/company-details";
import CompanyReports from "../../../components/company-reports";
import tcsLogo from "../../../asset/major/tcs.png";
import "./styles.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

const ReportList = () => {
      const nav = useNavigate();
      const details = {
        logo: {
          src: tcsLogo,
          caption: "TCS"
        }
      }
      const {id} = useParams();
      let response;
       
      const check = () =>{
        //console.log(data)
      }
      return (
        <>
          <Navbar />
          <MDBContainer fluid className="pb-4 bg-light">
            <MDBRow className="pt-3">
              <MDBCol xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
                <MDBBtn id="btn" onClick={()=>nav("/reports")}>
                  <MDBIcon fas icon="angle-left" /> Back to Report Listing
                </MDBBtn>
              </MDBCol>
            </MDBRow>
            <MDBRow className="details-row">
              <MDBCol
                xs="12"
                sm="12"
                md="12"
                lg="12"
                xl="12"
                xxl="12"
                id="details-col"
                className="d-grid gap-3"
              >
                <CompanyDetails details={details} />
              </MDBCol>
            </MDBRow>
            <MDBRow className="details-row">
              <MDBCol
                xs="12"
                sm="12"
                md="12"
                lg="12"
                xl="12"
                xxl="12"
                id="details-col"
                className="d-grid gap-3"
              >
                <CompanyReports id = {id}/>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
                <MDBBtn id="btn" onClick={()=>nav("/reports")}>
                  <MDBIcon fas icon="angle-left" /> Back to Report Listing
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </>
      );
    }

export default ReportList;
