import tour1Image from './images/tour-1.jpeg'
import tour2Image from './images/tour-2.jpeg'
import tour3Image from './images/tour-3.jpeg'
import tour4Image from './images/tour-4.jpeg'

export const pageLinks = [
    {id: 1, href: '#home', text: 'home'},
    {id: 2, href: '#about', text: 'about'},
    {id: 3, href: '#services', text: 'services'},
    {id: 4, href: '#tours', text: 'tours'}
];

export const socialLinks = [
    {id: 1, href: 'https://www.facebook.com/', icon: 'fab fa-facebook'},
    {id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter'},
    {id: 3, href: 'https://www.squarespace.com/', icon: 'fab fa-squarespace'},
]

export const services = [
    {
        id: 1,
        icon: 'fas fa-wallet fa-fw',
        title: 'saving money',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
            '                            Asperiores, officia.'
    },
    {
        id: 2,
        icon: 'fas fa-tree fa-fw',
        title: 'endless hiking',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
            '                            Asperiores, officia.'
    },
    {
        id: 3,
        icon: 'fas fa-socks fa-fw',
        title: 'amazing comfort',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
            '                            Asperiores, officia.'
    },
];

export const tours = [
    {
        id: 1,
        image: tour1Image,
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' +
            '                            vitae tempore voluptatum maxime reprehenderit eum quod\n' +
            '                            exercitationem fugit, qui corporis.',
        location: 'china',
        duration: 6,
        cost: 2100
    },
    {
        id: 2,
        image: tour2Image,
        date: 'august 26th, 2020',
        title: 'Bali Adventure',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' +
            '                            vitae tempore voluptatum maxime reprehenderit eum quod\n' +
            '                            exercitationem fugit, qui corporis.',
        location: 'indonesia',
        duration: 11,
        cost: 4100
    },
    {
        id: 3,
        image: tour3Image,
        date: 'august 26th, 2020',
        title: 'explore Hong Kong',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' +
            '                            vitae tempore voluptatum maxime reprehenderit eum quod\n' +
            '                            exercitationem fugit, qui corporis.',
        location: 'china',
        duration: 6,
        cost: 2100
    },
    {
        id: 4,
        image: tour4Image,
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' +
            '                            vitae tempore voluptatum maxime reprehenderit eum quod\n' +
            '                            exercitationem fugit, qui corporis.',
        location: 'china',
        duration: 6,
        cost: 2100
    },
]