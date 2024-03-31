import { RoleplayStatsContainer } from "./roleplay-stats-container/RoleplayStatsContainer";
import { useAvatarInfoWidget } from "../../hooks";
import { AvatarInfoUser } from "../../api";
import { useEffect, useState } from "react";
import { Text } from "../../common";

export function TargetRoleplayStats() {
    const [targetUserID, setTargetUserID] = useState<number>();
    const { avatarInfo = null, setAvatarInfo } = useAvatarInfoWidget();

    function onToggle() {
        setAvatarInfo(null)
        setTargetUserID(undefined);
    }

    useEffect(() => {
        if (avatarInfo?.type ===  AvatarInfoUser.PEER) {
            if ((avatarInfo as AvatarInfoUser).webID === targetUserID) {
                return;
            }
            setTargetUserID((avatarInfo as AvatarInfoUser).webID)
        }
    }, [targetUserID, avatarInfo]);
    
    if (!targetUserID) {
        return null;
    }

    return (
        <>
        <Text bold variant="danger" style={{padding: 4}}>vs.</Text>
        <RoleplayStatsContainer userID={targetUserID}  onToggle={onToggle}/>
        </>
    )
}