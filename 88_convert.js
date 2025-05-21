
let choice = prompt(
    "Choose conversion:\n1. Kilograms to Gram\n2. Kilometers to Meter\n3. INR to USD\n4. Celsius to Fahrenheit"
);

let input, result;

switch (Number(choice)) {
    case 1:
        input = parseFloat(prompt("Enter weight in kilograms:"));
        result = input * 1000;
        alert("Weight in Gram: "+result+" Gram");
        break;

    case 2:
        input = parseFloat(prompt("Enter distance in kilometers:"));
        result = input * 1000;
        alert("Distance in meter: " + result.toFixed(2));
        break;

    case 3:
        input = parseFloat(prompt("Enter amount in INR:"));
        result = input/85.25 ; // Adjust this rate as needed
        alert("Amount in USD: $" + result.toFixed(2));
        break;

    case 4:
        input = parseFloat(prompt("Enter temperature in Celsius:"));
        result = (input * 9) / 5 + 32;
        alert("Temperature in Fahrenheit: " + result.toFixed(2) + "°F");
        break;

    default:
        alert("Invalid choice!");
}
