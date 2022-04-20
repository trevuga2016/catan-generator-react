import { useEffect, useState } from 'react';

export const useCatanLogic = (numbers_freq, resources_freq, row_config, port_config, port) => {

    const [boardData, setBoardData] = useState(null);
    const [stats, setStats] = useState(null);

    const generateBoardData = () => {
        let numbers_array = [];
        let resource_array = [];
        let hex_values = [];

        let ports_list = port === 'randomize' ? getPortTypeList(port_config) : undefined;

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

        if (resource_array.length === getTotalNumOfHexes(row_config)) {

            port !== 'hide' ? hex_values.push(configureTopPorts(row_config, port_config, ports_list)) : undefined;

            row_config.map((value, index) => {
                let row = [];

                port !== 'hide' ? row.push(configureEndPorts(port_config, index, 1, ports_list)) : undefined;

                Array.from(Array(value), () => {
                    let resource = getResource(resource_array);
                    let terrain = getTerrain(resource);
                    let token = getToken(numbers_array, resource);
                    row.push({
                        resource: resource,
                        terrain: terrain,
                        token: token
                    });
                });
                hex_values.push({
                    row : row
                });

                port !== 'hide' ? row.push(configureEndPorts(port_config, index, 2, ports_list)) : undefined;
            });

            port !== 'hide' ? hex_values.push(configureBottomPorts(row_config, port_config, ports_list)) : undefined;
        }
        setBoardData(hex_values);
        generateBoardStats(hex_values, resources_freq);
    };

    const generateBoardStats = (hex_values, resources_freq) => {

        const resource_array = [];
        const boardStats = [];

        for (const [key, freq] of Object.entries(resources_freq)) {
            for (let i = 1; i <= freq; i++) {
                resource_array.push(key);
            }
        }

        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }

        const uResourceArray = resource_array.filter(unique);
        if (uResourceArray.includes('Desert')) {
            uResourceArray.splice(uResourceArray.indexOf('Desert'), 1);
        }

        if (hex_values) {
            uResourceArray.map((resource) => {
                let numbers = [];
                let probability = 0;
                hex_values.map((row) => {
                    const rowData = row?.row;
                    rowData.map((hex) => {
                        if (hex.resource === resource) {
                            numbers.push(hex?.token?.number);
                        }
                    });
                });
                let uNumbers = numbers.filter(unique);
                uNumbers.map((num) => {
                    probability = probability + getProbability(parseInt(num));
                });
                probability = (probability * 100).toFixed(2);
                boardStats.push({
                    resource: resource,
                    probability: probability
                });
            });
        } else {
            boardStats.push({
                resource: '',
                probability: ''
            });
        }
        boardStats.sort((a, b) => b.probability - a.probability);
        setStats(boardStats);
    }

    useEffect(() => {
        generateBoardData();
    }, [numbers_freq, resources_freq, row_config, port_config, port]);

    return { boardData, stats, generateBoardData };
}

const getResource = (resource_array) => {
    let i = Math.floor(Math.random() * resource_array.length);
    let r = resource_array[i];
    resource_array.splice(i, 1);
    return r;
}

const getTerrain = (resource) => {
    if (resource === 'Desert') {
        return 'Desert';
    } else if (resource === 'Brick') {
        return 'Hills';
    } else if (resource === 'Wool') {
        return 'Pastures';
    } else if (resource === 'Ore') {
        return 'Mountains';
    } else if (resource === 'Grain') {
        return 'Fields';
    } else if (resource === 'Lumber') {
        return 'Forests';
    }
}

