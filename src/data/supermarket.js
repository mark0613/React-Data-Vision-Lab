import salesData from './supermarket_sales.json';

export const BAR_DATA = Object.values(salesData.reduce((acc, current) => {
    const productLine = current['Product line'];
    const totalValue = parseFloat(current.Total);

    if (!acc[productLine]) {
        acc[productLine] = {
            'Product line': productLine,
            Total: 0,
        };
    }

    acc[productLine].Total += totalValue;
    return acc;
}, {}));

export const PIE_DATA = Object.values(salesData.reduce((acc, current) => {
    const customerType = current['Customer type'];
    const totalValue = parseFloat(current.Total);

    if (!acc[customerType]) {
        acc[customerType] = {
            'Customer type': customerType,
            Total: 0,
        };
    }

    acc[customerType].Total += totalValue;
    return acc;
}, {}));

export const SCATTER_DATA = Object.values(salesData.reduce((acc, current) => {
    if (current['Product line'] !== 'Food and beverages') {
        return acc;
    }

    const unitPrice = Math.round(parseFloat(current['Unit price']));
    const quantity = parseInt(current.Quantity, 10);

    if (!acc[unitPrice]) {
        acc[unitPrice] = {
            'Unit price': unitPrice,
            Quantity: 0,
        };
    }

    acc[unitPrice].Quantity += quantity;

    return acc;
}, {}))
    .map((item) => ({
        'Unit price': item['Unit price'],
        Quantity: item.Quantity,
    }));
