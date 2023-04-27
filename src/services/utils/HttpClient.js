import APIError from 'errors/APIError';
import delay from 'utils/delay';

class HttpCliente {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path) {
    await delay(500);

    const response = await fetch(`${this.baseUrl}${path}`);

    let body = null;

    if (response.headers.get('Content-Type').includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) return body;

    throw new APIError(response, body);
  }
}

export default HttpCliente;
