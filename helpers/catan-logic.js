let numbers_freq = {
    '2': 1,
    '3': 2,
    '4': 2,
    '5': 2,
    '6': 2,
    '8': 2,
    '9': 2,
    '10': 2,
    '11': 2,
    '12': 1
};

let resources_freq = {
    'Wheat': 4,
    'Wood': 4,
    'Sheep': 4,
    'Brick': 3,
    'Ore': 3,
    'Desert': 1
};

let row_config = [3, 4, 5, 4, 3];

export default function generateCatanBoard() {

    console.log('Generating board values...');

    let numbers_array = [];
    let resource_array = [];
    let hex_values = [];

    for (const [key, freq] of Object.entries(numbers_freq)) {
        for (let i = 1; i <= freq; i++) {
            numbers_array.push(key);
        }
    }
    
    for (const [key, freq] of Object.entries(resources_freq)) {
        for (let i = 1; i <= freq; i++) {
            resource_array.push(key);
        }
    }

    if (resource_array.length == getTotalNumOfHexes(row_config)) {

        row_config.map((value) => {
            let row = [];
            Array.from(Array(value), (v, i) => {
                let resource = getResource(resource_array);
                let token = getToken(numbers_array, resource);
                row.push({
                    hexNumber: i,
                    resource: resource,
                    token: token
                });
            });
            hex_values.push({
                row : row
            });
        });
    }

    return hex_values;
}

function getResource(resource_array) {
    let i = Math.floor(Math.random() * resource_array.length);
    let r = resource_array[i];
    resource_array.splice(i, 1);
    return r;
}

function getToken(numbers_array, resource) {
    if (resource == 'Desert') {
        return { number: '', probability: '' }
    } else {
        let i = Math.floor(Math.random() * numbers_array.length);
        let n = numbers_array[i];
        numbers_array.splice(i, 1);
        if (n == '2' || n == '12') {
            return { number: n, probability: '\u2022' }
        } else if (n == '3' || n == '11') {
            return { number: n, probability: '\u2022\u2022' }
        } else if (n == '4' || n == '10') {
            return { number: n, probability: '\u2022\u2022\u2022' }
        } else if (n == '5' || n == '9') {
            return { number: n, probability: '\u2022\u2022\u2022\u2022' }
        } else if (n == '6' || n == '8') {
            return { number: n, probability: '\u2022\u2022\u2022\u2022\u2022' }
        } else {
            return { number: '', probability: '' }
        }
    }
}

function getTotalNumOfHexes(row_config) {
    let count = 0;
    row_config.map((value) => {
        Array.from(Array(value), () => {
            count++;
        });
    });
    return count;
}
