import { useParams } from "react-router";

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

export async function bookDetailRequest(){
    const respone = await fetch(`/api/buku/:id`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
    const data = await respone.json();
    return data;
}

export async function getPostRequest () {
    const response = await fetch(`/api/buku`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
        
    })

    const data = await response.json();
    console.log(data);
    
    return data;
}

export async function updatedRequest () {
    const response = await fetch(`/api/buku`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        }
        
    })

    const json = await response.json();
    console.log(json);
    
    return json;
}
