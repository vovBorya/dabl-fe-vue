import {ACCESS_TOKEN_LOCAL_STORAGE_NAME} from "@/features/app";

const ApiRoutes = {
    USER: '/user'
};

const fetchProfile = async () => {
    try {
        const accessToken = localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_NAME);

        const response = await fetch(`${process.env.VUE_APP_API_PATH}${ApiRoutes.USER}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        if (response.status === 401) {
            // on logout
        }

        return await response.json();
    } catch (err) {
        console.error(err);

        return await Promise.reject(new Error('User fetching error'));
    }
};

export default {
    fetchProfile
};
