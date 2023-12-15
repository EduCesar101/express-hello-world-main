const request = require('supertest');
const { app } = require('./app');

describe('/test endpoints', () => {
  
  it('check if endpoint /req returns `Yo!`', async () => {
    const data = await request(app).get('/req');
    console.log(data.responde);
    expect(data.statusCode).toBe(200);
    expect(data.text).toBe('Yo!');
  });
  
  it('check if endpoint /req returns `Ya!`', async () => {
    const data = await request(app).get('/req');
    console.log(data.responde);
    expect(data.statusCode).toBe(200);
    expect(data.text).toBe('Ya!');
  });

  it('check if endpoint /meunome returns my name', async () => {
    const data = await request(app).get('/meunome');
    console.log(data.responde);
    expect(data.statusCode).toBe(200);
    expect(data.text).toBe('Meu nome é Eduardo César Rodrigues de Souza!');
  });

  it('check if endpoint /meunome returns my name', async () => {
    const data = await request(app).get('/meunome');
    console.log(data.responde);
    expect(data.statusCode).toBe(200);
    expect(data.text);
  });

  it('check if endpoint /meunome returns my name', async () => {
    const data = await request(app).get('/meunome');
    console.log(data.responde);
    expect(data.statusCode).toBe(200);
    expect(data.text).toBe('Meu nome');
  });

  it('check if endpoint /tico returns `teco`', async () => {
    const data = await request(app).get('/tico');
    console.log(data.responde);
    expect(data.statusCode).toBe(200);
    expect(data.text).toBe('teco');
  });
  it('check if endpoint /tico returns `tico`', async () => {
    const data = await request(app).get('/tico');
    console.log(data.responde);
    expect(data.statusCode).toBe(200);
    expect(data.text).toBe('tico');
  });
  
  it('check if endpoint /pokemons returns name of pokemons in JSON', async () => {
    const data = await request(app).get('/pokemons');
    console.log(data.responde);
    expect(data.statusCode).toBe(200);
    expect(data.json);
  });
  it('check if endpoint /pokemons returns TEXT', async () => {
    const data = await request(app).get('/pokemons');
    console.log(data.responde);
    expect(data.statusCode).toBe(200);
    expect(data.text);
  });

  it('check if endpoint /series returns name of series in JSON', async () => {
    const data = await request(app).get('/series');
    console.log(data.responde);
    expect(data.statusCode).toBe(200);
    expect(data.json);
  });

  it('check if endpoint /series returns name of series in JSON but in status code 404', async () => {
    const data = await request(app).get('/series');
    console.log(data.responde);
    expect(data.statusCode).toBe(404);
    expect(data.json);
  });
});