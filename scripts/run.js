const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners(); // 
    const musicContractFactory = await hre.ethers.getContractFactory('MusicPortal');
    const musicContract = await musicContractFactory.deploy();
    await musicContract.deployed();
    console.log("Contract deployed to:", musicContract.address);
    console.log("Contract delployed by:", owner.address);

    // if we have functions, we must "test" them...
    // Question: do we have to test just public functions?

    let recCount;
    recCount = await musicContract.getTotalRecs();
    console.log(recCount.toNumber());
    let waveTxn = await musicContract.makeRec("link1...", "fire song");
    await waveTxn.wait();
  
    recCount = await musicContract.getTotalRecs();
    console.log(recCount.toNumber());
    // now we will simulate other ppl connecting to our contract and using doSomething

    waveTxn = await musicContract.connect(randomPerson).makeRec("link2... should have no description", "blah");
    await waveTxn.wait();

    recCount = await musicContract.getTotalRecs();
    console.log(recCount.toNumber());

    let allRecs =  await musicContract.getAllRecs();
    console.log(allRecs);

  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();