import {TimeOfDayQueryComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../../';

export function timeOfDayQuery(): void
{
    SendMessageComposer(new TimeOfDayQueryComposer());
}
