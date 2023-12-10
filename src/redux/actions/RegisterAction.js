
const register = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("/auth/register", data);
            dispatch({
                type: "REGISTER",
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export default register;