"use server"


import {cookies} from "next/headers";

export async function loginWithCityzenConnect(client_id: string, client_secret: string) {
    try{
        await fetch("http://localhost:8000/oauth/cityzen-connect/login",{

        })
    }catch (e: Error | any) {

    }

}

export async function getTokenConnect(client_id: string, client_secret: string) {
    const cookieStore = cookies();
    try {
        const response = await fetch("http://localhost:8000/oauth/cityzen-connect/token", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ client_id: client_id, client_secret: client_secret })
        });

        if (!response.ok) {
            // Gérer les erreurs HTTP
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        cookieStore.set('user', JSON.parse(data))
        console.log('Token:', data);
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération du token:', error);
    }

}
