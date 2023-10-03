import { AppState } from "../AppState.js"

class KeypadService {
    keyPressed(key) {
        AppState.code += key
    }
    resetCode() {
        AppState.code = ''
    }
}

export const keypadService = new KeypadService