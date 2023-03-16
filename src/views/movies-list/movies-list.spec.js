import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store'

import MoviesList from './movies-list.component';
import { Provider } from 'react-redux';

import ocean_8 from '../../media/ocean_8.jpeg';
import midnight_sun from '../../media/midnight_sun.jpeg';
import les_indestructibles_2 from '../../media/les_indestructibles_2.jpeg';
import sans_un_bruit from '../../media/sans_un_bruit.jpeg';
import creed_II from '../../media/creed_II.jpeg';

const middlewares = []
const mockStoreFunc = configureStore(middlewares)



describe.skip('Movies List', () => {
    it('Loader is displayed', async () => {
        const initialState = {};
        const mockStore = mockStoreFunc(initialState);

        await render(
            <Provider store={mockStore}>
                <MoviesList />
            </Provider>
        );

        const card = screen.getAllByTestId('card');
        expect(card).toBeDefined();
    });

    it('Movies are displayed', async () => {
        const initialState = {
            moviesReducer: {
                movies: [
                    {
                        id: '1',
                        title: 'Oceans 8',
                        img: ocean_8,
                        category: 'Comedy',
                        likes: 4,
                        dislikes: 1,
                        isLiked: undefined
                    },
                    {
                        id: '2',
                        title: 'Midnight Sun',
                        img: midnight_sun,
                        category: 'Comedy',
                        likes: 2,
                        dislikes: 0,
                        isLiked: undefined
                    },
                    {
                        id: '3',
                        title: 'Les indestructibles 2',
                        img: les_indestructibles_2,
                        category: 'Animation',
                        likes: 3,
                        dislikes: 1,
                        isLiked: undefined
                    },
                    {
                        id: '4',
                        title: 'Sans un bruit',
                        img: sans_un_bruit,
                        category: 'Thriller',
                        likes: 6,
                        dislikes: 6,
                        isLiked: undefined
                    },
                    {
                        id: '5',
                        title: 'Creed II',
                        img: creed_II,
                        category: 'Drame',
                        likes: 16,
                        dislikes: 2,
                        isLiked: undefined
                    }
                ]
            }
        };
        const mockStore = mockStoreFunc(initialState);

        await render(
            <Provider store={mockStore}>
                <MoviesList />
            </Provider>
        );

        const filter = screen.getAllByTestId('filter');
        expect(filter).toBeDefined();

        const card = screen.getAllByTestId('card');
        expect(card).toBeDefined().toBe(4);

        const pagination = screen.getAllByTestId('pagination');
        expect(pagination).toBeDefined();
    });
});
