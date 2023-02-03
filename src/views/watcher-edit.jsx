import { Component } from 'react'
import { watcherService } from '../services/watcher.service'


export class WatcherEdit extends Component {

    state = {
        watcher: watcherService.getEmptyWatcher()
    }

    async componentDidMount() {
        const watcherId = this.props.match.params.id
        if (watcherId) {
            const watcher = await watcherService.getById(watcherId)
            this.setState({ watcher })
        }
    }

    onAddWatcher = async (ev) => {
        ev.preventDefault()
        try {
            await watcherService.save({ ...this.state.watcher })
            this.props.history.push('/')
        } catch (err) {
            console.log('err:', err)
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        let value = target.value
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;
            case 'checkbox':
                value = target.checked
                break
            default:
                break;
        }
        this.setState(prevState => ({ watcher: { ...prevState.watcher, [field]: value } }))
    }

    onBack = () => {
        this.props.history.goBack()
    }

    render() {
        const { watcher } = this.state
        if (!watcher) return

        const { name, movies } = watcher
        return (
            <section className='watcher-edit-section'>
                <h1>{watcher._id ? 'Edit' : 'Add'} Watcher</h1>
                <form onSubmit={this.onAddWatcher}>
                    <label htmlFor="name">Name:
                        <input onChange={this.handleChange}
                            value={name}
                            type="text"
                            name="name"
                            id="name"
                            placeholder='Enter name...'
                            required />
                    </label>

                    <label htmlFor="movies">Movies:
                        <textarea onChange={this.handleChange}
                            className="movies-input"
                            value={movies}
                            type="text"
                            name="movies"
                            id="movies"
                            placeholder='Enter movies... xxx, yyy'
                            required />
                    </label>

                    <button className='clean-btn btn btn-action' type='submit'>Save</button>
                    <button className='clean-btn btn btn-action' onClick={this.onBack}>Back</button>

                </form>
            </section>
        )
    }
}