import { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { WatcherList } from '../cmps/watcher-list';
// import { watcherService } from '../services/watcher.service.js'
import { loadWatchers, removeWatcher } from '../store/actions/watcher.actions'
import { ErrorBoundary } from '../cmps/ErrorBoundary'



class _WatcherIndex extends Component {

    componentDidMount() {
        this.props.loadWatchers()
    }

    onRemoveWatcher = async (watcherId) => {
        try {
            this.props.removeWatcher(watcherId)
        } catch (err) {
            console.log('err:', err)
        }
    }

    render() {
        const { watchers } = this.props
        if (!watchers) return <div>Loading...</div>

        return (
            <section className='watcher-index-section'>
                <h1>Watcher App</h1>
                <Link to='/watcher/edit' className='add-watchers2'>Add Watcher</Link>
                <ErrorBoundary>
                    <WatcherList watchers={watchers} onRemoveWatcher={this.onRemoveWatcher} />
                </ErrorBoundary>
            </section>
        )
    }
}

const mapStateToProps = storeState => ({
    watchers: storeState.watcherModule.watchers
})


const mapDispatchToProps = {
    loadWatchers,
    removeWatcher,
}

export const WatcherIndex = connect(mapStateToProps, mapDispatchToProps)(_WatcherIndex)