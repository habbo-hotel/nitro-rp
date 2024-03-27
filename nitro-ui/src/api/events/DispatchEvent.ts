import { IEventDispatcher, NitroEvent } from '@nitro-rp/renderer';

export const DispatchEvent = (eventDispatcher: IEventDispatcher, event: NitroEvent) => eventDispatcher.dispatchEvent(event);
