import { GetCfhStatusMessageComposer } from '@nitro-rp/renderer';
import { FC } from 'react';
import { LocalizeText, ReportState, ReportType, SendMessageComposer } from '../../../api';
import { Button, Column, Text } from '../../../common';
import { useHelp } from '../../../hooks';

export const HelpIndexView: FC<{}> = props =>
{
    const { setActiveReport = null } = useHelp();

    const onReportClick = () =>
    {
        setActiveReport(prevValue =>
        {
            const currentStep = ReportState.SELECT_USER;
            const reportType = ReportType.BULLY;

            return { ...prevValue, currentStep, reportType };
        });
    }

    return (
        <>
            <Column grow center gap={ 1 }>
                <Text fontSize={ 3 }>{ LocalizeText('help.main.frame.title') }</Text>
                <Text>{ LocalizeText('help.main.self.description') }</Text>
            </Column>
            <Column gap={ 1 }>
                <Button onClick={ onReportClick }>{ LocalizeText('help.main.bully.subtitle') }</Button>
                <Button disabled={ true }>{ LocalizeText('help.main.self.tips.title') }</Button>
            </Column>
            <Button variant="link" textColor="black" onClick={ () => SendMessageComposer(new GetCfhStatusMessageComposer(false)) }>{ LocalizeText('help.main.my.sanction.status') }</Button>
        </>
    )
}
