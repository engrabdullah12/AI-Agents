function ProfileCard({ title, handle, image, description }) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pdas logo"></img>
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <strong>{title}</strong>
                    <p>{handle}</p>
                </div>
                <strong> {description}</strong>
            </div>
        </div>
    );
}
export default ProfileCard;