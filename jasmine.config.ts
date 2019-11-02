const Jasmine = require("jasmine");
const JasmineConsoleReporter = require("jasmine-console-reporter");

const reporter = new JasmineConsoleReporter({
    colors: 1,
    cleanStack: 1,
    verbosity: 4,
    listStyle: "indent",
    timeUnit: "ms",
    timeThreshold: { ok: 500, warn: 1000, ouch: 3000 },
    activity: true,
    emoji: false,
    beep: true
});

const config = {
    spec_dir: "test",
    spec_files: ["**/*test.ts"],
    random: false,
    seed: null,
    stopSpecOnExpectationFailure: false
};

const jas = new Jasmine();

jas.loadConfig(config);
jas.jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
jas.env.clearReporters();
jas.addReporter(reporter);
jas.execute();
