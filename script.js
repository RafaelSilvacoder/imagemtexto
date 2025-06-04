document.getElementById('convertButton').addEventListener('click', async () => {
    const imageInput = document.getElementById('imageInput');
    if (imageInput.files.length === 0) {
        alert('Por favor, selecione uma imagem.');
        return;
    }

    const formData = new FormData();
    formData.append('image', imageInput.files[0]);

    const response = await fetch('/convert', {
        method: 'POST',
        body: formData
    });

    const result = await response.text();
    document.getElementById('resultText').innerText = result;
});