import {init} from './media_app.js'
import {json_ar} from '../media/media_page/flats&parades/flats&parades_json.js'

window.onload=()=>{
    console.log('kids and dogs js running')
    init(json_ar)

}