const reversePath = (url) => {
    const { BUG_ID = '0' } = process.env;

    return `${url}?bug_id=${BUG_ID}`
};

module.exports = { reversePath }