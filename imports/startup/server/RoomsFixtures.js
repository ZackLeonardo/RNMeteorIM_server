import Rooms from '../../api/rooms/rooms';

if (Rooms.find().count() === 0) {
  const seed = [
    {
      name: 'maizou',
      myNickName: 'keaizou',
      userIds: [
        '2cXcdiCkjJooWjG4m',
        '9HA2FhppLdbxdycqu',
      ]
    }
  ];

  seed.forEach((room) => {
    Rooms.insert(room);
  });

}
