import Users from '../../api/users/users';

if (Users.find().count() === 0) {
  const seed = [
    {
      id: '134fb7f0-86df-11e7-8347-f14dca35fc15',
      name: 'mailisi',
      avatar: 'https://facebook.github.io/react/img/logo_og.png',
    },
    {
      id: '134fb7f0-86df-11e7-8347-f14dca35fc16',
      name: 'zoudeyi',
      avatar: 'https://facebook.github.io/react/img/logo_og.png',
    },
  ];

  seed.forEach((user) => {
    Users.insert(user);
  });



}
