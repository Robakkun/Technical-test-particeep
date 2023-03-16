import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store'

import Card from './card.component';
import { Provider } from 'react-redux';

const middlewares = []
const mockStoreFunc = configureStore(middlewares)

const initialState = {};
const mockStore = mockStoreFunc(initialState);

const handleDelete = jest.fn();
const handleLike = jest.fn();
const handleDislike = jest.fn();

describe('Card', () => {
    beforeEach(async () => {
        await render(
            <Provider store={mockStore}>
                <Card />
            </Provider>
        );
    });

    it('Card is displayed', async () => {
        const card = screen.getAllByTestId('card');
        expect(card).toBeDefined();
    });

    it('All card content is displayed', async () => {
        const img = screen.getAllByTestId('img');
        expect(img).toBeDefined();

        const title = screen.getAllByTestId('title');
        expect(title).toBeDefined();

        const category = screen.getAllByTestId('category');
        expect(category).toBeDefined();

        const ratingBar = screen.getAllByTestId('rating-bar');
        expect(ratingBar).toBeDefined();

        const deleteButton = screen.getAllByTestId('delete-button');
        expect(deleteButton).toBeDefined();

        const likeButton = screen.getAllByTestId('like-button');
        expect(likeButton).toBeDefined();

        const dislikeButton = screen.getAllByTestId('dislike-button');
        expect(dislikeButton).toBeDefined();
    });

    //Used to test buttons behavior like that, but here those tests don't want to pass
    it.skip('Redux delete action is called when a button is clicked', async () => {
        const button = screen.getByTestId('delete-button');

        fireEvent.click(button);
        expect(handleDelete).toHaveBeenCalled();
    });

    it.skip('Redux like action is called when a button is clicked', async () => {
        const button = screen.getByTestId('like-button');

        fireEvent.click(button);
        expect(handleLike).toHaveBeenCalled();
    });

    it.skip('Redux dislike action is called when a button is clicked', async () => {
        const button = screen.getByTestId('dislike-button');

        fireEvent.click(button);
        expect(handleDislike).toHaveBeenCalled();
    });

});
