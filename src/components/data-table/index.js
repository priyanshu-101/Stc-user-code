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
	pagination = { page: 1, perPage: 15, total: 35 },
}) => {
  const nav = useNavigate();
  const user = useSelector(selectUser)
  
	const paginationArr = [];
	const processPagination = () => {
		const availablePages = Math.ceil(pagination.total / pagination.perPage);
		for (let i = 0; i < availablePages; i++) {
			paginationArr.push(
				<MDBPaginationItem>
					<MDBPaginationLink href="#">{i + 1}</MDBPaginationLink>
				</MDBPaginationItem>
			);
		}
	};
	processPagination();

	return (
		<>
			<MDBTable responsive id="table">
				{rows.length > 0 ? (
					<>
						<MDBTableHead className="table-head">
							<tr>
								{columns.map((c) => {
									return <th scope="col">{c.title}</th>;
								})}
							</tr>
						</MDBTableHead>
						<MDBTableBody className="table-body">
							{rows.map((r, index) => {
								return (
									<tr className="table-row">
										{[
											<td>{index + 1}</td>,
											Object.values(r).map((data, index) => {
												if (index != 0) {
													return <td>{data}</td>;
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
