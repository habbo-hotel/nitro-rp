import { NitroEvent } from '@nitro-rp/renderer';
import { DispatchEvent } from './DispatchEvent';
import { UI_EVENT_DISPATCHER } from './UI_EVENT_DISPATCHER';

export const DispatchUiEvent = (event: NitroEvent) => DispatchEvent(UI_EVENT_DISPATCHER, event);
