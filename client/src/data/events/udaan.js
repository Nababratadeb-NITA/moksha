const dzire = [
  {
    id: 1,
    slug: 'flash-mob',
    name: 'Flash Mob',
    club: 'dzire',
    image: {
      sources: [
        { srcSet: '/images/events/dzire/flash-mob/poster-512x512.webp', type: 'image/webp' },
        { srcSet: '/images/events/dzire/flash-mob/poster-512x512.jpeg', type: 'image/jpeg' },
        { srcSet: '/images/events/dzire/flash-mob/poster-1024x1024.webp 2x', type: 'image/webp' },
        { srcSet: '/images/events/dzire/flash-mob/poster-1024x1024.jpeg 2x', type: 'image/jpeg' },
      ],
      src: '/images/events/dzire/flash-mob/poster-512x512.jpeg',
    },
    description: [
      {
        p: 'Step into the rhythm of the night and let your senses come alive at our electrifying dance extravaganza! Join us for a pulsating fusion of music, movement, and magic as we ignite the dance floor with unparalleled energy. So mark your calendars and join us when we bring down the house with a night of rhythm, unity, and pure collegiate energy!',
      },
    ],
  },
]

const malhar = [
  {
    id: 2,
    slug: 'street-jam',
    name: 'Street Jam',
    club: 'malhar',
    image: {
      sources: [
        { srcSet: '/images/events/malhar/street-jam/poster-512x512.webp', type: 'image/webp' },
        { srcSet: '/images/events/malhar/street-jam/poster-512x512.jpeg', type: 'image/jpeg' },
        { srcSet: '/images/events/malhar/street-jam/poster-1024x1024.webp 2x', type: 'image/webp' },
        { srcSet: '/images/events/malhar/street-jam/poster-1024x1024.jpeg 2x', type: 'image/jpeg' },
      ],
      src: '/images/events/malhar/street-jam/poster-512x512.jpeg',
    },
    description: [
      {
        p: "Elevate your campus experience with a night that hits all the right notes – our sensational college singing event is here! 🎤 Get ready to be swept away by the melodious talents of your fellow students as they take center stage and captivate hearts with their incredible voices. From soulful ballads to high-energy anthems, this event celebrates the diverse musical talents that make our college community shine. Whether you're a shower-singer extraordinaire or a die-hard music lover, this is your chance to soak in the enchanting atmosphere, cheer for your favorites, and discover the next big vocal sensation. Join us for a harmonious evening that will leave you humming and applauding for more!",
      },
    ],
  },
  {
    id: 3,
    slug: 'theme-song',
    name: 'Theme song of Moksha',
    club: 'malhar',
    image: {
      sources: [
        { srcSet: '/images/events/malhar/theme-song/poster-512x512.webp', type: 'image/webp' },
        { srcSet: '/images/events/malhar/theme-song/poster-512x512.jpeg', type: 'image/jpeg' },
        { srcSet: '/images/events/malhar/theme-song/poster-1024x1024.webp 2x', type: 'image/webp' },
        { srcSet: '/images/events/malhar/theme-song/poster-1024x1024.jpeg 2x', type: 'image/jpeg' },
      ],
      src: '/images/events/malhar/theme-song/poster-512x512.jpeg',
    },
    description: [
      {
        p: 'A theme song can be a beautiful and powerful thing. A well-crafted theme song can capture the essence of a show, movie, or game in just a few short notes, and evoke strong emotions and memories in its listeners.',
      },
    ],
  },
]

const phewsion = [
  {
    id: 4,
    slug: 'fun-games',
    name: 'Fun Games',
    club: 'phewsion',
    subtitle: 'Phewsion',
    type: ['solo'],
    image: {
      sources: [
        { srcSet: '/images/events/phewsion/fun-games/poster-512x512.webp', type: 'image/webp' },
        { srcSet: '/images/events/phewsion/fun-games/poster-512x512.png', type: 'image/png' },
        { srcSet: '/images/events/phewsion/fun-games/poster-1024x1024.webp 2x', type: 'image/webp' },
        { srcSet: '/images/events/phewsion/fun-games/poster-1024x1024.png 2x', type: 'image/png' },
      ],
      src: '/images/events/phewsion/fun-games/poster-512x512.png',
    },
    description: [
      {
        p: 'Step into a world of instant fun and friendly games at our college fest. From nailing a slam dunk at Basketball Hoop to hitting the bullseye at Dart Board, and showcasing your soccer freestyle at Football Kickups.',
      },
      { heading: 'Basketball Hoops' },
      {
        p: 'Pick up the ball and toss it in the basket. Can you beat the challenge and make that slam dunk?',
      },
      { heading: 'Dart Board' },
      {
        p: 'Precision and focus are your best friends at Bullseye Bonanza. Grab a dart, take a deep breath, and aim for that elusive bullseye.',
      },
      { heading: 'Football Kickups' },
      {
        p: "Fancy some footwork? It's not just about goals; it's about the rhythm.",
      },
    ],
  },
]

const udaanEvents = [...dzire, ...malhar, ...phewsion]

export default udaanEvents
