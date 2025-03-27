export interface Blog {
    id: number;
    name: string;
    description: string;
    link: string;
    date_created: string;
    date_modified: string;
}

export const blogs: Blog[] = [
    {
        id: 1,
        name: "Linux Commands Part-1",
        description: "Basic Linux Commands part 1",
        link: "https://phanee.hashnode.dev/linux-commands-1",
        date_created: "2022-06-08",
        date_modified: "2022-06-08",
    },
    {
        id: 2,
        name: "Linux Commands Part-2",
        description: "Basic Linux Commands part 2",
        link: "https://phanee.hashnode.dev/linux-commands-2",
        date_created: "2022-06-20",
        date_modified: "2022-06-20",
    },
    {
        id: 3,
        name: "Kadane's Algorithm",
        description: "Algorithm to find maximum sum subarray",
        link: "https://phanee.hashnode.dev/kadanes-algorithm",
        date_created: "2022-06-23",
        date_modified: "2022-06-23",
    },
    {
        id: 4,
        name: "Linux System Administrations Part-1",
        description: "System Administration's part 1",
        link: "https://phanee.hashnode.dev/linux-system-administrators",
        date_created: "2022-06-29",
        date_modified: "2022-06-29",
    }
];