const getToken = (numbers_array, resource) => {
    if (resource === 'Desert') {
        return { number: '', probability: '' }
    } else {
        let i = Math.floor(Math.random() * numbers_array.length);
        let n = numbers_array[i];
        numbers_array.splice(i, 1);
        if (n === '2' || n === '12') {
            return { number: n, probability: '\u2022' }
        } else if (n === '3' || n === '11') {
            return { number: n, probability: '\u2022\u2022' }
        } else if (n === '4' || n === '10') {
            return { number: n, probability: '\u2022\u2022\u2022' }
        } else if (n === '5' || n === '9') {
            return { number: n, probability: '\u2022\u2022\u2022\u2022' }
        } else if (n === '6' || n === '8') {
            return { number: n, probability: '\u2022\u2022\u2022\u2022\u2022' }
        } else {
            return { number: '', probability: '' }
        }
    }
}

const getTotalNumOfHexes = (row_config) => {
    let count = 0;
    row_config.map((value) => {
        Array.from(Array(value), () => {
            count++;
        });
    });
    return count;
}

const configureTopPorts = (row_config, port_config, ports_list) => {

    let first_row = [];
    let topPortConfig = port_config?.top;

    Array.from(Array(topPortConfig.length), (k, v) => {
        let portData = topPortConfig[v];
        let isPort = portData?.type !== '';
        let i = ports_list !== undefined && isPort ? Math.floor(Math.random() * ports_list?.length) : undefined;
        let portType = ports_list !== undefined && isPort ? ports_list[i] : portData?.type;
        let terrain = portType ? 'Harbor' : '';
        first_row.push({
            resource: portType,
            terrain: terrain,
            token: { number: '', probability: '' },
            rotation: portData?.rotation
        });
        if (ports_list !== undefined && i !== undefined) {
            ports_list.splice(i, 1);
        }
    });

    return { row: first_row };
}

const configureEndPorts = (port_config, index, p, ports_list) => {

    let endsPortConfig = port_config?.ends;
    let rowPortData = endsPortConfig[index];
    let portData = rowPortData[p - 1];
    let isPort = portData?.type !== '';

    let i = ports_list !== undefined && isPort ? Math.floor(Math.random() * ports_list?.length) : undefined;
    let portType = ports_list !== undefined && isPort ? ports_list[i] : portData?.type;
    let terrain = portType ? 'Harbor' : '';
    if (ports_list !== undefined && i !== undefined) {
        ports_list.splice(i, 1);
    }
    return {
        resource: portType,
        terrain: terrain,
        token: { number: '', probability: '' },
        rotation: portData?.rotation
    };
}

const configureBottomPorts = (row_config, port_config, ports_list) => {

    let last_row = [];
    let bottomPortConfig = port_config?.bottom;

    Array.from(Array(bottomPortConfig?.length), (k, v) => {
        let portData = bottomPortConfig[v];
        let isPort = portData?.type !== '';
        let i = ports_list !== undefined && isPort ? Math.floor(Math.random() * ports_list.length) : undefined;
        let portType = ports_list !== undefined && isPort ? ports_list[i] : portData?.type;
        let terrain = portType ? 'Harbor' : '';
        last_row.push({
            resource: portType,
            terrain: terrain,
            token: { number: '', probability: '' },
            rotation: portData?.rotation
        });
        if (ports_list !== undefined && i !== undefined) {
            ports_list.splice(i, 1);
        }
    });

    return { row: last_row };
}

const getPortTypeList = (port_config) => {
    let port_types = [];
    port_config.top.map((value) => {
        if (value.type !== '') {
            port_types.push(value.type);
        }
    });
    port_config.ends.map((value) => {
        value.map((v) => {
            if (v.type !== '') {
                port_types.push(v.type);
            }
        });
    });
    port_config.bottom.map((value) => {
        if (value.type !== '') {
            port_types.push(value.type);
        }
    });
    return port_types;
}

const getProbability = (number) => {
    if (number === 2 || number === 12) {
        return (1 / 36);
    } else if (number === 3 || number === 11) {
        return (2 / 36);
    } else if (number === 4 || number === 10) {
        return (3 / 36);
    } else if (number === 5 || number === 9) {
        return (4 / 36);
    } else if (number === 6 || number === 8) {
        return (5 / 36);
    }
}
