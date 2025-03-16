export default async function userLogIn(email: string, password: string){
    const response = await fetch('https://a08-venue-explorer-backend.vercel.app/api/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
    })
    .then((res) => res.ok ? res.json() : null)
    .catch((err) => null);

    return response;
}