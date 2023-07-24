import { ReactNode, createContext, useContext, useMemo } from "react";
import { Socket, io } from "socket.io-client";

const SocketContext = createContext(
  {} as {
    socket: Socket | undefined;
  }
);

const SOCKET_URL = process.env.SOCKET_API_ENDPOINT;
const socketOptions = {
  forceNew: true,
  autoConnect: false,
  transports: ["websocket"],
  reconnection: false,
  query: {},
};

const SocketProvider = ({ children }: { children: ReactNode }) => {
  const socket = useMemo(() => {
    if (!SOCKET_URL) {
      console.error("Missing SOCKET_API_ENDPOINT");
      return;
    }

    const _io = io(SOCKET_URL, socketOptions);

    _io.connect().on("connect", () => {
      console.log("socket is connected with id =", _io.id);
    });
    return _io;
  }, []);

  return (
    <SocketContext.Provider
      value={{
        socket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);

export default SocketProvider;
