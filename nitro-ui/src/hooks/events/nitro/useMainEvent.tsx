import { NitroEvent } from '@nitro-rp/renderer';
import { GetNitroInstance } from '../../../api';
import { useEventDispatcher } from '../useEventDispatcher';

export const useMainEvent = <T extends NitroEvent>(type: string | string[], handler: (event: T) => void) => useEventDispatcher(type, GetNitroInstance().events, handler);
