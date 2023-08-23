// assets
import { Dashboard, Help, Key, FolderRounded, Api } from "@mui/icons-material";

// constant
const icons = { Dashboard, Help, Key, FolderRounded, Api };

console.log('------',import.meta.DEV);

const menuItems = {
    items: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'group',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard',
                    icon: icons.Dashboard,
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'portfolios',
            title: 'Portfolios',
            type: 'group',
            children: [{

                id: 'portfolios',
                title: 'Summary',
                type: 'item',
                url: '/portfolios',
                icon: icons.FolderRounded,
                breadcrumbs: false
            }]
        },
        {
            id: 'links',
            title: 'Links',
            type: 'group',
            children: [
                {
                    id: 'enyard',
                    title: 'Enyard Swagger',
                    type: 'item',
                    url: import.meta.DEV ? 'https://localhost:7188' : '/swagger',
                    icon: icons.Api,
                    external: true,
                    target: true
                },
                {
                    id: 'documentation',
                    title: 'Documentation',
                    type: 'item',
                    url: 'https://github.com/danvic712/enyard/wiki',
                    icon: icons.Help,
                    external: true,
                    target: true
                }
            ]
        }
    ]
};

export default menuItems;