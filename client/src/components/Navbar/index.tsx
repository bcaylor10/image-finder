import { Navbar as Nav, Text } from "@mantine/core";

import './style.scss';

const Navbar = () => {
    return (
        <Nav className="navbar" p="md" hiddenBreakpoint="sm" height={60} >
            <Text>UnImage Finder</Text>
            <Text><a href="https://bcaylor.com">Brandon Caylor</a></Text>
        </Nav>
    )
};

export default Navbar;