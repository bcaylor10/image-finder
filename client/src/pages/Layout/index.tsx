import { AppShell } from '@mantine/core'

import Navbar from '../../components/Navbar';

interface ILayout {
    children: any;
}

const Layout = ({ children }: ILayout) => {
    return (
        <AppShell
            navbar={<Navbar />}
        >
            {children}
        </AppShell>
    )
};

export default Layout