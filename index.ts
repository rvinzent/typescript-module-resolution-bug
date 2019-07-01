import { EventEmitter, Listener } from 'events'

const onClick: Listener = () => { console.log('listener') }
const emitter = new EventEmitter()
emitter.on('click', onClick)
