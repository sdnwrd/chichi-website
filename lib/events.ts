export interface Event {
  id: string
  date: string
  day: string
  dayNumber: string
  month: string
  name: string
  dj: string
  genre: string
  rsvpUrl: string
}

export const events: Event[] = [
  {
    id: '1',
    date: '2026-05-09',
    day: 'SAT',
    dayNumber: '09',
    month: 'MAY',
    name: 'DOLCE VITA',
    dj: 'Sound by: DELUNA',
    genre: 'LATIN, HIP-HOP, AFRO, HOUSE & MORE',
    rsvpUrl: 'https://www.instagram.com/chichilounge/',
  },
  {
    id: '2',
    date: '2026-05-16',
    day: 'SAT',
    dayNumber: '??',
    month: 'MAY',
    name: 'COMING SOON',
    dj: '???',
    genre: '???',
    rsvpUrl: 'https://www.instagram.com/chichilounge/',
  },
  {
    id: '3',
    date: '2026-05-23',
    day: 'SAT',
    dayNumber: '??',
    month: 'MAY',
    name: 'COMING SOON',
    dj: '???',
    genre: '???',
    rsvpUrl: 'https://www.instagram.com/chichilounge/',
  },
]
