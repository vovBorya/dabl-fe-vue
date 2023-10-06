import { createStore } from 'vuex'

import {profileStore} from "@/features/profile";
import {appStore} from "@/features/app";

export const store = createStore({
    modules: {
        profileState: profileStore,
        appState: appStore
    }
})
