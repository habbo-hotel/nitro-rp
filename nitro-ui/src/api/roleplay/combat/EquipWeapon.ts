import { EquipWeaponComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../../';

export function EquipWeapon(uniqueName: string): void {
    SendMessageComposer(new EquipWeaponComposer(uniqueName));
}
