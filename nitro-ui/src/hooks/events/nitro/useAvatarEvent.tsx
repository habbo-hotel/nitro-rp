import { NitroEvent } from '@nitro-rp/renderer';
import { GetAvatarRenderManager } from '../../../api';
import { useEventDispatcher } from '../useEventDispatcher';

export const useAvatarEvent = <T extends NitroEvent>(type: string | string[], handler: (event: T) => void) => useEventDispatcher(type, GetAvatarRenderManager().events, handler);
