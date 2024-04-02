import { PoliceArrestComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../..';

export function PoliceArrestUser(username: string, crime: string, sentence: number): void
{
    SendMessageComposer(new PoliceArrestComposer(username, crime, sentence));
}
