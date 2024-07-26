console.log("there is a white bird.");

interface Person {
  firstName: string;
  lastName: string;
}

function sayHello(p: Person): string {
  return `Hello, ${p.firstName}!`;
}

const ada: Person = {
  firstName: "Ada",
  lastName: "Lovelace",
};

console.log(sayHello(ada));

const site = await fetch("https://www.deno.com");

const html = await site.text();

Deno.writeTextFile('./out/sample.html', html);

console.log('html exported.');
