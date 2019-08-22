import { UserStore } from "./user-store"

describe("User store tests", () => {
	it("is not logged in on start", () => {

		const store = new UserStore();

		expect(store.isLoggedIn).toBe(false);
	})

	it("can log in", () => {

		const store = new UserStore();
		store.login("marko", "pass");
		expect(store.isLoggedIn).toBe(true);
		expect(store.loggedUserInfo.name = "marko");
	})
})