import { EmployeeDto } from "../dto";
import { HttpService } from "./HttpService";

class EmployeesApi extends HttpService {
    constructor() {
        super('staff');
    }

    getAll() {
        return this.get<EmployeeDto>('');
    }
}

export default new EmployeesApi();