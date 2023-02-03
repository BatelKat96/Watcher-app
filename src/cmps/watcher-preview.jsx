import { Link } from "react-router-dom"


export function WatcherPreview({ watcher, onRemoveWatcher }) {
    const previewStyle = { backgroundImage: `url(https://robohash.org/${watcher._id})` }

    return (
        <section style={previewStyle} className="watcher-preview">
            <Link to={`/watcher/${watcher._id}`} className="info">
                <h2>{watcher.name}</h2>
            </Link>
            <section className="actions">
                <button className='clean-btn btn-remove' onClick={() => onRemoveWatcher(watcher._id)}>Remove</button>
                <Link to={`/watcher/edit/${watcher._id}`}>Edit</Link>
            </section>
        </section>
    )
}