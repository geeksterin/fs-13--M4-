// apiUrl = https://api.api-ninjas.com/v1/dadjokes
// apiKey = bJwWNIIOQ7riYhRx7Reysg==YVApY0LFiYX7uooC

(function () {
    async function getJoke() {
        const API_KEY = 'bJwWNIIOQ7riYhRx7Reysg==YVApY0LFiYX7uooC';
        let options = {
            method: 'GET',
            headers: { 'X-Api-Key': API_KEY },
        }
        const URL = 'https://api.ai-ninjas.com/v1/dadjokes?lt=-1';

        document.getElementById('container').innerText = 'updating...';

        try {
            const response = await fetch(URL, options);
            const data = await response.json();
            document.getElementById('container').innerText = data[0].joke;
        } catch (error) {
            
            document.getElementById('container').innerText = (error.message);
        }

    }

    document.getElementById('btn').addEventListener('click', getJoke);
})();