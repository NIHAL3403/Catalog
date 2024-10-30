```bash
Run the main script:
node main.js
```
### Catalog



This project implements a simplified version of Shamir's Secret Sharing algorithm using Lagrange interpolation to recover a secret (constant term) from polynomial points encoded in different bases. The implementation includes decoding of y-values from various bases and uses the specified points to derive the secret.

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [License](#license)

## Features
- Decode y-values from different bases (2 to 16).
- Implement Lagrange interpolation to find the secret.
- Read input from JSON files specifying points.
- Outputs the secret constant term derived from the polynomial.

## Requirements
- Node.js (version 12 or higher)

## Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/catalog.git

2.Navigate to the project directory:
```bash
cd catalog
```
3.Install dependencies (if any):
```bash
npm install
```

### Usage
```bash
Prepare your input JSON files (testcase1.json and testcase2.json) in the project directory. The structure of these files should follow the format:
json
{
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    ...
}
```
Run the main script:
```bash

node main.js
The output will display the secret constant term for each test case provided in the JSON files.
```
### File Structure

```bash
catalog/
├── main.js            # Main script to execute the algorithm
├── testcase1.json     # Input test case 1
└── testcase2.json     # Input test case 2
```
### Output Screenshots


![output Screenshot](Catalog/Catalog output.png)

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Notes:
- Make sure to replace `https://github.com/yourusername/catalog.git` with the actual URL of your repository.
- Adjust any details as necessary to better suit your project.





