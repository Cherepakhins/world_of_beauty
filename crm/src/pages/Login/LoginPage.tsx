import { useAuth } from "../../contexts/AuthContext";
import { AuthForm } from "./components/AuthForm";

export function LoginPage() {
    const { login } = useAuth();

    return (
        <>
            <h1>LoginPage</h1>
            <AuthForm onLogin={login} />
        </>
    )
}