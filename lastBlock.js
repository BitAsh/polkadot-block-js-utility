const { ApiPromise, WsProvider } = require('@polkadot/api');
const displayBlock = require('./displayBlock');

const latest = async () => {
    const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });
    const r = await api.rpc.chain.getBlock();
    displayBlock(r.block);
}

const main = async () => {
    try {
        await latest();
    } catch (err) {
        console.log(`failed: ${err}`);
    }
}

main();