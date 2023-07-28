import { useContext } from 'react';
import { SocketContext } from '.';

export const useSocket = () => useContext(SocketContext);
