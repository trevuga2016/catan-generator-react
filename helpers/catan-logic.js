export default function getBoardData(numbers_freq, resources_freq, row_config, port_config, port) {

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
        let i = 1;

        port != 'hide' ? hex_values.push(configureTopPorts(row_config, port_config)) : undefined;

        row_config.map((value, index) => {
            let row = [];

            port != 'hide' ? row.push(configureEndPorts(port_config, index, 1)) : undefined;

            Array.from(Array(value), () => {
                let resource = getResource(resource_array);
                let token = getToken(numbers_array, resource);
                row.push({
                    hexNumber: i++,
                    resource: resource,
                    token: token
                });
            });
            hex_values.push({
                row : row
            });

            port != 'hide' ? row.push(configureEndPorts(port_config, index, 2)) : undefined;
        });

        port != 'hide' ? hex_values.push(configureBottomPorts(row_config, port_config)) : undefined;
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

function configureTopPorts(row_config, port_config) {

    let first_row = [];
    let top_port_config = port_config.top;

    Array.from(Array(row_config[0] + 1), (k, v) => {
        let portData = top_port_config[v];
        let isPort = portData.type != '' ? true : false;
        first_row.push({
            hexNumber: 0,
            resource: '',
            token: { number: '', probability: '' },
            port: isPort ? { type: portData.type, rotation: portData.rotation } : undefined
        });
    });

    return { row: first_row };
}

function configureEndPorts(port_config, index, p) {

    let ends_port_config = port_config.ends;
    let portData = ends_port_config[index];
    let portPosition = portData.position != undefined ? portData.position : undefined;

    return {
        hexNumber: 0,
        resource: '',
        token: { number: '', probability: '' },
        port: portPosition == p ? { type: portData.type, rotation: portData.rotation } : undefined
    };
}

function configureBottomPorts(row_config, port_config) {

    let last_row = [];
    let bottom_port_config = port_config.bottom;

    Array.from(Array(row_config[row_config.length - 1] + 1), (k, v) => {
        let portData = bottom_port_config[v];
        let isPort = portData.type != '' ? true : false;
        last_row.push({
            hexNumber: 0,
            resource: '',
            token: { number: '', probability: '' },
            port: isPort ? { type: portData.type, rotation: portData.rotation } : undefined
        });
    });

    return { row: last_row };
}
