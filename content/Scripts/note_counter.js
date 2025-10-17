const COUNTER_FILE = app.vault.getAbstractFileByPath('counter.txt');

async function getAndIncrementCounter() {
    let count = 0;
    if (COUNTER_FILE) {
        const data = await app.vault.read(COUNTER_FILE);
        count = parseInt(data) || 0;
    }
    count += 1;
    await app.vault.modify(COUNTER_FILE, String(count));
    return count;
}

module.exports = async function () {
    return await getAndIncrementCounter();
};
