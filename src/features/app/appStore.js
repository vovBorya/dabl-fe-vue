export const SET_IS_AUTHENTICATED = 'features/profileStore/setIsAuthenticated'

export const appStore = {
    state: () => ({
        isAuthenticated: false
    }),
    mutations: {
        [SET_IS_AUTHENTICATED]: (state, isAuthenticated) => {
            state.isAuthenticated = isAuthenticated
        }
    }
}
