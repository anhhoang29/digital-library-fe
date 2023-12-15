const setUser = (user) => ({
    type: "SET_USER",
    payload: user,
});

const setIsLoggedIn = (isLoggedIn) => {
    return {
        type: "SET_IS_LOGGED_IN",
        payload: isLoggedIn,
    };
};

const authAction = {
    setUser,
    setIsLoggedIn,
};

export default authAction;