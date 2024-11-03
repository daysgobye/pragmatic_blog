export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'ismy.blog',
    subtitle: 'a blog about the pragmatic choices I make',
    description: 'a blog about the pragmatic choices I make',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/daysgobye'
        },
        {
            text: 'YT Music',
            href: 'https://music.youtube.com/channel/UCf5XIHtEdab_LSABGUGWe1A?si=g7qZVbwpnqt0A6jp'
        }
    ],
    hero: {
        title: 'I love reading content feeds and hate seeing ai garbage in there. This is how Im fixing it, one post at a time.',
        text: `
Hey, I’m Cole. I co-own Boardsource, but when I’m not doing that, I’m probably messing around with programming and making terrible apps—that’s kinda my version of video games. I’m really into custom keyboards obvs.
`,
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to a pragmatic Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
