import { ReactNode, createContext, useMemo } from 'react';
import { Socket, io } from 'socket.io-client';

export const SocketContext = createContext(
  {} as {
    socket: Socket | undefined;
  }
);

const SOCKET_URL = process.env.SOCKET_API_ENDPOINT;
const socketOptions = {
  forceNew: true,
  autoConnect: false,
  transports: ['websocket'],
  reconnection: false,
  query: {},
};

const SocketProvider = ({ children }: { children: ReactNode }) => {
  const socket = useMemo(() => {
    if (!SOCKET_URL) {
      console.error('Missing SOCKET_API_ENDPOINT');
      return;
    }

    const socketIO = io(SOCKET_URL, socketOptions);

    socketIO.connect().on('connect', () => {
      console.log('socket is connected with id =', socketIO.id);
    });

    // eslint-disable-next-line consistent-return
    return socketIO;
  }, []);

  const socketValue = useMemo(
    () => ({
      socket,
    }),
    [socket]
  );

  return (
    <SocketContext.Provider value={socketValue}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
