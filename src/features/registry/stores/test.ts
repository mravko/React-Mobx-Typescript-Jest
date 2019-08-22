import { RegistryStore } from "./store"

describe("Registry store tests", () => {
	it("changes name", () => {

	  const store = new RegistryStore();

	  expect(store.name).toBe(undefined);
	  store.changeName("marko");
	  expect(store.name).toBe("marko");
	  
	})

	it("executes async method", async () => {

		const store = new RegistryStore();
  
		expect(store.data.length).toBe(0);
		expect(store.hasData).toBe(false);
		await store.loadData();
		expect(store.data.length).toBe(2);
		expect(store.hasData).toBe(true);
	  })
  })