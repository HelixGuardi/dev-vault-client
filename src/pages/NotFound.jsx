import error404 from "../assets/error404.jpg"

function NotFound() {

    return(
        <div className="not-found-container">
            <img id="error-not-found-img" src={error404} />
        </div>
    )
}

export default NotFound;