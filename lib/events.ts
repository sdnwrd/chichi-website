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
    date: '2025-05-10',
    day: 'SAT',
    dayNumber: '10',
    month: 'MAY',
    name: 'SATURDAY NIGHT LIVE',
    dj: 'DJ KATELI',
    genre: 'AFROBEATS & HIP-HOP',
    rsvpUrl: 'https://www.instagram.com/chichilounge/',
  },
  {
    id: '2',
    date: '2025-05-17',
    day: 'SAT',
    dayNumber: '17',
    month: 'MAY',
    name: 'BLACK OUT NIGHT',
    dj: 'SPECIAL GUEST',
    genre: 'R&B SPECIAL',
    rsvpUrl: 'https://www.instagram.com/chichilounge/',
  },
  {
    id: '3',
    date: '2025-05-24',
    day: 'SAT',
    dayNumber: '24',
    month: 'MAY',
    name: 'CLOSING OF MAY',
    dj: 'DJ YASIN COLAK',
    genre: 'AFROBEATS',
    rsvpUrl: 'https://www.instagram.com/chichilounge/',
  },
]
