import { Component } from 'react'
import { watcherService } from '../services/watcher.service'

export class WatcherDetails extends Component {

    state = {
        watcher: null
    }

    componentDidMount() {
        console.log('this.props:', this.props)
        this.loadWatcher()

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadWatcher()
        }
    }

    loadWatcher = async () => {
        const watcher = await watcherService.getById(this.props.match.params.id)
        this.setState({ watcher: watcher })
    }

    onBack = () => {
        this.props.history.push('/')
    }

    render() {
        const { watcher } = this.state
        if (!watcher) return <div>Loading...</div>
        return (
            <div className='robot-details'>
                <section>
                    <h3>Name: {watcher.name}</h3>
                </section>
                <section>
                    <h3>Movies:</h3>
                    <ul>
                        {watcher.movies.map(movie =>
                            <li key={movie}>{movie} </li>)}
                    </ul>
                </section>

                <img src={`https://robohash.org/${watcher._id}`} alt="" />
                <br />
                <button onClick={this.onBack}>Back</button>

            </div>
        )
    }
}