import React, { useState } from 'react';
import { Button, Popover } from 'antd';
import { useTelegram } from '../hooks/useTelegram';

const UserInfo = () => {
    const [open, setOpen] = useState(false);

    const hide = () => {
        setOpen(false);
    };

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    const username = useTelegram().user.first_name
    return (
        <Popover
        content={<a onClick={hide}>Закрыть</a>}
        title={username}
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
        >
        <Button type="primary">{username + '\n'}</Button>
        </Popover>
    );
    };


export default UserInfo
