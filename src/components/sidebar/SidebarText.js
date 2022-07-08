const SidebarText = () => {
    const title = 'Hi intern!';
    const subtitle = 'Welcome to MI 2022 Front-end test';
    const text = 'Lets start using The Cat API';  

    return (
		<div className="sidebar-text">
            <h1 className="sidebar-text-title">{title}</h1>
            <p className="sidebar-text-subtitle">{subtitle}</p>
            <p className="sidebar-text-text">{text}</p>
        </div>
    );
}

export default SidebarText;