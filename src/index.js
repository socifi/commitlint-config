module.exports = {
    rules: {
        'type-enum': [2, 'always', ['Changed', 'Fixed', 'Removed', 'Added', 'Depreciated', 'Test', 'InProgress']],
        'type-case': [2, 'always', 'pascal-case'],
        'type-empty': [2, 'never'],
        'scope-empty': [2, 'always'],
        'subject-empty': [2, 'never'],
        'references-empty': [2, 'never'],
    },
    parserPreset: {
        parserOpts: {
            // @todo change it to regex
            issuePrefixes: ['AD-', 'AN-', 'BEA-', 'BUS-', 'COM-', 'CON-', 'SUP-', 'RND-'],
        },
    },
};
