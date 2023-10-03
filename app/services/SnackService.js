import { AppState } from "../AppState.js"

class SnackService {

    buySnack(snackName) {
        const snack = AppState.snacks.find(snack => snack.name == snackName)
        if (AppState.money < snack.price) return
        AppState.money -= snack.price
        AppState.mySnacks.push(snack)
        AppState.emit('mySnacks')
    }
}

export const snackService = new SnackService