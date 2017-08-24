import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Messages from './messages';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

// export const findMessagesByRoomId = new ValidatedMethod({
//   name: 'messages.find',
//   validate: new SimpleSchema({
//     room: { type: String, optional: false },
//   }).validator(),
//   run({room}) {
//     return Messages.find({ room });
//   },
// });

Meteor.methods({
  'Messages.findMessagesByRoomId': ({room}) => {
//     const message = Messages.findOne({room}).message;
// // Look ma, no callbacks!
// console.log(message);

    // var myCursor = Messages.find({},{fields: { room }});
    // // var myDocument = myCursor.hasNext() ? myCursor.next() : null;
    console.log('room value is : ' + room.room);
    var myCursor = Messages.find(room).fetch();
    // var myCursor = Messages.find({ room: 'ttenJqkmS3LKyoc7f'});
    let count = 0;
    myCursor.forEach((message) => {
    console.log(`Title of post ${count}: ${message.text}`);
    count += 1;
    });
    // var myDoc
// var myDocument = myCursor[0];

    // var myDocument = myCursor[0];
    //
    // console.log('Messages.findMessagesByRoomId : ' + room.room + 'and res: ' + myDocument);
    //
    return myCursor[0];
  },
  'Messages.addOne': (message) => {
    // return Messages.insert(message);
    return Messages.update(
      {id: message.id},
      {
        $set: { message }
      },
      { upsert: true }
    )
  },
});

Meteor.publish('Messages.findMessagesByRoomId', function (room) {
  console.log('room: '+ JSON.stringify(room));
  var myCursor = Messages.find(room);
  // let count = 0;
  // myCursor.forEach((message) => {
  // console.log(`Title of post ${count}: ${message.text}`);
  // count += 1;
  // });
  console.log(myCursor);
  return Messages.find(room);
});

Meteor.publish('messages', function () {
  // console.log('room: '+ JSON.stringify(room));
  // var myCursor = Messages.find();
  // console.log(myCursor);
  return Messages.find();
});
