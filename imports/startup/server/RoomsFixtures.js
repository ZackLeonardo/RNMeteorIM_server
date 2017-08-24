import Rooms from '../../api/rooms/rooms';

if (Rooms.find().count() === 0) {
  const seed = [
    {
      id: '134fb7f0-86df-11e7-8347-f14dca35fc33',
      name: 'maizou',
      myNickName: 'keaizou',
      userIds: [
        '134fb7f0-86df-11e7-8347-f14dca35fc15',
        '134fb7f0-86df-11e7-8347-f14dca35fc16',
      ]
    }
  ];

  seed.forEach((room) => {
    Rooms.insert(room);
  });

}
