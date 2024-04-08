
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

export default async (): Promise<AmadeusOAuth2Token | { error: any }> => {
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
    try {
        let token = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', options);

        if (!token.ok) {
            throw new Error('Network response not ok');
        }

        return await token.json();
    } catch (err) {
        return { error: err };
    }
}