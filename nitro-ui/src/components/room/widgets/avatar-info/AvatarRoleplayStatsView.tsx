import { FixedSizeStack, GetTicker, NitroPoint, NitroRectangle, RoomObjectType } from '@nitro-rp/renderer';
import { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { GetNitroInstance, GetRoomObjectBounds, GetRoomObjectScreenLocation, GetRoomSession } from '../../../../api';
import { Base, BaseProps, Text } from '../../../../common';

interface AvatarRoleplayStatsViewProps extends BaseProps<HTMLDivElement>
{
    objectId: number;
    category: number;
    userType?: number;
}

const LOCATION_STACK_SIZE: number = 25;
const BUBBLE_DROP_SPEED: number = 3;
const SPACE_AROUND_EDGES = 10;

let FIXED_STACK: FixedSizeStack = null;
let MAX_STACK = -1000000;
let FADE_TIME = 1;

export function AvatarRoleplayStatsView({ objectId = -1, category = -1, userType = -1, position = 'absolute', classNames = [], style = {}, children = null, ...rest }: AvatarRoleplayStatsViewProps) {
    const [ pos, setPos ] = useState<{ x: number, y: number }>({ x: null, y: null });
        const elementRef = useRef<HTMLDivElement>();
    
        const updatePosition = useCallback((bounds: NitroRectangle, location: NitroPoint) =>
        {
            if(!bounds || !location || !FIXED_STACK) return;
    
            let offset = -(elementRef.current.offsetHeight);
    
            if((userType > -1) && ((userType === RoomObjectType.USER) || (userType === RoomObjectType.BOT) || (userType === RoomObjectType.RENTABLE_BOT)))
            {
                offset = (offset + ((bounds.height > 50) ? 15 : 0));
            }
            else
            {
                offset = (offset - 14);
            }
    
            FIXED_STACK.addValue((location.y - bounds.top));
    
            let maxStack = FIXED_STACK.getMax();
    
            if(maxStack < (MAX_STACK - BUBBLE_DROP_SPEED)) maxStack = (MAX_STACK - BUBBLE_DROP_SPEED);
    
            MAX_STACK = maxStack;
    
            const deltaY = (location.y - maxStack);
    
            let x = ~~(location.x - (elementRef.current.offsetWidth / 2));
            let y = ~~(deltaY + offset);
    
            const maxLeft = ((GetNitroInstance().width - elementRef.current.offsetWidth) - SPACE_AROUND_EDGES);
            const maxTop = ((GetNitroInstance().height - elementRef.current.offsetHeight) - SPACE_AROUND_EDGES);
    
            if(x < SPACE_AROUND_EDGES) x = SPACE_AROUND_EDGES;
            else if(x > maxLeft) x = maxLeft;
    
            if(y < SPACE_AROUND_EDGES) y = SPACE_AROUND_EDGES;
            else if(y > maxTop) y = maxTop;
    
            setPos({ x, y });
        }, [ userType ]);
    
        const getClassNames = useMemo(() =>
        {
            const newClassNames: string[] = [ 'nitro-context-menu' ];
                
            newClassNames.push((pos.x !== null) ? 'visible' : 'invisible');
    
            if(classNames.length) newClassNames.push(...classNames);
    
            return newClassNames;
        }, [ pos, classNames ]);
    
        const getStyle = useMemo(() =>
        {
            let newStyle: CSSProperties = {};
    
            newStyle.left = (pos.x || 0);
            newStyle.top = (pos.y || 0);
            newStyle.opacity = 1;
    
            if(Object.keys(style).length) newStyle = { ...newStyle, ...style };
    
            return newStyle;
        }, [ pos, style ]);
    
        useEffect(() =>
        {
            if(!elementRef.current) return;
            
            const update = (time: number) =>
            {
                if(!elementRef.current) return;
        
                const bounds = GetRoomObjectBounds(GetRoomSession().roomId, objectId, category);
                const location = GetRoomObjectScreenLocation(GetRoomSession().roomId, objectId, category);
    
                updatePosition(bounds, location);
            }
    
            GetTicker().add(update);
    
            return () =>
            {
                GetTicker().remove(update);
            }
        }, [ objectId, category, updatePosition ]);
    
        useEffect(() =>
        {
            FIXED_STACK = new FixedSizeStack(LOCATION_STACK_SIZE);
            MAX_STACK = -1000000;
            FADE_TIME = 1;
        }, []);
        
        return (
            <Base innerRef={ elementRef } position={ position } classNames={ getClassNames } style={ getStyle } { ...rest }>
                <Text bold>Hello world.</Text>
            </Base>
        );
}
