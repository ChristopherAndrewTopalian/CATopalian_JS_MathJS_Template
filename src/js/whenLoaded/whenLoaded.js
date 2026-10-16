// whenLoaded.js

function whenLoaded()
{
    let a = math.fraction('2/5');
    let b = math.fraction('1/10');

    // Add the fractions
    let result = math.add(a, b);

    // Format the inputs and the result as rational fractions
    let strA = math.format(a, { fraction: 'ratio' });
    let strB = math.format(b, { fraction: 'ratio' });
    let strResult = math.format(result, { fraction: 'ratio' });

    // Combine them into a full equation string
    let equationText = `${strA} + ${strB} = ${strResult}`;

    let resultDiv = ce('div');
    resultDiv.textContent = equationText;
    resultDiv.style.fontFamily = 'Arial';
    resultDiv.style.fontSize = '50px';
    resultDiv.style.fontWeight = 'bold';
    resultDiv.style.color = 'rgb(255, 255, 255)';
    ba(resultDiv);
}

/*
function whenLoaded()
{
    let a = math.fraction('2/5');
    let b = math.fraction('1/10');

    // Add the fractions
    let result = math.add(a, b);

    let resultDiv = ce('div');
    resultDiv.textContent = math.format(result, { result: 'ratio' });
    resultDiv.style.fontFamily = 'Arial';
    resultDiv.style.fontSize = '50px';
    resultDiv.style.fontWeight = 'bold';
    ba(resultDiv);
}
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

