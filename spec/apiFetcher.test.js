import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import apiFetcher from '../react-client/api/fetch';

describe('Axios Fetch function', () => {
  const endPoint = '/item/1/description';
  const data = {
    id: 1,
    title: 'Product 1 Movies',
    department: 'Movies',
    brand: 'Ocean\'s Thirteen',
    model: 'Karel Camacho',
    price: 8,
    shipping: 'One Day Shipping',
    stock: true,
    description: [
      'Vestibulum id odio vel turpis dictum commodo.',
      'Sed nec odio lacinia, rhoncus sapien letius, bibendum sapien.',
    ],
  };

  it('returns the correct data when fetch is called', () => {
    // This sets the mock adapter on the default instance
    const mock = new MockAdapter(axios);

    // Mock any GET request to endPoint
    mock.onGet(endPoint).reply(200, data);

    // arguments for reply are (status, data, headers)
    apiFetcher(1)
      .then((response) => {
        expect(response.data).toEqual(data);
      });
  });

  it('returns 200 when fetch is called', () => {
    const mock = new MockAdapter(axios);
    mock.onGet(endPoint).reply(200, data);
    apiFetcher(1)
      .then((response) => {
        expect(response.status).toEqual(200);
      });
  });
});
