export default function getDefaultData(row_config, port_config, port) {

    console.log(`PORT VALUE IS: ${port}`);

    let hex_values = [];
    let i = 1;

    port != 'hide' ? hex_values.push(configureTopPorts(row_config, port_config)) : undefined;

    row_config.map((value, index) => {
        
        let row = [];
        
        port != 'hide' ? row.push(configureEndPorts(port_config, index, 1)) : undefined;
        
        Array.from(Array(value), () => {
            row.push({
                hexNumber: i++,
                resource: '',
                token: { number: '', probability: '' }
            });
        });
        
        port != 'hide' ? row.push(configureEndPorts(port_config, index, 2)) : undefined;

        hex_values.push({
            row: row
        });
    });

    port != 'hide' ? hex_values.push(configureBottomPorts(row_config, port_config)) : undefined;

    return hex_values;
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