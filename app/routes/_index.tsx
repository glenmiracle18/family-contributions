import { redirect, type MetaFunction } from '@remix-run/node';
import { Tooltip, Button, Dropdown } from 'flowbite-react';

export const meta: MetaFunction = () => {
    return [
        { title: 'New Remix App' },
        { name: 'description', content: 'Welcome to Remix!' },
    ];
};

export async function loader() {
    //this is a placeholder for reading the cookie
    const isLoggedIn = true;
    if (!isLoggedIn) {
        return redirect('/auth/login');
    }

   return redirect('/app');
}