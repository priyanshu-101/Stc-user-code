//import { Helmet } from "react-helmet";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

import InfoCard from "../../components/cards/info";
import Navbar from "../../components/navbar";
import "./styles.scss";
import SynopsisCarousel from "../../components/carousel";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
const baseURL = "http://localhost:5000/dashboard";

const Dashboard = () => {
  const [data, setdata] = useState(null);

  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const fetchData = async()=>{
    //console.log(user);
    // console.log("d",user.access_token)
    fetch('http://localhost:5000/api/count',{
      headers:{
        authorization: `Bearer ${user.access_token}`
      }
    }).then(response => response.json()).then(response => {setdata(response.data[0].COUNT)}).catch(e =>{
        nav('/');
    })
  }
  useEffect(async () => {
  //  console.log("C",user.user.access_token)
   //console.log(user.access_token)
   if(!user){
    nav('/');
   }
   await fetchData();
   return () => {
     setdata(null);
   }
  }, [])
  
  
  return (
    <>
      <Navbar />
      <MDBContainer fluid className="pb-4 bg-light">
        <MDBRow>
          <MDBCol
            xs="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
            xxl="12"
            id="info-user-col"
          >
            Welcome {user.LibraryID}
            <hr className="info-user-col-divider" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol
            xs="12"
            sm="4"
            md="4"
            lg="4"
            xl="4"
            xxl="4"
            id="info-card-col"
          >
            <InfoCard metric={data} title="Reports available" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol
            xs="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
            xxl="12"
            id="info-synopsis-header"
          >
            Placement Synopsis
            <hr className="info-user-col-divider" />
          </MDBCol>
        </MDBRow>
        <MDBRow id="info-synopsis-col">
          <MDBCol xs="12" sm="12" md="12" lg="12" xl="6" xxl="6">
            <SynopsisCarousel />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Dashboard;
