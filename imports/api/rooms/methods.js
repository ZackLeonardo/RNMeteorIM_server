import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Rooms from './rooms';

import { Mongo } from 'meteor/mongo';

export const findRoomById = new ValidatedMethod({
  name: 'rooms.findRoomById',
  validate: new SimpleSchema({
    _id: {type: Mongo.ObjectId, optional: false },
    name: { type: String, optional: false },
    users: {type: [Object], optional: false},
    status: {type: String, optional: false},
  }).validator(),
  run({roomId}) {
    return Messages.findRoomById({ roomId });
  },
});

export const findRoomByName = new ValidatedMethod({
  name: 'rooms.findRoomByName',
  validate: new SimpleSchema({
    _id: {type: Mongo.ObjectId, optional: false },
    name: { type: String, optional: false },
    users: {type: [Object], optional: false},
    status: {type: String, optional: false},
  }).validator(),
  run({roomName}) {
    return Messages.findRoomById({ roomName });
  },
});
