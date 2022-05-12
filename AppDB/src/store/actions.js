
export const Login = (token1) => {
    const token = token1;
    return ({
        type: 'LOGIN',
        payload: token,
    })
}

export const Logout = () => {
    return ({
        type: 'LOGOUT',
        payload: null,
    })
}