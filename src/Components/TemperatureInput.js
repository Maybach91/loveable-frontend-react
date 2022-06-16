import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

const TemperatureInput = ({ scale, temperature, onTemperatureChange }) => {
  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  }
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <label htmlFor={scaleNames[scale]} className="form-label inline-block mb-2 text-gray-700"
        >Enter temperature in <strong>{scaleNames[scale]}</strong>:</label
        >

        <input
          value={temperature}
          onChange={handleChange}
          type="number"
          className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          id={scaleNames[scale]}
          placeholder={scaleNames[scale]}
        />
      </div>
    </div>
  );
};

export default TemperatureInput;
