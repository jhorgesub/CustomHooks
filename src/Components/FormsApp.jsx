import { useForm } from "../hooks/useForm";

export const FormsApp = () => {

    const initialForm = {
        username: '',
        email: '',
        password: ''
    }

    const { username, email, password, onInputChange } = useForm(initialForm);

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(username, email, password);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input name="username" value={username} onChange={onInputChange} type="text" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input name="email" value={email} onChange={onInputChange} type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input name="password" value={password} onChange={onInputChange} type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
