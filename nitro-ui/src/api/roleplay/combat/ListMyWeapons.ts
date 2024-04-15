import { SendMessageComposer } from '../..';
import { ListMyWeaponsComposer } from '@nitro-rp/renderer/src/nitro/communication/messages/outgoing/roleplay/combat/ListMyWeaponsComposer';

export function ListMyWeapons(): void {
    SendMessageComposer(new ListMyWeaponsComposer());
}
