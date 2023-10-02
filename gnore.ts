import {program} from '@caporal/core';


//sample endpoint to hit : https://github.com/github/gitignore/blob/main/Python.gitignore

const BASE_URL = "https://raw.githubusercontent.com/github/gitignore/main/"

function testFetch(BASE_URL: string,lang: string) : void {
    const p = fetch(`${BASE_URL}/${lang}.gitignore`);
    p.then((val) => {
        console.log(p);
    })
}

testFetch(BASE_URL,'Python');



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
