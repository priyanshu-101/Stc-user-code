import axios from "axios";
class ListService {
  retrieveClassData(classId) {
    return axios.get(`https://free.yashv.xyz/companies?classId=${classId}`);
  }
  retrieveCompanyData(companyId) {
    return axios.get(`https://free.yashv.xyz/reports?companyId=${companyId}`);
  }
}
export default new ListService();
