import { useEffect, useRef, useState } from "react";

import { EmployeeDto } from "../../common/dto";
import { EmployeesApi } from "../../common/api";

import { EmployeeCreateForm, EmployeeCreateFormData } from "./components/EmployeeCreateForm";
import { EmployeeCard } from "./components/EmployeeCard";

export function EmployeesPage() {
    const [employees, setEmployees] = useState<EmployeeDto[]>([]);
  
    useEffect(() => {
      EmployeesApi.getAll().then(setEmployees);
    }, []);
  
    const removeEmployee = (employeeId: number) => {
      setEmployees(employees.filter(x => x.id !== employeeId));
    };
  
    const createEmployee = (data: EmployeeCreateFormData) => {
      setEmployees(employees.concat({
        "firstName": data.name,
        "patronymic": "Сергеевна",
        "surName": data.lastName,
        "position": "Мастер ногтевого сервиса",
        "photo": "http://localhost:3001/api/staff/photo/d7be2a0cc36277ba0d5fcb3b325389a5.jpg",
        "startWorkDate": "2023-04-17T12:11:35.178Z",
        "id": employees.length + 1,
        "fullName": "Краснова Ирина Сергеевна",
      }));
    };
  
    return (
      <>
        <EmployeeCreateForm onCreate={createEmployee} />
  
        {employees.length === 0 && <p>Нет данных</p>}
  
        <div className="employees">
          {employees.map(employee => <EmployeeCard 
            onRemove={() => removeEmployee(employee.id)} 
            key={employee.id} 
            employee={employee} 
          />)}
        </div>
      </>
    );
}