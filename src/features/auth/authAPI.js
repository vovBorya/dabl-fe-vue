const ApiRoutes = {
    SIGN_IN: '/sign-in'
}

const signIn = async (login, password) => {
    return await fetch(`${process.env.VUE_APP_API_PATH}${ApiRoutes.SIGN_IN}`, {
        body: JSON.stringify({ login, password }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
    }).then(res => res.json());
}

export default {
    signIn
}
