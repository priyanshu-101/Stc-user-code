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
import './styles.scss';

const CompanyReports = ({ id }) => {
	const [verticalActive, setVerticalActive] = useState(2022);
	const [data, setdata] = useState({});
	const user = useSelector(selectUser);
	const handleVerticalClick = (value) => {
		if (value === verticalActive) {
			return;
		}
		setVerticalActive(value);
	};
	const fetchData = async () => {
		console.log(user.user);
		// const response = await axios.get(`http://localhost:5000/api/companySearch/${id}/${verticalActive}`)
		const response = await axios.get(
			`http://localhost:5000/api/companySearch/${id}/${verticalActive}`
		);
		setdata(response.data.data);
	};
	useEffect(async () => {
		console.log(id, verticalActive);
		//await fetchData();
		fetchData();
		console.log('A', data);
		console.log('hi');
	}, [verticalActive]);

	console.log('B', data);
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
								onClick={() => handleVerticalClick(2021)}
								active={verticalActive === 2021}
							>
								2021
							</MDBTabsLink>
						</MDBTabsItem>
					</MDBTabs>
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
										data.companyFirstRoundDescrip != 'N/A'&& data.companyFirstRoundDescrip && (
											<div>
												<b>{data.companyFirstRoundName}</b> :{' '}
												<span>Duration : {data.companyFirstRoundDuration}</span>
												<br />
												<span>{data.companyFirstRoundDescrip}</span>
												<br />{' '}
											</div>
										)}

									{data.companySecondRoundDescrip != 'NA' &&
										data.companySecondRoundDescrip != 'N/A'&& data.companySecondRoundDescrip && (
											<div>
												<b>{data.companySecondRoundName}</b> :{' '}
												{data.companySecondRoundDuration != 'NA' && data.companySecondRoundDuration != 'N/A' && <span>
													Duration : {data.companySecondRoundDuration}
												</span>}
												<br />
												<span>{data.companySecondRoundDescrip}</span>
												<br />{' '}
											</div>
										)}
									<br />
									{data.companyThirdRoundDescrip != 'NA' &&
										data.companyThirdRoundDescrip != 'N/A' && data.companyThirdRoundDescrip && (
											<div>
												<b>{data.companyThirdRoundName}</b> :{' '}
												{data.companyThirdRoundDuration != 'NA' && data.companyThirdRoundDuration != 'N/A' && <span>
													Duration : {data.companyThirdRoundDuration}
												</span>}
												<br />
												<span>{data.companyThirdRoundDescrip}</span>
												<br />{' '}
											</div>
										)}
									<br />
									{data.companyFourthRoundDescrip != 'NA' &&
										data.companyFourthRoundDescrip != 'N/A' && data.companyFourthRoundDescrip&& (
											<div>
												<b>{data.companyFourthRoundName}</b> :{' '}
												{data.companyFourthRoundDuration != 'NA' && data.companyFourthRoundDuration != 'N/A' && <span>
													Duration : {data.companyFourthRoundDuration}
												</span>}
												<br />
												<span>{data.companyFourthRoundDescrip}</span>
												<br />{' '}
											</div>
										)}
									<br />
									{data.companyAdditionalRoundDescrip != 'NA' &&
										data.companyAdditionalRoundDescrip != 'N/A' && data.companyAdditionalRoundDescrip && (
											<div>
												<b>Additional Round</b> : <br />
												<span>{data.companyAdditionalRoundDescrip}</span>
												<br />{' '}
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
