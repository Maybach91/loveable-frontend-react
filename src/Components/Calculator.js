import React, { useState, useEffect } from 'react';
import TemperatureInput from './TemperatureInput';

function toCelsius (fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit (celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert (temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict (props) {
  if (props.celsius >= 100) {
    return <div
      className="bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full"
      role="alert">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle"
           className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 512 512">
        <path fill="currentColor"
              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
      </svg>
      The water will boil
    </div>;
  }
  return <div
    className="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full"
    role="alert">
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle"
         className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 512 512">
      <path fill="currentColor"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
    </svg>
    The water will not boil.
  </div>;
}

const Calculator = (props) => {

  const [temperature, setTemperature] = useState(0);
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (temperature) => {
    setScale('c');
    setTemperature(temperature);
  }

  const handleFahrenheitChange = (temperature) => {
    setScale('f');
    setTemperature(temperature);
  }

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  return (
    <div>
      <fieldset className={"max-w-md mx-auto"}>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={handleCelsiusChange}/>
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange}/>
        {temperature > 0 && <BoilingVerdict celsius={parseFloat(celsius)} />}

      </fieldset>
    </div>
  );
};

export default Calculator;
