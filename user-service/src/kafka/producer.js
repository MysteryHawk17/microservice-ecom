const kafka = require('./kafka');

const producer = kafka.producer();

const produceUserRegisteredEvent = async (data) => {
  await producer.connect();
  await producer.send({
    topic: 'user-registered',
    messages: [
      { value: JSON.stringify(data) },
    ],
  });
  await producer.disconnect();
};

const produceUserUpdatedEvent = async (userId,data) => {
  await producer.connect();
  await producer.send({
    topic: 'user-updated',
    messages: [
      { value: JSON.stringify({userId,data}) },
    ],
  });
  await producer.disconnect();
};

module.exports = { produceUserRegisteredEvent, produceUserUpdatedEvent };

