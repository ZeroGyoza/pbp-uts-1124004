
export async function loginRequest(email: string, password: string) {
    const response = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            email, password
        })
    })
    const data = await response.json();
    return data;

}

export async function userInfoRequest(){
    const respone = await fetch(`/api/auth/me`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
    const data = await respone.json();
    return data;
}

export async function getPostRequest () {
    const response = await fetch(`/api/auth/post`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })

    const data = await response.json();

    return data;
}
