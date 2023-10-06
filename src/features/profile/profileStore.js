export const SET_PROFILE_DATA = 'features/profileStore/setProfileData'

export const profileStore = {
    state: () => ({
        profile: null
    }),
    mutations: {
        [SET_PROFILE_DATA]: (state, profile) => {
            state.profile = profile
        }
    }
}
