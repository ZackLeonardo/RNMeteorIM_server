import Users from '../../api/users/users';

if (Users.find().count() === 0) {
  const seed = [
    {
      name: 'mailisi',
      avatar: 'https://facebook.github.io/react/img/logo_og.png',
    },
    {
      name: 'zoudeyi',
      avatar: 'https://facebook.github.io/react/img/logo_og.png',
    },
  ];

  seed.forEach((user) => {
    Users.insert(user);
  });



}
