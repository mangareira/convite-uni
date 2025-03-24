import { useContext } from 'react';
import ContextMensagens from '../contexts/ContextMensagens';

const useMensagens = () => useContext(ContextMensagens);

export default useMensagens;
