import { test, expect } from "@playwright/test";
import { LoginPage }  from "../pages/login-page";
import { SecurePage } from "../pages/secure-page";
import { validUser, invalidUsers } from "../data/users";

test.describe("Login ? Autenticacion", () => {

  test("@smoke login exitoso con credenciales validas", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(validUser.username, validUser.password);

    const securePage = new SecurePage(page);
    await securePage.expectLoaded();
    expect(await securePage.isLoaded()).toBeTruthy();
  });

  invalidUsers.forEach((user, index) => {
    test(`@regression login fallido [${index + 1}] ? ${user.expectedError}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.login(user.username, user.password);

      expect(await loginPage.isFlashVisible()).toBeTruthy();
      await loginPage.expectError(user.expectedError);
    });
  });

});
