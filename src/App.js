import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { WatcherIndex } from './views/watcher-index';
import { WatcherEdit } from './views/watcher-edit';

import './assets/scss/global.scss';

function App() {
    return (
        <Router>
            <div className="main-app">
                {/* <AppHeader /> */}
                <main className='container'>
                    <Switch>
                        <Route path="/watcher/edit/:id?" component={WatcherEdit} />
                        <Route path="/watcher/:id" component={WatcherDetails} />
                        <Route path="/" component={WatcherIndex} />
                    </Switch>
                </main>
                <footer>
                    <section className='container'>
                        robotRights 2022 &copy;
                    </section>
                </footer>

            </div>
        </Router>
    );
}

export default App;
