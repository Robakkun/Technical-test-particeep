import React from 'react';
import { render, screen } from '@testing-library/react';

import RatingBar from './rating-bar.component';

describe('RatingBar', () => {
    it('component elements are displayed', async () => {
        await render(
            <RatingBar />
        );

        const likesLabel = screen.getAllByTestId('likes-label');
        expect(likesLabel).toBeDefined();

        const likesLine = screen.getAllByTestId('likes-line');
        expect(likesLine).toBeDefined();

        const dislikesLabel = screen.getAllByTestId('dislikes-label');
        expect(dislikesLabel).toBeDefined();

        const dislikesLine = screen.getAllByTestId('dislikes-line');
        expect(dislikesLine).toBeDefined();
    });
});
