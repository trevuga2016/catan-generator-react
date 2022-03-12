let row_config = [3, 4, 5, 4, 3];

export default function getDefaultData() {
    let hex_values = [];
    row_config.map((value) => {
        let row = [];
        Array.from(Array(value), (v, i) => {
            row.push({
                hexNumber: i,
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