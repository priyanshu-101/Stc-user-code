//import { Helmet } from "react-helmet";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import unlike from "../../asset/unlike.svg"
import liked from "../../asset/liked.png"
import InfoCard from "../../components/cards/info";
import Navbar from "../../components/navbar";
import "./styles.scss";
import SynopsisCarousel from "../../components/carousel";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
const baseURL = "http://13.235.49.202:5000/dashboard";

const Dashboard = () => {
  const [data, setdata] = useState(null);
  const [like,setlike] = useState(0);
  const [views, setviews] = useState(0);
  const [aliked,setaliked] = useState(false);
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const likeadd = () =>{
    setlike(like+1);
    setaliked(!aliked);
    fetch(`http://13.235.49.202:5000/api/like/${user.LibraryID}`,{
      headers:{
        authorization: `Bearer ${user.access_token}`
      }
    }).then(response => response.json()).then(response => {if(response.success == false){
      setlike(like-1);
      setaliked(!aliked);
    }}).catch(e =>{
      setlike(like-1);
      // setaliked(!aliked);
    })
  }
  const fetchData = async()=>{
    fetch('http://13.235.49.202:5000/api/count',{
      headers:{
        authorization: `Bearer ${user.access_token}`
      }
    }).then(response => response.json()).then(response => {setdata(response.data[0].COUNT)}).catch(e =>{
        nav('/');
    })
    fetch(`http://13.235.49.202:5000/api/islike/${user.LibraryID}`,{
      headers:{
        authorization: `Bearer ${user.access_token}`
      }
    }).then(response => response.json()).then(response => {
      setaliked(response.aliked);
    }).catch(e =>{
        nav('/');
    })

    fetch(`http://13.235.49.202:5000/api/countlike`,{
      headers:{
        authorization: `Bearer ${user.access_token}`
      }
    }).then(response => response.json()).then(response => {
      setlike(response.count);
    }).catch(e =>{
        nav('/');
    })
    fetch(`http://13.235.49.202:5000/api/views`,{
      headers:{
        authorization: `Bearer ${user.access_token}`
      }
    }).then(response => response.json()).then(response => {
      setviews(response.count);
    }).catch(e =>{
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
            sm="6"
            md="6"
            lg="6"
            xl="6"
            xxl="6"
            id="info-card-col"
          >
            <InfoCard metric={data} title="Reports available" button={true}/>
            <div className="like_Card">
              Likes: {like}
              {aliked ?  <img src={liked} />:<img src={unlike} onClick={()=>{likeadd()}}/>}
              Views: {views}
            </div>
            
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
