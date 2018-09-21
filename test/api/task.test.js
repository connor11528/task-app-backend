const Hapi = require('hapi');
const {expect} = require('code');
const {
  describe,
  it,
  before,
} = exports.lab = require('lab').script();

const Server = require('../../src/index');

describe('API tests for application', () => {
  it('returns success for home route', async () => {
    const response = await Server.inject({
      method: 'GET',
      url: '/'
    });

    expect(response.statusCode).to.equal(200);
    expect(response.result).to.equal({ success: true });
  });
});

