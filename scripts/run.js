const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners(); // 
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract delployed by:", owner.address);

    // if we have functions, we must "test" them...
    // Question: do we have to test just public functions?

    let waveCount;
    waveCount = await waveContract.getTotalSomething();
    
    let waveTxn = await waveContract.doSomething();
    await waveTxn.wait();
  
    waveCount = await waveContract.getTotalSomething();

    // now we will simulate other ppl connecting to our contract and using doSomething

    waveTxn = await waveContract.connect(randomPerson).doSomething();
    await waveTxn.wait();

    waveCount = await waveContract.getTotalSomething();

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