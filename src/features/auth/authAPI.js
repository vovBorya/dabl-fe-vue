const ApiRoutes = {
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up'
}

const signIn = async (login, password) => {
    return await fetch(`${process.env.VUE_APP_API_PATH}${ApiRoutes.SIGN_IN}`, {
        body: JSON.stringify({ login, password }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
    }).then(res => res.json());
}

const signUp = async (
    nickName,
    firstName,
    lastName,
    email,
    password
) => {
    return await fetch(`${process.env.VUE_APP_API_PATH}${ApiRoutes.SIGN_IN}`, {
        body: JSON.stringify({
            nickName,
            firstName,
            lastName,
            email,
            password
        }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
    }).then(res => res.json());
}

export default {
    signIn,
    signUp
}
