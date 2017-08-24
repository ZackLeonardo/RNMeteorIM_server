import Messages from '../../api/messages/messages';

if (Messages.find().count() === 0) {
  const seed = [
    {
      id: '9404d913-aae9-5b58-a2d9-a0dbafc35f6a',
      text: 'I am react',
      createdAt: '2017-07-07 12:12:12',
      roomId: '134fb7f0-86df-11e7-8347-f14dca35fc33',
      userId: '134fb7f0-86df-11e7-8347-f14dca35fc15',
      status: 'read',
    },
    {
      id: '9404d913-aae9-5b58-a2d9-a0dbafc35f6b',
      text: 'I am redux',
      createdAt: '2017-07-07 13:12:12',
      roomId: '134fb7f0-86df-11e7-8347-f14dca35fc33',
      userId: '134fb7f0-86df-11e7-8347-f14dca35fc16',
      status: 'read',
    },
    {
      id: '9404d913-aae9-5b58-a2d9-a0dbafc35f6c',
      text: 'I am meteor',
      createdAt: '2017-07-07 14:12:12',
      roomId: '134fb7f0-86df-11e7-8347-f14dca35fc33',
      userId: '134fb7f0-86df-11e7-8347-f14dca35fc15',
      status: 'read',
    },
    {
      id: '9404d913-aae9-5b58-a2d9-a0dbafc35f6d',
      text: 'I am all of u',
      createdAt: '2017-07-07 15:12:12',
      roomId: '134fb7f0-86df-11e7-8347-f14dca35fc33',
      userId: '134fb7f0-86df-11e7-8347-f14dca35fc16',
      status: 'read',
    },
  ];

  seed.forEach((message) => {
    Messages.insert(message);
  });
}
