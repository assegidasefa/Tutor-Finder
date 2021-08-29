import axios from ".."

export const login = async (email, password) => {
    try {
        const { data: result } = await axios.post("/users/login", { email, password })
        console.log("esssss")
        // localStorage.setItem("token",result.token)
        return result;
    } catch (error) {
        console.log("essserrrrrrrrss")
        throw new Error("Invalid Email or Password")
    }
}

export const signup = async (firstName, lastName, email, password, passwordConfirm, role = "teacher") => {
    try {
        console.log("dats are", firstName, lastName, email, password, passwordConfirm, role)
        const { data: result } = await axios.post("/users/signup", { firstName, lastName, email, password, passwordConfirm, role })
        console.log("esssss")
        // localStorage.setItem("token",result.token)
        return result;
    } catch (error) {
        console.log("essserrrrrrrrss")
        throw new Error("Invalid Email or Password")
    }
}

export const forgetpassword = async (email)=>{
    try {
        console.log("the email is",email)
        const { data } = await axios.post("/users/forgotPassword",{email})
        console.log("errrrrrrr")
    } catch (error) {
        console.log("main error")
        throw new Error("Invalid Email")
    }
}