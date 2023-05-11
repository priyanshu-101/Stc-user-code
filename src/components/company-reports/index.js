import { useState, useEffect } from 'react';
import axios from 'axios';
import {
	MDBTabs,
	MDBTabsItem,
	MDBTabsLink,
	MDBTabsContent,
	MDBTabsPane,
	MDBRow,
	MDBCol,
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import Unlike from "../../asset/unlike.svg"
import heart from "../../asset/heart.svg"
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const CompanyReports = ({ id }) => {
	const nav = useNavigate();
	const user = JSON.parse(localStorage.getItem("user"));
	const [verticalActive, setVerticalActive] = useState(2023);
	const [data, setdata] = useState({});
	const [like, setlike] = useState(false);
	const [likes, setlikes] = useState(0);
	//const [views, setviews] = useState(0);
	const handleVerticalClick = (value) => {
		if (value === verticalActive) {
			return;
		}
		setVerticalActive(value);
	};
	const fetchData = async () => {
		//console.log(user.user);
		// const response = await axios.get(`http://13.235.49.202:5000/api/companySearch/${id}/${verticalActive}`)
		const response = await axios.get(
			`http://13.235.49.202:5000/api/companySearch/${id}/${verticalActive}`,{
				headers:{
					authorization: `Bearer ${user.access_token}`
				  }
			}
		);
		setdata(response.data.data);
	};
	useEffect(async () => {
		if(!user){
			nav('/');
		   }
		//console.log(id, verticalActive);
		//await fetchData();
		fetchData();
		// console.log('A', data);
		// console.log('hi');
	}, [verticalActive]);

	//console.log('B', data);
	return (
		<>
			<MDBRow>
				<MDBCol size="3">
					<MDBTabs className="flex-column text-center">
						<MDBTabsItem>
							<MDBTabsLink
								className="details-tab"
								onClick={() => handleVerticalClick(2022)}
								active={verticalActive === 2022}
							>
								2022
							</MDBTabsLink>
						</MDBTabsItem>
						<MDBTabsItem>
							<MDBTabsLink
								className="details-tab"
								onClick={() => handleVerticalClick(2023)}
								active={verticalActive === 2023}
							>
								2023
							</MDBTabsLink>
						</MDBTabsItem>
					</MDBTabs>
				    {/* <div className='like_content_details'>
					{like ? <img className="like_button" onClick={()=>dislike()} src={heart}/>: <img className="like_button"  onClick={()=>Like()} src={Unlike}/>}<br/>
					<p className='likes_content'>Likes: {likes} <br/>
					</p>
					</div> */}
				</MDBCol>
				<MDBCol size="9">
					<MDBTabsContent>
						<div className="details-pane" show={verticalActive === 'tab1'}>
							{/* {data ? (
								Object.keys(data).map((e, index) => (
									<div key={index}>
										<u><b>{e}: </b></u>
										<span>{data[e]}</span>
										<br />
									</div>
								))
							) : (
								<div>No data Available</div>
							)} */}
							<div className="company-logo">
        {/* <img src="https://drive.google.com/file/d/1ThJ8vuuysy3Pczo1IciAxleVvlWk1CiG/view?usp=sharing" alt="dfs"/> */}
		<img src={`https://drive.google.com/uc?export=view&id=${data.ImageID}`} alt={`${data.companyName}`}/>
      </div> 
							{data ? (
								<>
									{data.companyName && <div>
										<b>Company Name</b> : <span>{data.companyName}</span>
									</div>}
									<br />
									{ data.companyWebsite && <div>
										<b>Company Website</b> : <span><a href={data.companyWebsite} target="_blank">{data.companyWebsite}</a></span>
									</div>}
									<br />
									{data.companyNumOfRounds && <div>
										<b>Number Of Rounds</b> :{' '}
										<span>{data.companyNumOfRounds}</span>
									</div>}
									<br />
									{data.companyCTC && <div>
										<b>Maximum CTC</b> : <span>{data.companyCTC}</span>
									</div>}
									<br />
									{data.companyEligibility && <div>
										<b>Eligibility</b> : <br />
										<span>{data.companyEligibility}</span>
									</div>}
									<br />
									{data.companyJOBProfile && <div>
										<b>JOB Profile</b> : <br />
										<span>{data.companyJOBProfile}</span>
									</div>}
									<br />
									{data.companyFirstRoundDescrip != 'NA' &&
										data.companyFirstRoundDescrip != 'N/A'&&data.companyFirstRoundDescrip != ' ' && data.companyFirstRoundDescrip && (
											<div>
												<b>{data.companyFirstRoundName}</b> :{' '}
												<span>Duration : {data.companyFirstRoundDuration}</span>
												<br />
												{/* <span>{data.companyFirstRoundDescrip}</span>
												<br />{' '} */}
												
												{/* {console.log(data.companyFirstRoundDescrip)} */}
												<span>{data.companyFirstRoundDescrip.split("\r\n").map((e,key)=>{
													return [<div>{e}</div>]
												})}</span><br/>
											</div>
										)}

									{data.companySecondRoundDescrip != 'NA' &&
										data.companySecondRoundDescrip != 'N/A'&&data.companySecondRoundDescrip != ' ' && data.companySecondRoundDescrip && (
											<div>
												<b>{data.companySecondRoundName}</b> :{' '}
												{data.companySecondRoundDuration != 'NA' && data.companySecondRoundDuration != 'N/A' && data.companySecondRoundDuration != ' ' && <span>
													Duration : {data.companySecondRoundDuration}
												</span>}
												<br />
												<span>{data.companySecondRoundDescrip.split("\r\n").map((e,key)=>{
													return [<div>{e}</div>]
												})}</span>
												
											</div>
										)}
									<br />
									{data.companyThirdRoundDescrip != 'NA' &&
										data.companyThirdRoundDescrip != 'N/A' &&
										data.companyThirdRoundDescrip != ' ' && data.companyThirdRoundDescrip && (
											<div>
												<b>{data.companyThirdRoundName}</b> :{' '}
												{data.companyThirdRoundDuration != 'NA' && data.companyThirdRoundDuration != 'N/A' && data.companyThirdRoundDuration != ' ' && <span>
													Duration : {data.companyThirdRoundDuration}
												</span>}
												<br />
												<span>{data.companyThirdRoundDescrip.split("\r\n").map((e,key)=>{
													return [<div>{e}</div>]
												})}</span>
												
											</div>
										)}
									<br />
									{data.companyFourthRoundDescrip != 'NA' &&
										data.companyFourthRoundDescrip != 'N/A' && data.companyFourthRoundDescrip != ' ' && data.companyFourthRoundDescrip&& (
											<div>
												<b>{data.companyFourthRoundName}</b> :{' '}
												{data.companyFourthRoundDuration != 'NA' && data.companyFourthRoundDuration != 'N/A' && data.companyFourthRoundDuration != ' ' && data.companyFourthRoundDuration && <span>
													Duration : {data.companyFourthRoundDuration}
												</span>}
												<br/>
												<span>{data.companyFourthRoundDescrip.split("\r\n").map((e,key)=>{
													return [<div>{e}</div>]
												})}</span>
												
											</div>
										)}
									<br />
									{data.companyAdditionalRoundDescrip != 'NA' &&
										data.companyAdditionalRoundDescrip != 'N/A' && data.companyAdditionalRoundDescrip != ' ' && data.companyAdditionalRoundDescrip && (
											<div>
												<b>Additional Round</b> : <br />
												<span>{data.companyAdditionalRoundDescrip.split("\r\n").map((e,key)=>{
													return [<p>{e}</p>]
												})}</span>
												
											</div>
										)}
								</>
							) : (
								<div>No data Available</div>
							)}
						</div>
					</MDBTabsContent>
				</MDBCol>
			</MDBRow>
		</>
	);
};

export default CompanyReports;
