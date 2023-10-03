import { AppState } from "../AppState.js"

class MoneyService {
    constructor() {

    }

    addMoney(amount) {
        AppState.money += amount
    }

}

export const moneyService = new MoneyService