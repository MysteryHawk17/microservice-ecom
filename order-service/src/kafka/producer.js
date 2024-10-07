const kafka = require('./kafka');

const producer = kafka.producer();

const produceOrderPlacedEvent = async (data) => {
  await producer.connect();
  await producer.send({
    topic: 'order-placed',
    messages: [
      { value: JSON.stringify(data) },
    ],
  });
  await producer.disconnect();
};

module.exports = { produceOrderPlacedEvent };