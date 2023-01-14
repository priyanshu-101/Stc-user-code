import { MDBContainer, MDBCol, MDBTypography } from 'mdb-react-ui-kit';
import React from 'react';
import Navbar from '../../components/navbar';
import stcLogo from '../../asset/stc-logo.png';
import kietLogo from '../../asset/kiet-logo.png';
import Objective from '../../asset/objective.svg';
import aboutimg from '../../asset/about.svg';
import groupimg from "../../asset/group-img.jpg"
import bgimg from "../../asset/bgimage.jpg"
import './styles.scss';
const About = () => {
	return (
		<>
			<Navbar />
			<MDBContainer className='background'>
				<MDBCol className="info-section primary-text bg-light background">
					<div className="info-container">
						<div className="brand-logo d-flex justify-content-between">
							<img src={stcLogo} alt="stc-logo" />
							<MDBTypography className="fs-5 fw-bolder mt-3">
								CONNECTX | Student Training Coordinator
							</MDBTypography>
							<img src={kietLogo} alt="kiet-logo" />
						</div>
            </div>
						<hr className="info-container-divider" />
					
          <img src={groupimg} className="groupimg" alt="stc-logo" />
          <MDBTypography className="fs-3 fw-bolder mt-5 heading">
								About US
							</MDBTypography>
					
					<div className="info-child-about bg-transparent">
						<p className='bg-transparent'>
							STC is a unique initiative by the students of the KIET Group of
							Institutions under the guidance of the department of Humanities &
							Social Sciences & Corporate Relations & Placement Cell. It gives
							first hand information about the various companies that recurit
							from KIET and enhances the understanding of the placement process.
							The portal is based on the experience of placed students and the
							guidance of Soft Skills Faculty members.
						</p>
						<p className='bg-transparent'>
							The students appearing for placement drives often get confused
							about what to prepare, how much to prepare and how to prepare for
							a particular company. Thus, in order to provide them one platform
							for the same on the basis of the experience of their placed
							seniors, the Department of Humanities & Social Sciences has come
							out with this unique initiative of the CONNECTX Portal developed
							by STCs (Student Training Co-ordinators) wherein the STCs will
							collect the experience of placed students and convert it into
							proper company wise reports by uploading it on the CONNECTX
							Portal. The forthcoming batches can access this Portal in order to
							prepare themselves for the upcoming drives.
						</p>
					</div>

					<MDBTypography className="fs-3 fw-bolder mt-5 heading">
								Objective
							</MDBTypography>
					<div className="info-child-about bg-transparent">
          <ol>
              <li>
                Developing the students to meet the needs of the corporate
                world and their recruitment process.
              </li>
              <li>
                Motivate students to develop domain skills and soft skills
                in terms of career planning, goal setting.
              </li>
              <li>
                To motivate students to aspire for dream companies such as
                Adobe, Amazon, Byju's, Jaro Education, Kronos, HUL etc.
              </li>
              <li>
                Aiming to inspire maximum number of students to gain apt
                employment in companies like TCS, Wipro, Capgemeni,
                Cognizant, Tech Mahindra, Accenture, HCL, Infosys etc.
              </li>
              <li>
                For this our technical team has designed and developed a
                user-friendly portal through which any registered student
                can go through the content and prepare according to the
                demands of company.
              </li>
            </ol>
					</div>
				</MDBCol>
        <MDBTypography className="fs-2 fw-bolder heading d-flex justify-content-center">
            Meet Our Team
          </MDBTypography>

          


{/* <div className='list-group'>
    <div className='align-items-center'>
    <img className="profile-img rounded-circle" src={stcLogo} alt="bg-login"  />  
      <div className='profile'>
        <b><p >Ms. Puja Rohatgi</p></b>
        <p >Additional HOD: Humanities &Social Sciences</p>
      </div>
    </div>
    
  

    <div className='align-items-center'>
    <img className="profile-img rounded-circle" src={stcLogo} alt="bg-login"  />  
      <div className='profile align-items-center'>
        <b><p >Dr. Meetu Kumar</p></b>
        <p >Assistant professor: Humanities &Social Sciences</p>
      </div>
  </div>
  

    <div className='align-items-center'>
    <img className="profile-img rounded-circle" src={stcLogo} alt="bg-login"  />  
      <div className='profile'>
        <p ><b>Ms. Isha Grewal</b></p>
        <p >Assistant professor: Humanities &Social Sciences</p>
      </div>
  </div>
</div> */}

<section id="team">
        <div class="heading">
            <h2>Mentors</h2>
        </div>
        
        <div class="upperbox">
            <div class="names">
                
                
                <img src="https://ui-avatars.com/api/?name=Priya+Rastogi" alt=""/>
                <h4>Mrs. Priya Rohatgi</h4>
                <p>Addt. HOD HSS</p>
            </div>
            <div class="names">

                <img src="https://ui-avatars.com/api/?name=Meetu+Kumar" alt=""/>
                
                <h4>Dr. Meetu Kumar</h4>
                <p>Asst. Prof. HSS</p>
            </div>
            <div class="names">
                <img src="https://ui-avatars.com/api/?name=Isha+Grewal"  alt=""/>
                
                <h4>Ms. Isha Grewal</h4>
                <p>Asst. Prof. HSS</p>
            </div>
        </div>
    </section>

    <section id="bottom">
        <h2 class="heading">Core Team Member</h2>
        <div class="member-list">
            <div class="mem-core">
            <div class="names">
            <div class="mem-img">
                <img src="https://ui-avatars.com/api/?name=Shubendra Shukla" alt=""/>
                </div>
                <div class="text">
                <h4>Shubhendra Shukla</h4>
                <p>STC Technical Team Mentor</p>
                </div>
            </div>
            <div class="names">
                <div class="mem-img">
                <img src="https://ui-avatars.com/api/?name=Ayush Srivastava" alt=""/>
                </div>
                <div class="text">
                <h4>Ayush Srivastava</h4>
                <p>STC Lead</p>
            </div>
            </div>
            <div class="names">
                <div class="mem-img">
                <img src="https://ui-avatars.com/api/?name=Ankit Yadav" alt=""/>
                </div>
                <div class="text">
                <h4>Ankit Yadav</h4>
                <p>Non Technical Lead</p>
            </div>
            </div>
            <div class="names">
                <div class="mem-img">
                <img src="https://ui-avatars.com/api/?name=Deepanshu Singh" alt=""/>
                </div>
                <div class="text">
                <h4>Deepanshu Singh</h4>
                <p>Technical Lead</p>
            </div>
            </div>
        </div>
        <div class="mem-core">
            <div class="names">
                <div class="mem-img">
                <img src="https://ui-avatars.com/api/?name=Akhil Raj Srivastava" alt=""/>
                </div>
                <div class="text">
                <h4>Akhil Raj Srivastava</h4>
                <p>Technical Team</p>
            </div>
            </div>
            <div class="names">
                <div class="mem-img">
                <img src="https://ui-avatars.com/api/?name=Avantika Gupta" alt=""/>
                </div>
                <div class="text">
                <h4>Avantika Gupta</h4>
                <p>Data Screening Team</p>
            </div>
            </div>
            <div class="names">
                <div class="mem-img">
                <img src="https://ui-avatars.com/api/?name=Shreya Tibrewal" alt=""/>
                </div>
                <div class="text">
                <h4>Shreya Tibrewal</h4>
                <p>Data Maintenance Team</p>
            </div>
            </div>
            <div class="names">
                <div class="mem-img">
                <img src="https://ui-avatars.com/api/?name=Priyanshu Praveen" alt=""/>
                </div>
                <div class="text">
                <h4>Priyanshu Praveen</h4>
                <p>Data Screening Team</p>
            </div>
            </div>
        </div>
        </div>
    </section>





			</MDBContainer>
			{/* 
        <div className="info-team-description">
          <MDBTypography className="fs-2 fw-bolder">
            Meet the Team
          </MDBTypography>
          <div className="info-team-about">
            <MDBListGroup className="info-team-list">
              <MDBListGroupItem id="team-header">
                Mentors
              </MDBListGroupItem>
              <MDBListGroupItem className="bg-light">
                <div className="d-flex flex-column w-100 justify-content-between">
                  <h6 className="mb-1 fw-bold">Ms. Puja Rohatgi</h6>
                  <small>
                    Additional HOD: Humanities &Social Sciences
                  </small>
                </div>
              </MDBListGroupItem>
              <MDBListGroupItem className="bg-light">
                <div className="d-flex flex-column w-100 justify-content-between">
                  <h6 className="mb-1 fw-bold">Dr. Meetu Kumar</h6>
                  <small>
                    Assistant professor: Humanities &Social Sciences
                  </small>
                </div>
              </MDBListGroupItem>
              <MDBListGroupItem className="bg-light">
                <div className="d-flex flex-column w-100 justify-content-between">
                  <h6 className="mb-1 fw-bold">Ms. Samiksha Tewari</h6>
                  <small>
                    Assistant professor: Humanities &Social Sciences
                  </small>
                </div>
              </MDBListGroupItem>
              <MDBListGroupItem className="bg-light">
                <div className="d-flex flex-column w-100 justify-content-between">
                  <h6 className="mb-1 fw-bold">Ms. Isha Grewal</h6>
                  <small>
                    Assistant professor: Humanities &Social Sciences
                  </small>
                </div>
              </MDBListGroupItem>
            </MDBListGroup>
            <MDBListGroup className="info-team-list">
              <MDBListGroupItem id="team-header">
                Core Team Members
              </MDBListGroupItem>
              <MDBListGroupItem className="bg-light">
                <div className="d-flex flex-column w-100 justify-content-between">
                  <h6 className="mb-1 fw-bold">Mr. Archit Rastogi</h6>
                  <small>Information Technology (2016-2020)</small>
                </div>
              </MDBListGroupItem>
              <MDBListGroupItem className="bg-light">
                <div className="d-flex flex-column w-100 justify-content-between">
                  <h6 className="mb-1 fw-bold">Ms. Archy Mathur</h6>
                  <small>
                    Master of Computer Application (2017-2020)
                  </small>
                </div>
              </MDBListGroupItem>
              <MDBListGroupItem className="bg-light">
                <div className="d-flex flex-column w-100 justify-content-between">
                  <h6 className="mb-1 fw-bold">Mr. Harsh Rawat</h6>
                  <small> Electronics & Communication (2016-2020)</small>
                </div>
              </MDBListGroupItem>
              <MDBListGroupItem className="bg-light">
                <div className="d-flex flex-column w-100 justify-content-between">
                  <h6 className="mb-1 fw-bold">Mr. Mihir Gabba</h6>
                  <small> Electronics & Communication (2016-2020)</small>
                </div>
              </MDBListGroupItem>
              <MDBListGroupItem className="bg-light">
                <div className="d-flex flex-column w-100 justify-content-between">
                  <h6 className="mb-1 fw-bold">Ms. Prachi</h6>
                  <small>
                    Computer Science and Engineering (2016-2020)
                  </small>
                </div>
              </MDBListGroupItem>
              <MDBListGroupItem className="bg-light">
                <div className="d-flex flex-column w-100 justify-content-between">
                  <h6 className="mb-1 fw-bold">
                    Mr. Shreeyam Raghuvanshi
                  </h6>
                  <small>Mechanical Engineering (2016-2020)</small>
                </div>
              </MDBListGroupItem>
            </MDBListGroup>
            <MDBListGroup className="info-team-list">
              <MDBListGroupItem id="team-header">
                Current Team Members
              </MDBListGroupItem>
              <MDBListGroupItem className="bg-light">
                <div className="d-flex flex-column w-100 justify-content-between">
                  <h6 className="mb-1 fw-bold">Mr. Archit Rastogi</h6>
                  <small>Information Technology (2016-2020)</small>
                </div>
              </MDBListGroupItem>
              <MDBListGroupItem className="bg-light">
                <div className="d-flex flex-column w-100 justify-content-between">
                  <h6 className="mb-1 fw-bold">Ms. Archy Mathur</h6>
                  <small>
                    Master of Computer Application (2017-2020)
                  </small>
                </div>
              </MDBListGroupItem>
              <MDBListGroupItem className="bg-light">
                <div className="d-flex flex-column w-100 justify-content-between">
                  <h6 className="mb-1 fw-bold">Mr. Harsh Rawat</h6>
                  <small> Electronics & Communication (2016-2020)</small>
                </div>
              </MDBListGroupItem>
              <MDBListGroupItem className="bg-light">
                <div className="d-flex flex-column w-100 justify-content-between">
                  <h6 className="mb-1 fw-bold">Mr. Mihir Gabba</h6>
                  <small> Electronics & Communication (2016-2020)</small>
                </div>
              </MDBListGroupItem>
              <MDBListGroupItem className="bg-light">
                <div className="d-flex flex-column w-100 justify-content-between">
                  <h6 className="mb-1 fw-bold">Ms. Prachi</h6>
                  <small>
                    Computer Science and Engineering (2016-2020)
                  </small>
                </div>
              </MDBListGroupItem>
              <MDBListGroupItem className="bg-light">
                <div className="d-flex flex-column w-100 justify-content-between">
                  <h6 className="mb-1 fw-bold">
                    Mr. Shreeyam Raghuvanshi
                  </h6>
                  <small>Mechanical Engineering (2016-2020)</small>
                </div>
              </MDBListGroupItem>
            </MDBListGroup>
          </div>
        </div>
      </div>
    </div>
  </MDBCol></MDBContainer> */}
		</>
	);
};

