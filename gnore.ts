import {program} from '@caporal/core';

program
    .argument("<name>","Name to greet")
    .option("--greeting <word>", "Greeting to use", {
    default: "Sagnik",
})
    .argument("<other-name>","Another argument")
    .argument("[third-arg]","This argument is optional")
    .action(({logger,args}) => {
    logger.info("Hello, %s and %s !",args.name,args.otherName);
})        

program.run();
