describe("Capture web performance speed for NYL", () => {
  before(async () => {
    await browser.enablePerformanceAudits();
  });

  it("SSO Login page - Capture metrics data", async () => {
    await browser.url("https://sso.nylservices.net/login?clientId=5td2qm6ha7d0uhqifiqn6s49dc&callbackUri=/update-profile&secondCallbackUri=false");

    let metrics = await browser.getMetrics();
    console.log("Metrics - SSO Login page:", metrics);
  });
  
  after(async () => {
    await browser.disablePerformanceAudits();
  });
});
