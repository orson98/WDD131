document.addEventListener('DOMContentLoaded', function() {
    function calculeWindChill(temperature, windSpeed) {
        return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    }

   
    const temperature = 10;
    const windSpeed = 5; 


    const windChill = calculeWindChill(temperature, windSpeed);

    
    const windChillElement = document.getElementById('windChill');
    windChillElement.textContent = `Wind Chill: ${windChill.toFixed(1)}°C`;
});