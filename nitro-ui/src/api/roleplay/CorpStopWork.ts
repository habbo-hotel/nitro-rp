import { CorpStopWorkComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '..';

export function CorpStopWork(): void
{
    SendMessageComposer(new CorpStopWorkComposer());
}
