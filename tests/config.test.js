const lint = require('@commitlint/lint');
const config = require('./../src');

function validateCommit(commit) {
    return lint(commit, config.rules, { parserOpts: config.parserPreset.parserOpts });
}

describe('Test commit message linter settings', async () => {
    it('Requires type', async () => {
        expect((await validateCommit(': CON-9 Abcd.')).errors.length).toBeGreaterThan(0);
        expect((await validateCommit('changed: CON-9 Abcd.')).errors.length).toBeGreaterThan(0);
        expect((await validateCommit('unknown: CON-9 Abcd.')).errors.length).toBeGreaterThan(0);
    });

    it('Requires message', async () => {
        expect((await validateCommit('Changed:')).errors.length).toBeGreaterThan(0);
        expect((await validateCommit('xx')).errors.length).toBeGreaterThan(0);
    });

    it('Warn if missing reference', async () => {
        expect((await validateCommit('Fixed: Abcd')).warnings.length).toBeGreaterThan(0);
    });

    it('Validate reference', async () => {
        expect((await validateCommit('InProgress: CON-9 Abcd.')).errors).toEqual([]);
    });
});
