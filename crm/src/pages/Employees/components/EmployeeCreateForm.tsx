import { FormEvent } from "react";
import { useInput } from "../../../common/hooks/useInput";
import { Button } from "../../../components/Button";

export interface EmployeeCreateFormData {
    name: string;
    lastName: string;
}

export function EmployeeCreateForm({ onCreate }: { onCreate: (data: EmployeeCreateFormData) => void}) {
    const nameInput = useInput('');
    const lasNameInput = useInput('');

    const handleForm = (event: FormEvent) => {
        event.preventDefault();
        onCreate({ name: nameInput.value, lastName: lasNameInput.value });
    }

    return (
        <form onSubmit={handleForm}>
        <input {...nameInput} name="name" placeholder="Имя" />
        <input {...lasNameInput} name="lastName" placeholder="Фамилия" />
        <Button>Добавить</Button>
        </form>
    )
}