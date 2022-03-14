export default function getDefaultData(row_config) {
    let hex_values = [];
    let i = 1;
    row_config.map((value) => {
        let row = [];
        Array.from(Array(value), () => {
            row.push({
                hexNumber: i++,
                resource: '',
                token: { number: '', probability: '' }
            });
        });
        hex_values.push({
            row: row
        });
    });
    return hex_values;
}