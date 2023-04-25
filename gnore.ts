const BASE_URL = `https://raw.githubusercontent.com/github/gitignore/main/`;

const main = () => {
  console.log(
    `gnore v.0.1 \n Enter comma seperated programming languages to generate gitingore for`,
  );
  const queries = prompt("")?.trim().split(",");
  queries!.forEach(async (query) => {
    const q = await fetch(`${BASE_URL}${query}.gitignore`);
    const text = await q.text();
    const fileStatus = prompt("Use default file ? (Y/n)");
    if (fileStatus === "Y") {
      const _response = await Deno.writeTextFile(`.gitignore`, text);
      console.log(`Written ${query}'s gitignore to .gitingore ! Cheers !!`);
    } else {
      const fileName = prompt("Enter file name : ");
      const _response = await Deno.writeTextFile(fileName!, text);
      console.log(`Written ${query}'s gitignore to ${fileName} ! Cheers !!`);
    }
  });
};

await main();
