export const baseUrl = "http://localhost:5000/api";

export const postRequest = async(url, body) =>{
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body,

    });
    const data = await response.json()

    if(!response.ok){
        let message;

        if (date?.message){
            message = data.message
        }else{
            message == date;
        }

        return{error: true, message};
    }

    return data;

};