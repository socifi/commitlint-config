const types = require('./types');

module.exports = {
    rules: {
        'type-enum': [2, 'always', Object.values(types)],
        'type-case': [2, 'always', 'pascal-case'],
        'type-empty': [2, 'never'],
        'scope-empty': [2, 'always'],
        'subject-empty': [2, 'never'],
        'references-empty': [1, 'never'],
    },
    parserPreset: {
        parserOpts: {
            issuePrefixes: [': [a-zA-Z]{2,3}-'],
        },
    },
};
