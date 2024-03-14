import { HiUser, HiUserAdd } from 'react-icons/hi';
import PageTitle from '~/components/widgets/PageTitle';
import { Button, Badge, Avatar } from 'flowbite-react';
import { ContributorService } from '~/services/contributors/contributor';
import Grid from '~/components/widgets/grid/Grid';
import { Outlet, useLoaderData } from '@remix-run/react';
import { ContributorDto } from '~/services/contributors/types';
import { LoaderFunctionArgs } from '@remix-run/node';
import WithSideView from '~/components/widgets/WithSideView';
import BulkActions from '~/components/widgets/users/BulkActions';
import { BiLogoWhatsapp } from 'react-icons/bi';

const PAGE_SIZE = 5;

export async function loader(args: LoaderFunctionArgs) {
    const { searchParams } = new URL(args.request.url);

    const page = Number(searchParams.get('page')) || 1;

    const contributors = await ContributorService.getContributors({
        page,
        pageSize: PAGE_SIZE,
    });
    const contributorCount = await ContributorService.getContributorCount();

    return { contributors, contributorCount };
}

export default function Contributors() {
    const { contributors, contributorCount } = useLoaderData<typeof loader>();

    return (
        <WithSideView
            outlet={<Outlet />}
            redirectTo="/app/users"
            model="Contributor"
        >
            <section className="bg-gray-50 p-3 antialiased sm:p-5 dark:bg-gray-900">
                <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
                    <PageTitle
                        title="Contributors"
                        icon={HiUser}
                        description="Manage all your contributors: view their balance, add, edit and more!"
                    >
                        <Button color="blue" href="/app/users/create">
                            <HiUserAdd className="mr-2 h-5 w-5" />
                            Add Contributor
                        </Button>
                    </PageTitle>
                    <Grid<ContributorDto>
                        basePage="/app/users"
                        getPreviewLink={(item) => `/app/users/${item.id}`}
                        // customFilters={<UserGridFilters />}
                        onBulkDelete={async (ids) => {
                            await ContributorService.deleteContributors(ids);
                            return true;
                        }}
                        // use the IDs to do bulk actions such as bulk delete
                        onBulkActions={(_ids) => <BulkActions />}
                        rowsPerPage={PAGE_SIZE}
                        totalItems={contributorCount}
                        data={contributors}
                        cells={(contributor) => [
                            <div>{contributor.name}</div>,
                            <div className="flex w-full items-center gap-x-2 font-medium text-gray-900 dark:text-white">
                                <Avatar
                                    img={contributor.avatar}
                                    alt={`avatar of ${contributor.name}`}
                                    rounded
                                    size="sm"
                                />
                            </div>,
                            <div>
                                <a
                                    className="flex text-green-800"
                                    href={`wa:${contributor.phoneNumber}`}
                                >
                                    <BiLogoWhatsapp className="mr-1 h-5 w-5" />
                                    {contributor.phoneNumber}
                                </a>
                            </div>,
                            <div>{contributor.title}</div>,
                            <Badge color="light">{contributor.category}</Badge>,
                            <div>{contributor.payments}</div>,
                            <div className="font-semibold text-blue-600">
                                MK{contributor.total.toFixed(2)}
                            </div>,
                        ]}
                    />
                </div>
            </section>
        </WithSideView>
    );
}
