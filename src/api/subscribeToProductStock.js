import openSocket from 'socket.io-client';

const socket = openSocket(window.ENVIRONMENT_CONFIG.SERVICE_HOST);

const subscribeToProductStock = (productCode, callback) => {
  socket.on(productCode, stockLevel => callback(null, stockLevel));
  socket.emit('subscribeToProductStock', productCode);
}

export default subscribeToProductStock;
