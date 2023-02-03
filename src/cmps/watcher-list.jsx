import { WatcherPreview } from './watcher-preview';


export function WatcherList({ watchers, onRemoveWatcher }) {
    return (
        <section className="watchers-list-section simple-cards-grid">
            {watchers.map(watcher =>
                <WatcherPreview
                    key={watcher._id}
                    watcher={watcher}
                    onRemoveWatcher={onRemoveWatcher}
                />
            )}
        </section>
    )

}