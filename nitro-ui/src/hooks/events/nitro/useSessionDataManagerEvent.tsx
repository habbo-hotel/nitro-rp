import { NitroEvent } from '@nitro-rp/renderer';
import { GetSessionDataManager } from '../../../api';
import { useEventDispatcher } from '../useEventDispatcher';

export const useSessionDataManagerEvent = <T extends NitroEvent>(type: string | string, handler: (event: T) => void) => useEventDispatcher(type, GetSessionDataManager().events, handler);
