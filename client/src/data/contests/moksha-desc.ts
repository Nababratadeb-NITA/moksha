import type { Contest } from '~/types'

type ClubName = 'fine-arts' | 'malhar' | 'dzire' | 'pixel'

interface MokshaDesc extends Omit<Contest, 'description' | 'instructions'> {
  description: [{ p: string }]
}

const mokshaContestsDesc: Record<ClubName, MokshaDesc[]> = {
  'fine-arts': [
    {
      id: 1,
      slug: 'magic-of-fingers',
      name: 'Magic of fingers',
      type: ['solo'],
      image: {
        src: '/images/contests/fine-arts/magic-of-fingers/poster-1164x1164.jpeg',
      },
      description: [
        {
          p: 'Who says a painter needs brush to unleash his imagination. All that was needed in this event were some water colours on one’s fingers and that’s how we crowned the Leonardo of finger painting.',
        },
      ],
    },
    {
      id: 3,
      slug: 'instant-portrait',
      name: 'Instant portrait',
      type: ['solo'],
      image: {
        src: '/images/contests/fine-arts/magic-of-fingers/poster-1164x1164.jpeg',
      },
      description: [
        {
          p: 'A portrait is a painting, photograph, sculpture, or other artistic representation of a person, in which the face and its expressions are predominant. The intent is to display the likeness, personality, and even the mood of the person.',
        },
      ],
    },
    {
      id: 4,
      slug: 'digital-illustration',
      name: 'Digital illustration',
      type: ['solo'],
      image: {
        src: '/images/contests/fine-arts/magic-of-fingers/poster-1164x1164.jpeg',
      },
      description: [
        {
          p: 'Digital illustration or computer illustration is the use of digital tools to produce images under the direct manipulation of the artist, usually through a pointing device such as a graphics tablet or, less commonly, a mouse. It is distinguished from computer-generated art, which is produced by a computer using mathematical models created by the artist. It is also distinct from digital manipulation of photographs, in that it is an original construction "from scratch". Photographic elements such as background or texture may be incorporated into such works, but they are not necessarily the primary basis.',
        },
      ],
    },
  ],
  malhar: [
    {
      id: 5,
      slug: 'solo-singing',
      name: 'Solo singing',
      type: ['solo'],
      image: {
        src: '/images/contests/malhar/solo_singing/poster-1-1024x1024.jfif',
      },
      description: [
        {
          p: 'This solo singing competition will be held in two stages: the preliminary round and the final round, contestants will have to submit their video of a maximum of 5 minutes for the preliminary round. selected candidates from the preliminary round will be competing in the Finals.',
        },
      ],
    },
    {
      id: 6,
      slug: 'melody-mania',
      name: 'Melody mania',
      subtitle: 'Group singing',
      type: ['team'],
      image: {
        src: '/images/contests/fine-arts/magic-of-fingers/poster-1164x1164.jpeg',
      },
      description: [
        {
          p: 'Have you been into group singing recently? Then Melody mania is the perfect platform to showcase your vocal talents The competition invites some of the best musicians from across India to blend their voices at the auditorium stage. This competition consists of two rounds: a preliminary round (online) from which a chosen group of contestants will advance to the final round(Auditorium).',
        },
      ],
    },
    {
      id: 7,
      slug: 'harmony-hunt',
      name: 'Harmony hunt',
      subtitle: 'Solo instrumental',
      type: ['solo'],
      image: {
        src: '/images/contests/fine-arts/magic-of-fingers/poster-1164x1164.jpeg',
      },
      description: [
        {
          p: 'This solo instrumental competition will be held in 2 stages: a preliminary round, from which selected contestants will advance to the final round and compete in the main event of ‘Moksha’, which will take place in the Auditorium.',
        },
      ],
    },
    {
      id: 8,
      slug: 'rap-battle',
      name: 'Rap battle',
      type: ['solo'],
      image: {
        src: '/images/contests/fine-arts/magic-of-fingers/poster-1164x1164.jpeg',
      },
      description: [
        {
          p: 'This rap battle competition will be held in two stages: a preliminary round, from which a chosen group of contestants will advance to the final round, which will take place in the auditorium.',
        },
      ],
    },
    {
      id: 9,
      slug: 'beatnik',
      name: 'Beatnik',
      subtitle: 'Beatboxing',
      type: ['solo'],
      image: {
        src: '/images/contests/fine-arts/magic-of-fingers/poster-1164x1164.jpeg',
      },
      description: [
        {
          p: 'Gear up! Beatboxers release your adrenalines to insane limits. Showcase your mini orchestra living in your throats by creating a wide range of sounds.',
        },
      ],
    },
  ],
  dzire: [
    {
      id: 10,
      slug: 'shinigami-showdown',
      name: 'Shinigami Showdown',
      subtitle: 'Solo dance competition',
      type: ['solo'],
      image: {
        src: '/images/contests/fine-arts/magic-of-fingers/poster-1164x1164.jpeg',
      },
      description: [
        {
          p: 'It is a solo dance competition, any form of dance can be performed.',
        },
      ],
    },
    {
      id: 11,
      slug: 'dragon-ballroom',
      name: 'Dragon Ballroom',
      subtitle: 'Duet competition',
      type: ['duet'],
      image: {
        src: '/images/contests/fine-arts/magic-of-fingers/poster-1164x1164.jpeg',
      },
      description: [
        {
          p: 'It is a duet dance competition, any form of dance can be performed, duet can be either of same sex or different sex.',
        },
      ],
    },
    {
      id: 12,
      slug: 'hunter-x-hunter-hoedown',
      name: 'Hunter x Hunter Hoedown',
      subtitle: 'Group competition',
      type: ['team'],
      image: {
        src: '/images/contests/fine-arts/magic-of-fingers/poster-1164x1164.jpeg',
      },
      description: [
        {
          p: 'It is a group dance competition where any form of dance can be performed.',
        },
      ],
    },
    {
      id: 13,
      slug: 'bob-till-you-drop',
      name: "Bob 'Till you Drop'",
      subtitle: 'Open dance competition',
      type: ['open'],
      image: {
        src: '/images/contests/fine-arts/magic-of-fingers/poster-1164x1164.jpeg',
      },
      description: [
        {
          p: "It's a dance competition which is open for all, any form of dance can be performed.",
        },
      ],
    },
  ],
  pixel: [
    {
      id: 14,
      slug: 'snap-quest',
      name: 'Snap Quest',
      subtitle: 'Treasure Hunt',
      image: {
        src: '/images/contests/fine-arts/magic-of-fingers/poster-1164x1164.jpeg',
      },
      type: ['team'],
      description: [
        {
          p: 'Teams must solve the puzzles in order to find the next clue. Teams must take a selfie with the said thing in the puzzle.',
        },
      ],
    },
  ],
}

export default mokshaContestsDesc
