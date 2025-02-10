function processLargeDataset(data: any[]) {
    let results = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let processedItem = {
            id: item.id,
            name: item.name.toUpperCase(),
            value: item.value * 2,
            timestamp: new Date().toISOString()
        };
        results.push(processedItem);
    }

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let processedItem = {
            id: item.id,
            name: item.name.toUpperCase(),
            value: item.value * 2,
            timestamp: new Date().toISOString()
        };
        results.push(processedItem);
    }

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let processedItem = {
            id: item.id,
            name: item.name.toUpperCase(),
            value: item.value * 2,
            timestamp: new Date().toISOString()
        };
        results.push(processedItem);
    }

    return results;
}