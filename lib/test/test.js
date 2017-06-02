let should = require('should');
let colorize = require('../index');

describe('SMN-Colorize', function() {
    describe('colorize', function() {
        it('should return the first color', function() {
            let color = colorize(0);

            color.should.be.equal('#00ACC1');
        });
    });
});
