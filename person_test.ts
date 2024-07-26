import { assertEquals } from "jsr:@std/assert";
import Person, { sayHello } from "./person.ts";

Deno.test("sayHello function", () => {
  const grace: Person = {
    lastName: "Hopper",
    firstName: "Grace",
  };

  assertEquals("Hello, Grace!", sayHello(grace));
});
