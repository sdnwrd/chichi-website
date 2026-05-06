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
    name: 'SATURDAY NIGHT LIVE',
    dj: 'DJ KATELI',
    genre: 'AFROBEATS & HIP-HOP',
    rsvpUrl: 'https://www.instagram.com/chichilounge/',
  },
  {
    id: '2',
    date: '2026-05-16',
    day: 'SAT',
    dayNumber: '16',
    month: 'MAY',
    name: 'BLACK OUT NIGHT',
    dj: 'SPECIAL GUEST',
    genre: 'R&B SPECIAL',
    rsvpUrl: 'https://www.instagram.com/chichilounge/',
  },
  {
    id: '3',
    date: '2026-05-23',
    day: 'SAT',
    dayNumber: '23',
    month: 'MAY',
    name: 'CLOSING OF MAY',
    dj: 'DJ YASIN COLAK',
    genre: 'AFROBEATS',
    rsvpUrl: 'https://www.instagram.com/chichilounge/',
  },
]
