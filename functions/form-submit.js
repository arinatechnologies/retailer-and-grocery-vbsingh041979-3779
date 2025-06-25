
    export async function onRequestPost({ request, env }) {
        try {
            const formData = await request.json();

            const apiKey = env.API_KEY; // ✅ from Cloudflare Pages env var

            const apiResponse = await fetch('https://api.cloudmysite.com/form', {
                method: 'POST',
                headers: {
                    'x-api-key': apiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    from: "info@cloudmysite.com",
                    urgency: "Normal"
                })
            });

            return new Response(await apiResponse.text(), {
                status: apiResponse.status,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            });
        } catch (error) {
            return new Response(JSON.stringify({ error: error.message }), {
                status: 500
            });
        }
    }
    