import { LoaderFunctionArgs, redirect } from '@remix-run/node';

export function loader(args: LoaderFunctionArgs) {
    const userId = args.params.userId;
    return redirect(`/app/users/${userId}/view`);
}
