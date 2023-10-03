import { AppState } from "../AppState.js"
import { snackService } from "../services/SnackService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class SnacksController {
    constructor() {
        AppState.on('mySnacks', _drawSnacksInventory)
        AppState.on('snacks', _drawSnacks)
        _drawSnacks()
    }

    buySnack(snackName) {
        snackService.buySnack(snackName)
    }
}

function _drawSnacks() {
    const snacks = AppState.snacks
    let content = ''
    snacks.forEach(snack => content += snack.card)
    setHTML('snack-dump', content)
}

function _drawSnacksInventory() {
    const mySnacks = AppState.mySnacks
    let content = ''
    mySnacks.forEach(snack => content += snack.miniCard)
    setHTML('mySnacks-dump', content)
}
