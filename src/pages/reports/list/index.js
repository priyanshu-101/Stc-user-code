import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

import DataTable from "../../../components/data-table";
import Navbar from "../../../components/navbar";
import ReportsSlider from "../../../components/slider";
import accentureLogo from "../../../asset/major/accenture.png";
import capgeminiLogo from "../../../asset/major/capgemini.png";
import cognizantLogo from "../../../asset/major/cognizant.png";
import hclLogo from "../../../asset/major/hcl.png";
import infosysLogo from "../../../asset/major/infosys.png";
import tcsLogo from "../../../asset/major/tcs.png";
import wiproLogo from "../../../asset/major/wipro.png";

import "./styles.scss";
import React, { useEffect } from "react";
import ListService from "./service";
import axios from "axios";

import {useNavigate} from "react-router-dom"

import { useState } from "react";

  
  const ReportList = () => {
    const nav = useNavigate();
    // const user = useSelector(selectUser);
    // console.log(user)
    const columns = [
      {
        title: "#",
        dataIndex: "key",
        key: "key",
        render: (text) => <span>{text}</span>,
      },
      {
        title: "Company",
        dataIndex: "company",
        key: "company",
        render: (text) => <span>{text}</span>,
      },
      {
        title: "Eligibility",
        dataIndex: "eligibility",
        key: "eligibility",
        render: (text) => <span>{text}</span>,
      },
      {
        title: "Profile",
        dataIndex: "profile",
        key: "profile",
        render: (text) => <span>{text}</span>,
      },
      {
        title: "CTC",
        dataIndex: "ctc",
        key: "ctc",
        responsive: ["md"],
        render: (text) => <span>{text}</span>,
      },
      {
        title: "Action",
        responsive: ["lg"],
        render: (text) => (
          <MDBBtn
            className="primary-bg"
            block
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            View <MDBIcon fas icon="angle-right" />
          </MDBBtn>
        ),
      },
    ];
    const [data,setdata] = useState({});
    const [search,setsearch]= useState("");
    const [CTC,setCTC]= useState(0);
    const [division, setdivision]=useState(1);
    const companydiv = ["MAJOR","ELITE","CORE","OTHERS"];
    const user = JSON.parse(localStorage.getItem("user"));
    async function fetchData(){
      if(search == "" && CTC == 0)
      {
        fetch(`http://localhost:5000/api/company/${division}`,{
        headers:{
          authorization: `Bearer ${user.access_token}`
        }}).then(response => response.json()).then(response => {setdata(response.data)})
      }
      else if(CTC == 0){
        fetch(`http://localhost:5000/api/companyNameSearch/${search}`,{
        headers:{
          authorization: `Bearer ${user.access_token}`
        }}).then(response => response.json()).then(response => {setdata(response.data)})
      }
      else if(CTC > 0)
      {
        fetch(`http://localhost:5000/api/companyCTCSearch/${CTC}`,{
        headers:{
          authorization: `Bearer ${user.access_token}`
        }}).then(response => response.json()).then(response => {setdata(response.data)})
      }
      
    }
    useEffect(async() => {
      
      // if(!user){
      //  nav("/")
      // }
      //setdivision(1);
      await fetchData();
      
      return () => {
        setdata({});
      }
     }, [division,search,CTC])
    
    
    const images = [
      {
        src: accentureLogo,
        caption: "Accenture",
        showCaption: false,
      },
      {
        src: capgeminiLogo,
        caption: "Capgemini",
        showCaption: false,
      },
      {
        src: cognizantLogo,
        caption: "Cognizant",
        showCaption: false,
      },
      {
        src: hclLogo,
        caption: "HCL",
        showCaption: false,
      },
      {
        src: infosysLogo,
        caption: "Infosys",
        showCaption: false,
      },
      {
        src: tcsLogo,
        caption: "TCS",
        showCaption: false,
      },
      {
        src: wiproLogo,
        caption: "Wipro",
        showCaption: false,
      },
    ];

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
              id="slider-col"
            >
              <ReportsSlider images={images} />
            </MDBCol>
          </MDBRow>
          <div className="d-flex justify-content-around">
            <div
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              xxl="12"
              id="reports-col"
              onClick = {()=> {
                setsearch("");
                setCTC(0);
                setdivision(1);
              }}
            >
              MAJOR
            </div>
            <div
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              xxl="12"
              id="reports-col"
              onClick = {()=> {
                setsearch("");
                setCTC(0);
                setdivision(2);
              }}
            >
              ELITE
            </div>
            <div
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              xxl="12"
              id="reports-col"
              onClick = {()=> {
                setsearch("");
                setCTC(0);
                setdivision(3);
              }}
            >
             CORE
            </div>
            <div
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              xxl="12"
              id="reports-col"
              onClick = {()=> {
                setsearch("");
                setCTC(0);
                setdivision(4);
              }}
            >
              OTHERS
            </div>
          </div>
          <MDBRow className="reports-row">
            <MDBCol
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              xxl="12"
              id="reports-table-col"
              className="d-grid gap-3"
            >
              <div className="info_filter">
              {search=="" && CTC == 0 ? <span className="table-header">{companydiv[division-1]}</span>: null}
              <div className="filter">
              <input type="text" placeholder="Search Company" onChange={(e)=>{setCTC(0); setsearch(e.target.value)}} value={search}/>
              <input type="Number" placeholder="Search BY CTC" onChange={(e)=>{setsearch("") ; setCTC(e.target.value)}} value={CTC>0 && CTC}/>
              </div>
              </div>
              {/* <span className="table-header">sdf,{console.log(companydiv[division-1])}</span> */}
              <DataTable rows={data} columns={columns} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>

    )
  }

  
  export default ReportList;