import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"

class MoneyService {
    constructor() {

    }

    addMoney(amount) {
        AppState.money += amount
    }

    removeMoney() {
        let money = AppState.money
        if (money <= 0) {
            Pop.error("You don't have money to return.")
            return
        }
        if (window.confirm('Are you sure you want to return your change?')) {
            AppState.money = 0
            Pop.success(`$${money} returned`)
        } else {
            Pop.toast('Cancelled')
        }
    }
}

export const moneyService = new MoneyService