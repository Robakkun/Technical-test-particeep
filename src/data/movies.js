const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    img: '',
    category: 'Comedy',
    likes: 4,
    dislikes: 1,
    isLiked: undefined
  },
  {
    id: '2',
    title: 'Midnight Sun',
    img: '',
    category: 'Comedy',
    likes: 2,
    dislikes: 0,
    isLiked: undefined
  },
  {
    id: '3',
    title: 'Les indestructibles 2',
    img: '',
    category: 'Animation',
    likes: 3,
    dislikes: 1,
    isLiked: undefined
  },
  {
    id: '4',
    title: 'Sans un bruit',
    img: '',
    category: 'Thriller',
    likes: 6,
    dislikes: 6,
    isLiked: undefined
  },
  {
    id: '5',
    title: 'Creed II',
    img: '',
    category: 'Drame',
    likes: 16,
    dislikes: 2,
    isLiked: undefined
  },
  {
    id: '6',
    title: 'Pulp Fiction',
    img: '',
    category: 'Thriller',
    likes: 11,
    dislikes: 3,
    isLiked: undefined
  },
  {
    id: '7',
    title: 'Pulp Fiction',
    img: '',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32,
    isLiked: undefined
  },
  {
    id: '8',
    title: 'Seven',
    img: '',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    isLiked: undefined
  },
  {
    id: '9',
    title: 'Inception',
    img: '',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    isLiked: undefined
  },
  {
    id: '10',
    title: 'Gone Girl',
    img: '',
    category: 'Thriller',
    likes: 22,
    dislikes: 12,
    isLiked: undefined
  },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
