const lint = require('@commitlint/lint');
const config = require('./../src');

function validateCommit(commit) {
    return lint(commit, config.rules, {parserOpts: config.parserPreset.parserOpts})
}

describe('Test commit message linter settings', async () => {
    it('Requires type', async () => {
        expect((await validateCommit(': Abcd. CON-9')).errors.length).toBeGreaterThan(0);
        expect((await validateCommit('changed: Abcd. CON-9')).errors.length).toBeGreaterThan(0);
        expect((await validateCommit('unknown: Abcd. CON-9')).errors.length).toBeGreaterThan(0);
    });

    it('Requires message', async () => {
        expect((await validateCommit('Changed:')).errors.length).toBeGreaterThan(0);
        expect((await validateCommit('xx')).errors.length).toBeGreaterThan(0);
    });

    it('Requires reference', async () => {
        expect((await validateCommit('Fixed: Abcd')).errors.length).toBeGreaterThan(0);
    });

    it('Validate type', async () => {
        expect((await validateCommit('InProgress: Abcd. CON-9')).errors).toEqual([]);
    })
});
