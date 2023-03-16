import ocean_8 from '../media/ocean_8.jpeg';
import midnight_sun from '../media/midnight_sun.jpeg';
import les_indestructibles_2 from '../media/les_indestructibles_2.jpeg';
import sans_un_bruit from '../media/sans_un_bruit.jpeg';
import creed_II from '../media/creed_II.jpeg';
import pulp_fiction from '../media/pulp_fiction.jpeg';
import seven from '../media/seven.jpeg';
import inception from '../media/inception.jpeg';
import gone_girl from '../media/gone_girl.jpeg';

const movies = [
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
  },
  {
    id: '6',
    title: 'Pulp Fiction',
    img: pulp_fiction,
    category: 'Thriller',
    likes: 11,
    dislikes: 3,
    isLiked: undefined
  },
  {
    id: '7',
    title: 'Pulp Fiction',
    img: pulp_fiction,
    category: 'Thriller',
    likes: 12333,
    dislikes: 32,
    isLiked: undefined
  },
  {
    id: '8',
    title: 'Seven',
    img: seven,
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    isLiked: undefined
  },
  {
    id: '9',
    title: 'Inception',
    img: inception,
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    isLiked: undefined
  },
  {
    id: '10',
    title: 'Gone Girl',
    img: gone_girl,
    category: 'Thriller',
    likes: 22,
    dislikes: 12,
    isLiked: undefined
  },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
