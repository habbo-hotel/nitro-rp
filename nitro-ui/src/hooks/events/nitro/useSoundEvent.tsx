import { NitroEvent } from '@nitro-rp/renderer';
import { GetNitroInstance } from '../../../api';
import { useEventDispatcher } from '../useEventDispatcher';

export const useSoundEvent = <T extends NitroEvent>(type: string | string[], handler: (event: T) => void, enabled = true) => useEventDispatcher(type, GetNitroInstance().soundManager.events, handler, enabled);
