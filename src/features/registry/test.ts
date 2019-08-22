import { RegistryStore } from "./store"

describe("TodoStore", () => {
	it("creates new todos", () => {

	  const store = new RegistryStore();

	  expect(store.name).toBe(undefined);
	  store.changeName("marko");
	  expect(store.name).toBe("marko");
	  
	})
  })