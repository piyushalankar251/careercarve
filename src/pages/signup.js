import React from 'react'
function SignUp() {
    const handleSignup = (event) => {
        // event.preventDefault();
        localStorage.setItem('Login', false);
    }
    const handleFirstName = (event) => {
        event.preventDefault();
        localStorage.setItem('First', event.target.value);
    }
    const handleLastName = (event) => {
        event.preventDefault();
        localStorage.setItem('Last', event.target.value);
    }
    const handleEmail = (event) => {
        event.preventDefault();
        localStorage.setItem('Email', event.target.value);
    }
    return (
        <form>
            <h3>Welcome!</h3>
            <div className="mb-3">
                <label>First name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your first name"
                    onChange={handleFirstName}
                />
            </div>
            <div className="mb-3">
                <label>Last Name</label>
                <input type="text" className="form-control" placeholder="Enter your last name"
                    onChange={handleLastName} />
            </div>
            <div className="mb-3">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="abc@example.com"
                    onChange={handleEmail}
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-secondary" onClick={handleSignup}>
                    Sign Up
                </button>
            </div>
            <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
            </p>
        </form>
    )
}

export default SignUp;