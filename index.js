const generateAdvice = async() => {
    const headerText = document.getElementById('header-advice');
    const adviceText = document.getElementById('content-advice');
    headerText.innerText = 'ADVICE';
    adviceText.innerText = 'Finding best advice...';
    const res = await axios.get('https://api.adviceslip.com/advice');
    headerText.innerText += ` #${res.data.slip.id}`;
    adviceText.innerText = `"${res.data.slip.advice}"`;
}

window.addEventListener('load', generateAdvice);