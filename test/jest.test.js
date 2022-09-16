test('devo conhecer as principais assertivas do JEST', () => {
  let numero = null;
  expect(numero).toBeNull();

  numero = 10;
  expect(numero).not.toBeNull();

  expect(numero).toBe(10);

  expect(numero).toEqual(10);

  expect(numero).toBeGreaterThan(9);

  expect(numero).toBeLessThan(11);
});

test('Devo saber trabalhar com objetos', () => {
  const obj = { name: 'Rodrigo', mail: 'rod@mail.com' };

  expect(obj).toHaveProperty('name');

  expect(obj).toHaveProperty('name', 'Rodrigo');

  expect(obj.name).toBe('Rodrigo');

  const obj2 = { name: 'Rodrigo', mail: 'rod@mail.com' };

  expect(obj).toEqual(obj2); // é igual porque tem os mesmos valores

  expect(obj).not.toBe(obj2); // mas não é o mesmo obj porque são duas vars distintas
});
