module.exports = (data, card) => {
    let html = card.replace(/{%image%}/g, data.image);
    html = html.replace(/{%productName%}/g, data.productName);
    html = html.replace(/{%from%}/g, data.from);
    html = html.replace(/{%nutrients%}/g, data.nutrients);
    let organic = '';
    if (data.organic) {
        organic = 'Organic';
    } else {
        organic = '';
        html = html.replace(/{%not_organic%}/g, 'not_organic');
    }
    html = html.replace(/{%organic%}/g, organic);
    html = html.replace(/{%quantity%}/g, data.quantity);
    html = html.replace(/{%price%}/g, data.price);
    html = html.replace(/{%description%}/g, data.description);
    html = html.replace(/{%id%}/g, data.id);
    return html;
};
