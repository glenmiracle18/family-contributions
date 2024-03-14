import {
    ContributionCategory,
    Contributor,
    ContributorDto,
} from '~/services/contributors/types';

const sampleCategories: ContributionCategory[] = [
    {
        title: 'Full',
        description: 'Contributed 100 or more times',
        minimumContributions: 100,
    },
    {
        title: 'Student',
        description: 'Contributed 50 or more times',
        minimumContributions: 50,
    },
    {
        title: 'Unmarried',
        description: 'Contributed 25 or more times',
        minimumContributions: 25,
    },
];

export const sampleContributors: Contributor[] = [
    {
        id: '1',
        firstName: 'Dothan',
        lastName: 'Chimutu',
        title: 'Mr.',
        contact: {
            social: {
                github: '',
                twitter: '',
                linkedin: '',
            },
            phone: '+1 123-456-7890',
            email: 'jon@doe.com',
        },
        category: sampleCategories[0],
        contributionTotal: 100,
        totalContributions: 2,
        dependents: [],
        avatar: 'https://randomuser.me/api/portraits',
    },
    {
        id: '2',
        firstName: 'Anna',
        lastName: 'Mkandawire',
        title: 'Ms.',
        contact: {
            social: {
                github: 'alice_smith',
                twitter: 'asmith_tweets',
                linkedin: 'alicesmith',
            },
            phone: '+1 234-567-8901',
            email: 'alice.smith@example.com',
        },
        category: sampleCategories[1],
        contributionTotal: 150,
        totalContributions: 3,
        dependents: [],
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
        id: '3',
        firstName: 'Jeremiah',
        lastName: 'Chienda',
        title: 'Mr.',
        contact: {
            social: {
                github: 'bobjohn',
                twitter: 'bobby_j',
                linkedin: 'bobjohnson',
            },
            phone: '+1 345-678-9012',
            email: 'bob.johnson@example.com',
        },
        category: sampleCategories[2],
        contributionTotal: 200,
        totalContributions: 4,
        dependents: [],
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
        id: '4',
        firstName: 'Ruth',
        lastName: 'Chimutu',
        title: 'Dr.',
        contact: {
            social: {
                github: 'caroldavis',
                twitter: 'carol_on_tech',
                linkedin: 'caroldavis_phd',
            },
            phone: '+1 456-789-0123',
            email: 'carol.davis@example.com',
        },
        category: sampleCategories[0],
        contributionTotal: 250,
        totalContributions: 5,
        dependents: [],
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
        id: '5',
        firstName: 'Bester',
        lastName: 'Kampila',
        title: 'Mr.',
        contact: {
            social: {
                github: 'davemiller',
                twitter: 'dmiller_dev',
                linkedin: 'davemiller',
            },
            phone: '+1 567-890-1234',
            email: 'dave.miller@example.com',
        },
        category: sampleCategories[1],
        contributionTotal: 175,
        totalContributions: 3,
        dependents: [],
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
        id: '6',
        firstName: 'Linda',
        lastName: 'Mkandawire',
        title: 'Ms.',
        contact: {
            social: {
                github: 'emilybrown',
                twitter: 'emily_brown',
                linkedin: 'emilybrown',
            },
            phone: '+1 678-901-2345',
            email: '',
        },
        category: sampleCategories[2],
        contributionTotal: 225,
        totalContributions: 4,
        dependents: [],
        avatar: 'https://randomuser/me/api/port',
    },
];

export const contributorDtos: ContributorDto[] = sampleContributors.map(
    (contributor) => {
        return {
            id: contributor.id,
            name: `${contributor.firstName} ${contributor.lastName}`,
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            phoneNumber: contributor.contact.phone ?? 'N/A',
            title: contributor.title,
            category: contributor.category.title,
            payments: contributor.totalContributions,
            total: contributor.contributionTotal,
        };
    },
);
