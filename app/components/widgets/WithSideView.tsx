import { useLocation, useNavigate, useNavigation } from '@remix-run/react';
import { ReactNode, useEffect, useState } from 'react';
import { Button } from 'flowbite-react';
import { HiX } from 'react-icons/hi';

interface WithSideViewProps {
    redirectTo: string;
    model: string;
    outlet?: ReactNode;
    children: ReactNode;
}

export default function WithSideView(props: WithSideViewProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const [title, setTitle] = useState('');
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const isCreate = location.pathname.includes('create');
        const isEdit = location.pathname.includes('edit');
        const isView = location.pathname.includes('view');
        const title = isCreate
            ? `Create New ${props.model}`
            : isEdit
              ? `Edit ${props.model}`
              : isView
                ? `${props.model} Details`
                : '';

        setTitle(title);
    }, [location]);

    const dismiss = () => {
        setDismissed(true);
        navigate(props.redirectTo);
    };
    return (
        <div>
            {title.length > 0 && !dismissed && (
                <div className="absolute inset-0 z-50 bg-slate-500/50">
                    <div className="xxl:w-1/3 slide-in-left h-screen w-full overflow-y-auto bg-slate-200 p-8 pb-20 md:w-4/5 lg:w-1/2">
                        <div className="mb-8 flex items-center justify-between">
                            <h2 className="text-lg font-semibold">{title}</h2>
                            <Button
                                color="light"
                                onClick={() => dismiss()}
                                className="h-6 w-6 rounded-full"
                            >
                                <HiX className="h-3 w-3 text-slate-800" />
                            </Button>
                        </div>
                        {props.outlet && props.outlet}
                    </div>
                </div>
            )}
            {props.children}
        </div>
    );
}
