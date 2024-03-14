export interface GridStatsProps {
    name: string;
    total: number;
    currentPage: number;
    totalPages: number;
    results: number;
}

export default function GridStats(props: Readonly<GridStatsProps>) {
    return (
        <div className="flex flex-1 items-center space-x-2">
            <h5>
                <span className="text-gray-500">
                    All {props.name}: {` `}
                </span>
                <span className="dark:text-white">{props.total}</span>
            </h5>
            <h5 className="ml-1 text-gray-500 dark:text-gray-400">
                {props.currentPage}-{props.totalPages} ({props.results})
            </h5>
            <div
                id="results-tooltip"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
            >
                Showing {props.currentPage}-{props.totalPages} of{' '}
                {props.results} results
                <div className="tooltip-arrow" data-popper-arrow=""></div>
            </div>
        </div>
    );
}
