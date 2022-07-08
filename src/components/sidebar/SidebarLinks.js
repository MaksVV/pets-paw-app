import SidebarLink from './SidebarLink';

import vote from './images/vote.png';
import breeds from './images/breeds.png';
import gallery from './images/gallery.png';

const SidebarLinks = () => {
    return (
        <div className="sidebar-links">
            <SidebarLink image={vote} to='/voting' label="voting" />
            <SidebarLink image={breeds} to='/breeds' label="breeds" />
            <SidebarLink image={gallery} to='/gallery' label="gallery" />
        </div>
    );
}

export default SidebarLinks;