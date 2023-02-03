import { storageService } from './storage.service.js'
import { makeId } from './util.service.js'
// import { makeId } from './util.service.js'

export const watcherService = {
    query,
    // save,
    remove,
    // getById,
    getEmptyWatcher,
    // tryRobot
}

const STORAGE_KEY = 'watchers'

var gWatchers = _loadWatchers()
console.log('gWatchers:', gWatchers)



function query(filterBy) {
    let watchersToReturn = gWatchers
    // if (filterBy) {
    // var { type, maxBatteryStatus, minBatteryStatus, model } = filterBy
    // maxBatteryStatus = maxBatteryStatus || Infinity
    // minBatteryStatus = minBatteryStatus || 0
    // robotsToReturn = gRobots.filter(robot => robot.type.toLowerCase().includes(type.toLowerCase()) && robot.model.toLowerCase().includes(model.toLowerCase())
    //     && (robot.batteryStatus < maxBatteryStatus)
    //     && robot.batteryStatus > minBatteryStatus)
    // }
    return Promise.resolve([...watchersToReturn])
}

// function tryRobot(id) {
//     const robot = gRobots.find(robot => robot._id === id)
//     robot.batteryStatus -= 10
//     return Promise.resolve()
// }
// function getById(id) {
//     const robot = gRobots.find(robot => robot._id === id)
//     return Promise.resolve({ ...robot })
// }

function remove(id) {
    const idx = gWatchers.findIndex(watcher => watcher._id === id)
    gWatchers.splice(idx, 1)
    if (!gWatchers.length) gWatchers = _loadWatchers().slice()
    storageService.store(STORAGE_KEY, gWatchers)
    return Promise.resolve()
}

// function save(robotToSave) {
//     if (robotToSave._id) {
//         const idx = gRobots.findIndex(robot => robot._id === robotToSave._id)
//         gRobots.splice(idx, 1, robotToSave)
//     } else {
//         robotToSave._id = makeId()
//         robotToSave.batteryStatus = 100
//         gRobots.push(robotToSave)
//     }
//     storageService.store(STORAGE_KEY, gRobots)
//     return Promise.resolve(robotToSave)

// }

// function getEmptyRobot() {
//     return {
//         model: '',
//         type: ''
//     }
// }


function _loadWatchers() {
    let watchers = storageService.load(STORAGE_KEY)
    if (!watchers || !watchers.length) watchers = _createWatchers()
    storageService.store(STORAGE_KEY, watchers)
    return watchers
}



function getEmptyWatcher(name = '', movies = []) {
    return { _id: '', name, movies }
}

function _createWatchers() {
    let watchers = storageService.load(STORAGE_KEY)
    if (!watchers || !watchers.length) {
        watchers = []
        watchers.push(_createWatcher('audu jj', ['Rambo', 'Rocky']))
        watchers.push(_createWatcher('fiak fgh', ['Mambo', 'Mocky']))
        watchers.push(_createWatcher('subali gg', ['Pambo', 'Pocky']))
        watchers.push(_createWatcher('mitsu ew', ['Aambo', 'Aocky']))

        storageService.store(STORAGE_KEY, watchers)
        return watchers
    }
}

function _createWatcher(name, movies) {
    const watcher = getEmptyWatcher(name, movies)
    watcher._id = makeId()
    return watcher
}
