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

const loginAction = {
    setUser,
    setIsLoggedIn,
};



// const login = (email, password) => {
//     return (dispatch) => {
//         fetch("http://localhost:8080/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ email, password }),
//         })
//             .then((res) => res.json())
//             .then((res) => {
//                 if (res.success) {
//                     dispatch(setUser(res.data));
//                 } else {
//                     alert(res.message);
//                 }
//             });
//     };
// };

const login = (email, password) => {
    return (dispatch) => {
        fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    dispatch(setUser(res.data));
                } else {
                    alert(res.message);
                }
            });
    };
};

export default loginAction;
