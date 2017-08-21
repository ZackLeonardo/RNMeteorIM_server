import Messages from '../../api/messages/messages';

if (Messages.find().count() === 0) {
  const seed = [
    {
      text: 'I am react',
      createdAt: '2017-07-07 12:12:12',
      roomId: 'TR2CwAfnwmr6kvWa4',
      userId: '2cXcdiCkjJooWjG4m',
      status: 'read',
    },
    {
      text: 'I am redux',
      createdAt: '2017-07-07 13:12:12',
      roomId: 'TR2CwAfnwmr6kvWa4',
      userId: '9HA2FhppLdbxdycqu',
      status: 'read',
    },
    {
      text: 'I am meteor',
      createdAt: '2017-07-07 14:12:12',
      roomId: 'TR2CwAfnwmr6kvWa4',
      userId: '2cXcdiCkjJooWjG4m',
      status: 'read',
    },
    {
      text: 'I am all of u',
      createdAt: '2017-07-07 15:12:12',
      roomId: 'TR2CwAfnwmr6kvWa4',
      userId: '9HA2FhppLdbxdycqu',
      status: 'read',
    },
  ];

  seed.forEach((message) => {
    Messages.insert(message);
  });
}
