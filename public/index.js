const button = document.getElementById('test-button');
const response = document.getElementById('response');
const prompt = document.getElementById('prompt');

const getTheResponse = async () => {
  response.innerText = "Listen closely!";
  const res = await fetch('/api/talk', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: prompt.value,
    })
  });

  if (!res.ok) {
    console.error('Not ok.');
    return;
  }
  response.innerText = (await res.json()).response;
};

button.addEventListener('click', () => {
  getTheResponse();
});
