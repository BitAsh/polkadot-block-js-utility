const { ApiPromise, WsProvider } = require('@polkadot/api');
const displayBlock = require('./displayBlock');

const byNumber = async (blockNumber) => {
    const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });
    const blockHash = await api.rpc.chain.getBlockHash(blockNumber);
    const r = await api.rpc.chain.getBlock(blockHash);
    displayBlock(r.block);
}

const main = async () => {
    try {
        await byNumber(process.argv[2]);
    } catch (err) {
        console.log(`failed: ${err}`);
    }
}

main();
