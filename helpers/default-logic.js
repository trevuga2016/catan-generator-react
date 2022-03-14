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
    console.clear();
    return hex_values;
}