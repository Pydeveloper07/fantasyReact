export const InitialSignup = {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    phone_number: "",
    password: "",
    conf_password: "",
    avatar: "",
}

export const InitialEditProfile = (user) => {
    if (user){
        return {
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            address: user.address,
            phone_number: user.phone_number,
            avatar: "",
        }
    }
    return {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        phone_number: "",
        avatar: "",
    };
}

export const InitialReview = {
    content: ""
}

export const InitialContact = {
    subject: "",
    email: "",
    message: ""
}

export const InitialOrderTable = {
    tableId: "",
    numOfPeople: 0,
    startTime: null,
    endTime: null
}