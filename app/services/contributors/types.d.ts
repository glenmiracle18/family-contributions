import { Identifiable } from '~/utils/types';

export interface Contact {
    social: {
        github?: string;
        twitter?: string;
        linkedin?: string;
    };
    phone?: string;
    email?: string;
}

export interface ContributionCategory {
    title: string;
    description: string;
    minimumContributions: number;
}

export type Dependency = 'wife' | 'husband' | 'child' | 'parent' | 'sibling';
export type Title =
    | 'Mr.'
    | 'Mrs.'
    | 'Ms.'
    | 'Dr.'
    | 'Prof.'
    | 'Rev.'
    | 'Fr.'
    | 'Sr.'
    | 'Br.'
    | 'Rabbi'
    | 'Imam'
    | 'Sheikh'
    | 'Pastor'
    | 'Bishop'
    | 'Elder'
    | 'Deacon'
    | 'Minister'
    | 'Father'
    | 'Mother'
    | 'Brother';

export interface Dependent {
    contributor: Contributor;
    dependency: Dependency;
}

export interface Contributor extends Identifiable {
    firstName: string;
    lastName: string;
    avatar?: string;
    contact: Contact;
    title: Title;
    category: ContributionCategory;
    contributionTotal: number;
    totalContributions: number;
    dependents: Dependent[];
}

export interface ContributorDto extends Identifiable {
    name: string;
    avatar: string;
    phoneNumber: string;
    title: string;
    category: string;
    payments: number;
    total: number;
}
