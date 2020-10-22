const displayBlock = (block) => {
    // console.log(block);
    console.log(`header hash: ${block.header.hash.toHex()}`);

    console.log('extrinsics: ');
    block.extrinsics.forEach((ex, index) => {
    // the extrinsics are decoded by the API, human-like view
    console.log('------------------------');
    console.log(`index=${index}`);
    console.log(ex.toHuman());

    const { isSigned, meta, method: { args, method, section } } = ex;

    // explicit display of name, args & documentation
    console.log(`${section}.${method}(${args.map((a) => a.toString()).join(', ')})`);

    // signer/nonce info
    if (isSigned) {
      console.log(`signer=${ex.signer.toString()}, nonce=${ex.nonce.toString()}`);
    }
  });
}

module.exports = displayBlock;