export default About;

// import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

// import InfoCard from "../../components/cards/info";
// import Navbar from "../../components/navbar";
// import "./styles.scss";
// import SynopsisCarousel from "../../components/carousel";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../features/userSlice";
// const baseURL = "http://localhost:5000/dashboard";
// let obj = 0;
// const About = () => {
//   const [data, setdata] = useState(null);

//   const nav = useNavigate();
//   const user = JSON.parse(localStorage.getItem("user"));
//   const fetchData = async()=>{
//     console.log(user);
//     // console.log("d",user.access_token)
//     fetch('http://localhost:5000/api/count',{
//       headers:{
//         authorization: `Bearer ${user.access_token}`
//       }
//     }).then(response => response.json()).then(response => {setdata(response.data[0].COUNT)})
//   }
//   useEffect(async () => {
//   //  console.log("C",user.user.access_token)
//    //console.log(user.access_token)
//    if(!user){
//     nav('/');
//    }
//    await fetchData();
//    return () => {
//      setdata(null);
//    }
//   }, [])

//   return (
//     <>
//       <Navbar />
//       <MDBContainer fluid className="pb-4 bg-light">
//         <MDBRow>
//           <MDBCol
//             xs="12"
//             sm="12"
//             md="12"
//             lg="12"
//             xl="12"
//             xxl="12"
//             id="info-user-col"
//           >
//             Welcome {user.LibraryID}
//             <hr className="info-user-col-divider" />
//           </MDBCol>
//         </MDBRow>
//         <MDBRow>
//           <MDBCol
//             xs="12"
//             sm="4"
//             md="4"
//             lg="4"
//             xl="4"
//             xxl="4"
//             id="info-card-col"
//           >
//             <InfoCard metric={data} title="Reports available" />
//           </MDBCol>
//         </MDBRow>
//         <MDBRow>
//           <MDBCol
//             xs="12"
//             sm="12"
//             md="12"
//             lg="12"
//             xl="12"
//             xxl="12"
//             id="info-synopsis-header"
//           >
//             Placement Synopsis
//             <hr className="info-user-col-divider" />
//           </MDBCol>
//         </MDBRow>
//         <MDBRow id="info-synopsis-col">
//           <MDBCol xs="12" sm="12" md="12" lg="12" xl="6" xxl="6">
//             <SynopsisCarousel />
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </>
//   );
// };

// export default About;
