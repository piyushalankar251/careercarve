import React from 'react'
function Login() {
    const handleLogin = (event) => {
        // event.preventDefault();
        localStorage.setItem('Login', true);
    }
    return (
        <form>
            <h3>Let's Get Started😊</h3>
            <div className="mb-3">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-secondary" onClick={handleLogin}>
                    Login
                </button>
            </div>
            <p className="forgot-password text-right">
                New User <a href="/sign-up">sign up?</a>
            </p>
        </form>
    );
}

export default Login;