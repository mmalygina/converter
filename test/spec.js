const Converter = require('../src/converter');
const expect = require('chai').expect;

describe('describe converted functionality', () => {
    let converter;
    beforeEach(() => {
        converter = new Converter();
    });
    it('converter exists', () => {
        expect(converter).to.be.ok;
    })
    it('converts from F to C', () => {
        expect(converter.convert(0, 'C')).to.equal(32);
    })
    it('converts from C to F', () => {
        expect(converter.convert(24, 'F')).to.equal(-4);
    })
});