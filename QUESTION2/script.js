document.getElementById('url-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const urlInput = document.getElementById('url-input').value;
            const shortenedUrl = `https://short.ly/${btoa(urlInput).substring(0, 8)}`;
            document.getElementById('shortened-url-text').textContent = shortenedUrl;
            document.getElementById('shortened-url').classList.remove('hidden');
        });