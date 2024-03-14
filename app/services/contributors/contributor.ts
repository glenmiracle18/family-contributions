import { ContributorDto } from '~/services/contributors/types';
import {
    contributorDtos,
    sampleContributors,
} from '~/services/contributors/data';
import { PageableSortbaleArgs } from '~/utils/types';

export interface IContributorService {
    getContributors(args: PageableSortbaleArgs): Promise<ContributorDto[]>;
    getContributorCount(): Promise<number>;
    deleteContributors(ids: string[]): Promise<void>;
}

const isTest = process.env.NODE_ENV === 'test';

const TestContributorService: IContributorService = {
    async getContributors(args: PageableSortbaleArgs) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        const skip =
            args.page && args.pageSize ? (args.page - 1) * args.pageSize : 0;
        const take = args.pageSize || 10;
        return [...contributorDtos].splice(skip, take);
    },
    async getContributorCount() {
        return sampleContributors.length;
    },
    async deleteContributors(_ids: string[]) {
        // 1. Remove contributors from the in-memory store
        // 2. Return a promise
        return;
    },
};

const SupabaseContributorService: IContributorService = {
    async getContributors(args: PageableSortbaleArgs) {
        // 1. Fetch contributors from Supabase
        // 2. Map the response to Contributor[]
        await new Promise((resolve) => setTimeout(resolve, 100));
        const skip =
            args.page && args.pageSize ? (args.page - 1) * args.pageSize : 0;
        const take = args.pageSize || 10;
        return [...contributorDtos].splice(skip, take);
    },
    async getContributorCount() {
        // 1. Fetch contributors from Supabase
        // 2. Return the length of the response
        return sampleContributors.length;
    },
    async deleteContributors(_ids: string[]) {
        // 1. Delete contributors from Supabase
        // 2. Return a promise
        return;
    },
};

export const ContributorService: IContributorService = isTest
    ? TestContributorService
    : SupabaseContributorService;
