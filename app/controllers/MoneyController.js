import { AppState } from "../AppState.js"
import { moneyService } from "../services/MoneyService.js"
import { setText } from "../utils/Writer.js"

export class MoneyController {
    constructor() {
        AppState.on('money', _drawMoney)
    }

    addMoney(amount) {
        moneyService.addMoney(amount)
    }


}


function _drawMoney() {
    const money = AppState.money
    setText('moneyCount', `Money: $${money.toFixed(2)}`)
}