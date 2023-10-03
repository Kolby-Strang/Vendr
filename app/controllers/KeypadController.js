import { AppState } from "../AppState.js"
import { keypadService } from "../services/KeypadService.js"
import { snackService } from "../services/SnackService.js"
import { Pop } from "../utils/Pop.js"
import { setText } from "../utils/Writer.js"

export class KeypadController {
    constructor() {
        AppState.on('code', _drawCode)
    }

    keyPressed(key) {
        keypadService.keyPressed(key)
    }
    resetCode() {
        keypadService.resetCode()
    }
    submitCode() {
        const snack = AppState.snacks.find(snack => snack.id == AppState.code)
        if (snack == null) {
            Pop.error('Invalid Code!')
            this.resetCode()
        } else {
            snackService.buySnack(snack.name)
            this.resetCode()
        }
    }
}

function _drawCode() {
    // _shortenCode()
    setText('codeElem', 'Code: ' + AppState.code)
}
