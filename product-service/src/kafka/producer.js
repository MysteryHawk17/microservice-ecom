const kafka = require('./kafka');

const producer = kafka.producer();

const produceProductCreatedEvent = async (data) => {
  await producer.connect();
  await producer.send({
    topic: 'product-created',
    messages: [
      { value: JSON.stringify(data) },
    ],
  });
  await producer.disconnect();
};

const produceInventoryUpdatedEvent = async (data) => {
  await producer.connect();
  await producer.send({
    topic: 'inventory-updated',
    messages: [
      { value: JSON.stringify(data) },
    ],
  });
  await producer.disconnect();
};

module.exports = { produceProductCreatedEvent, produceInventoryUpdatedEvent };