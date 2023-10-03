import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"

class SnackService {

    buySnack(snackName) {
        const snack = AppState.snacks.find(snack => snack.name == snackName)
        if (AppState.money < snack.price) {
            Pop.toast("You don't have enough money!", 'error')
            return
        }
        if (snack.stock < 1) {
            Pop.toast('This item is out of stock!', 'error')
            return
        }
        AppState.money -= snack.price
        snack.stock--
        AppState.mySnacks.push(snack)
        AppState.emit('snacks')
        AppState.emit('mySnacks')
        Pop.toast(`You successfully purchased ${snack.name}`, 'success')
    }
}

export const snackService = new SnackService