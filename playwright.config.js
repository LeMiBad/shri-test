const config = {
    testDir: "./tests",
    use: {
        screenshot: 'only-on-failure',
        trace: process.env.CI ? 'retain-on-failure' : 'on',
        ignoreHTTPSErrors: true,
        viewport: { width: 1280, height: 720 },
        timezoneId: 'Etc/UTC',
    },
    retries: 0,
    reporter: [['html', { open:  'always' }]],
    quiet: true,
    fullyParallel: true,
    expect: {
        timeout: process.env.CI ? 15000 : 5000,
    },
    storageState: null,
};

export default config;
