import React, { useState } from 'react';
import { Button, Popover } from 'antd';
import { useTelegram } from '../hooks/useTelegram';

const UserInfo = () => {
    const [open, setOpen] = useState(false);

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    const userName = useTelegram().user.first_name
    const userId = useTelegram().user.Id
    const userPremium = useTelegram().user.is_premium
    return (
        <Popover
        content={userPremium ? <p style={{color: '#ffd700'}}>TelegramPremium</p> : <p>Нет подписки Premium</p>}
        title={userId}
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
        >
        <Button type="primary" style={{borderRadius: 100, width: 'content', height: 50, marginRight: '3vw', position: 'sticky'}}>{userName}</Button>
        </Popover>
    );
    };


export default UserInfo
