import CustomErrorHandler from "../utils/CustomErrorHandler.js";

export type AmadeusOAuth2Token = {
    type: string;
    username: string;
    application_name: string;
    client_id: string;
    token_type: string;
    access_token: string;
    expires_in: number;
    state: string;
    scope: string;
};

export default async (): Promise<AmadeusOAuth2Token> => {
    const formData = new URLSearchParams({
        client_id: process.env.AMADEUS_KEY,
        client_secret: process.env.AMADEUS_SECRET,
        grant_type: 'client_credentials',
    } as Record<string, string>);

    const options: RequestInit = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        body: formData.toString()
    }

    const errorHandler = new CustomErrorHandler();

    try {
        const token = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', options);
        errorHandler.checkResponse(token)

        return await token.json();
    } catch (error) {
        // Log and handle errors
        errorHandler.logError('Error fetching amadeus token:', error as undefined | string)
        throw new Error();
    }
}