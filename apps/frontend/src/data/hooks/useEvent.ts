import { useContext } from 'react';

import ContextEvent from '../contexts/ContextEvents';

const useEvent = () => useContext(ContextEvent);
export default useEvent;
