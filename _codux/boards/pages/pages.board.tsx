import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Pages from '../../../pages';

export default createBoard({
    name: 'Pages',
    Board: () => <Pages />
});
