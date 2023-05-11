import axios from "axios";
class ListService {
  retrieveClassData(classId) {
    return axios.get(`http://13.235.49.202:5000/companies?classId=${classId}`);
  }
  retrieveCompanyData(companyId) {
    return axios.get(`http://13.235.49.202:5000/reports?companyId=${companyId}`);
  }
}
export default new ListService();
