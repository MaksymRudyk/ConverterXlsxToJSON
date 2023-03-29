const xlsx = require('xlsx');
const fs = require('fs');

// Load Excel file
const workbook = xlsx.readFile('xlsx/test1.xlsx');

// Extract data from first worksheet
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

// Convert data to JSON
const formattedData = data.map(([name, login]) => ({ login, name: name.trim().split('/')[0] }))
const jsonData = JSON.stringify(formattedData);

// Write JSON data to file
fs.writeFile('outputFile/dataArrOfObj.txt', jsonData, err => {
    if (err) throw err;
    console.log('JSON data written to file');
});