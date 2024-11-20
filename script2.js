// Creat a tenperature class in javascript that manages both celsius and farenheit tempratures with getter and setter for each unit, allowing for automatic conversion between the two scales. the class should have an inital state of 0 celsius and 32 farenheit and it should validate input values for tamperature updates, ensuring they are numeric. when setting the temperature in either celsius or fahrenheti, the class should correctly update the corresponding value in the other scale. For eamle setting the temperature, to 25 degree celsius should automatically update the frhrenheit temprature t 77 degree , your challange is to implement the temperature class. //


class Temperature {
    constructor() {
      // Initial temperatures: 0 Celsius and 32 Fahrenheit
      this._celsius = 0;
      this._fahrenheit = 32;
    }
  
    // Getter for Celsius
    get getCelsius() {
      return this._celsius;
    }
  
    // Setter for Celsius
    set setCelsius(value) {
      if (typeof value === "number") {
        this._celsius = value;
        this._fahrenheit = (value * 9) / 5 + 32; // Update Fahrenheit automatically
      } else {
        console.error("Invalid input: Temperature must be a numeric value.");
      }
    }
  
    // Getter for Fahrenheit
    get getFahrenheit() {
      return this._fahrenheit;
    }
  
    // Setter for Fahrenheit
    set setFahrenheit(value) {
      if (typeof value === "number") {
        this._fahrenheit = value;
        this._celsius = ((value - 32) * 5) / 9; 
      } else {
        console.error("Invalid input: Temperature must be a numeric value.");
      }
    }
  }
  
  const temperature = new Temperature();
  
  console.log(`Initial Celsius: ${temperature.getCelsius}°C`);
  console.log(`Initial Fahrenheit: ${temperature.getFahrenheit}°F`);
  
  temperature.setCelsius = 25;
  console.log(`Celsius: ${temperature.getCelsius}°C`);
  console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`);
  
  temperature.setFahrenheit = 68;
  console.log(`Celsius: ${temperature.getCelsius}°C`);
  console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`);
  
