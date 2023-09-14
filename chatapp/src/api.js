// api.js

const BASE_URL = 'http://localhost:5000/api'; // Update with your backend's URL

export async function sendMessage(message, language) {
  const response = await fetch(`${BASE_URL}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message, language }),
  });
  const data = await response.json();
  return data.message;
}

export async function setLanguage(language) {
  const response = await fetch(`${BASE_URL}/set_language`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ language }),
  });
  const data = await response.json();
  return data.message;
}
