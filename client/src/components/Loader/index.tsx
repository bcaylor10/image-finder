import { Skeleton } from "@mantine/core";

import './style.scss'

const Loader = () => {
    return (
        <div className="loader">
            <Skeleton height={10} mt={6} width="60%" radius="xl"/>
            <Skeleton height={10} mt={6} width="100%" radius="xl" />
            <Skeleton height={10} mt={6} width="70%"radius="xl" />
            <Skeleton height={10} mt={6} width="80%" radius="xl" />
        </div>
    );
};

export default Loader;