var assert = chai.assert;

suite('Resultados de los tests:', function() {
    test('Detecta un Header', function() {
        var tokens = lexer('[HOLA]');
assert.equal(tokens[0].type,'header');
    });
    test('Detecta un Blanco', function() {
        var tokens = lexer(' ');
assert.equal(tokens[0].type,'blanks');
    });
    test('Errores', function() {
        var tokens = lexer('!!@%%***¿¿*+');
assert.equal(tokens[0].type,'error');
    });
});