import "./Spinner.css";

const Spinner = () => {
    return (
        <div className="spinner">
            <div className="spinner-circle">
                <div className="spinner-circle-gradient"/>
                <div className="spinner-circle-inner"/>
            </div>
        </div>
    );
}

export default Spinner;