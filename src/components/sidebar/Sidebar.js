import './Sidebar.css';

import Logo from '../logo/Logo';
import SidebarText from './SidebarText';
import SidebarLinks from './SidebarLinks';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Logo />
            <SidebarText />
            <SidebarLinks />
        </div>
    );
}

export default Sidebar;