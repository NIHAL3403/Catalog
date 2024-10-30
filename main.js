const fs = require('fs');

// Decode the y-value from a given base
function decodeValue(base, value) {
    // Convert value to base 10 from the specified base
    return parseInt(value, base);
}

// Lagrange Interpolation to find the polynomial's constant term
function lagrangeInterpolation(points) {
    let constantTerm = 0;
    
    const k = points.length;
    for (let i = 0; i < k; i++) {
        let xi = points[i].x;
        let yi = points[i].y;

        let term = yi; // Start with yi
        for (let j = 0; j < k; j++) {
            if (i !== j) {
                let xj = points[j].x;
                // Lagrange interpolation formula for constant term
                term *= (0 - xj) / (xi - xj);
            }
        }
        constantTerm += term;
    }

    return Math.round(constantTerm); // Round to avoid floating-point issues
}

// Function to find the secret (constant term c) from the polynomial
function findSecretFromPolynomial(inputFile) {
    // Read and parse the input JSON file
    const data = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

    // Extract 'n' (number of points) and 'k' (minimum number of points required)
    const n = data.keys.n;
    const k = data.keys.k;

    // Collect the points
    const points = [];
    for (let i = 1; i <= n; i++) {
        if (data[i]) {
            const x = parseInt(i);  // x is the key (e.g., "1", "2", etc.)
            const base = parseInt(data[i].base);  // The base of the encoded y-value
            const value = data[i].value;  // The encoded y-value
            const y = decodeValue(base, value);  // Decode y-value based on its base
            points.push({ x, y });
        }
    }

    // Sort points by x-values
    points.sort((a, b) => a.x - b.x);

    // Use the first 'k' points to perform Lagrange interpolation
    const secret = lagrangeInterpolation(points.slice(0, k));

    // Output the secret (constant term)
    console.log(`The secret constant term (c) for ${inputFile} is: ${secret}`);
}

// Call the function with the input JSON files
findSecretFromPolynomial('firsttestcase1.json');
findSecretFromPolynomial('firsttestcase2.json');
