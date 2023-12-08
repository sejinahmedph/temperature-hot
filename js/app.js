// Get Input Value
const getInputValue = () => {
    // input
    const input = document.getElementById('search-input');
    const inputValue = input.value;
    // condition
    if (inputValue) {
        return inputValue;
    } 
    else {
        // error
        alert('Please write something!!');
    }
    // clean input value
    input.value = '';
}
// Set Innertext
const setInnerText = (id, text) => {
    // display
    const display = document.getElementById(id);
    display.innerText = text;
}
// Load Data
const loadData = () => {
    // api key
    const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
    // city
    const city = getInputValue();
    // condition
    if (city) {
        // url
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        // fetch
        fetch(url)
            .then(response => response.json())
            .then(data => displayData(data))
            .catch(error => alert('No City Found'))
    } else {
        // error
        alert('No City Found!!');
    }
}
// Display Data
const displayData = (data) => {
    // condition
    if (data) {
        // set city name
        setInnerText('city', data?.name);
        // set city temperature
        setInnerText('temperature', data?.main.temp);
        // set weather status
        setInnerText('weather-status', data?.weather[0].main);
        // weather icon
        // source
        const source = `https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`;
        // icon
        const icon = document.getElementById('icon');
        icon.setAttribute('src', source);
    }
}
// Load Data by press Enter
document.addEventListener('keypress', function (event) {
    // input
    const input = document.getElementById('search-input')
    // condition
    if (event.key === 'Enter') {
        // load
        loadData();
        input.value = '';
    }
})
