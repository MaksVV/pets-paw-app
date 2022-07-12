const VotingPage = () => {
    return (
        <div className="wrapper">
            <nav />
            <div className="voting">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
            </div>
        </div>
    );
}

export default VotingPage();