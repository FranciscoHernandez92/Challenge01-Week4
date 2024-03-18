export type GentlemanList = {
  id: number;
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
  isSelected: boolean;
};

export const gentleman: GentlemanList[] = [
  {
    id: 1,
    name: 'Bertin Osborne',
    status: 'Alive',
    profession: 'Youtuber',
    twitter: '@osbourne',
    picture: 'assets/bertin.jpg',
    alternativeText: 'Osbourne pointing at you',
    isSelected: true,
  },
  {
    id: 2,
    name: 'The Fary',
    status: 'RIP',
    profession: 'Influencer',
    twitter: 'pending',
    picture: 'assets/fary.jpg',
    alternativeText: 'The Fary pointing at you',
    isSelected: false,
  },
  {
    id: 3,
    name: 'Julius Churchs',
    status: 'Alive',
    profession: 'Java developer',
    twitter: '@julius_churchs',
    picture: 'assets/julio.jpg',
    alternativeText: 'Churchs pointing at you',
    isSelected: true,
  },
  {
    id: 4,
    name: 'John and a half',
    status: 'Alive',
    profession: 'Teacher',
    twitter: '@john_halfman',
    picture: 'assets/john.jpg',
    alternativeText: 'I will find you and ...',
    isSelected: true,
  },
];
