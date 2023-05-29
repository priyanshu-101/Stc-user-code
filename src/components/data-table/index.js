import {
	MDBTable,
	MDBTableHead,
	MDBTableBody,
	MDBPaginationItem,
	MDBPaginationLink,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
const DataTable = ({
	columns = [],
	rows = [],
	indexOfFirstPost
}) => {
  const nav = useNavigate();
  const user = useSelector(selectUser)
  

	return (
		<>
			<MDBTable responsive id="table">
				{rows.length > 0 ? (
					<>
						<MDBTableHead className="table-head">
							<tr>
								{columns.map((c,key) => {
									return <th key={key} scope="col">{c.title}</th>;
								})}
							</tr>
						</MDBTableHead>
						<MDBTableBody className="table-body">
							{rows.map((r, index) => {
								return (
									<tr className="table-row"  key={index}>
										{[
											<td>{index + 1 + indexOfFirstPost}</td>,
											Object.values(r).map((data, index) => {
												if (index != 0) {
													return <td  key={index}>{data}</td>;
												}
											}),
											<td>
												<button id="view-btn">
												<a onClick={() => nav(`/reports/${r.companyID}`)}>
													View
												</a>
												</button>
											</td>,
										]}
									</tr>
								);
							})}
						</MDBTableBody>
					</>
				) : (
					<MDBTableBody>No data</MDBTableBody>
				)}
			</MDBTable>
		</>
	);
};

export default DataTable;
