module.exports = {
    hooks: {
        'commit-msg': 'commitlint --extends ./src/index.js -E HUSKY_GIT_PARAMS',
    },
};
