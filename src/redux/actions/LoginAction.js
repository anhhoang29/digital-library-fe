const setUser = (user) => ({
    type: "SET_USER",
    payload: user,
});

const loginAction = {
    setUser,
};

export default loginAction;
