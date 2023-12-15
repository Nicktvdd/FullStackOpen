const LoginForm = ({
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
    username,
    password
}) => (
    <div>
        <h2>Log in to application</h2>

        <form onSubmit={handleSubmit}>
            <div>
                username
                <input
                    type="text"
                    value={username}
                    name="Username"
                    onChange={handleUsernameChange}
                //onChange={({ target }) => setUsername(target.value)}
                />
            </div>
            <div>
                password
                <input
                    type="password"
                    value={password}
                    name="Password"
                    onChange={handlePasswordChange}
                //onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            <button type="submit">login</button>
        </form>
    </div>
)

export default LoginForm