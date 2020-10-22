const { ApiPromise, WsProvider } = require('@polkadot/api');
const displayBlock = require('./displayBlock');

const byHash = async (blockHash) => {
    const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });
    const r = await api.rpc.chain.getBlock(blockHash);
    displayBlock(r.block);
}

const main = async () => {
    try {
        await byHash(process.argv[2]);
    } catch (err) {
        console.log(`failed: ${err}`);
    }
}

main();

