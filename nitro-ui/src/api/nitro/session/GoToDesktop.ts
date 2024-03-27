import { DesktopViewComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '..';

export function GoToDesktop(): void
{
    SendMessageComposer(new DesktopViewComposer());
}
