import { expect, test } from "@oclif/test";

describe("init", () => {
  test
    .stderr()
    .command(["init"])
    .catch((error) => {
      expect(error.message).to.contain("Could not construct app name.");
    });

  test
    .stderr()
    .command(["init", "test-project"])
    .catch((error) => {
      expect(error.message).to.contain(
        "Could not construct installation path."
      );
    });
});
