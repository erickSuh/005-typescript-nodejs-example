import { User } from '@models/User';

test('it should be ok', () => {
  const user = new User();
  user.name = 'Erick';

  expect(user.name).toEqual('Erick');
});
