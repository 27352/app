module.exports = {
    "transform": { '^.+\\.ts?$': 'ts-jest' },
    "testEnvironment": 'node',
    "testRegex": '/test/.*\\.(Test|Spec)?\\.(ts|tsx)$',
    "moduleFileExtensions": ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
