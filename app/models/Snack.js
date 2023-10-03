export class Snack {

    /**
    * @param {{name: string, price: number, img: url}} data
    **/
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.img = data.img
        this.stock = 10
    }

    get card() {
        return /*html*/`
        <div class="col-12 col-md-4">
            <div class="card">
                <img
                    src="${this.img}"
                    alt="${this.name}">
                <div class="d-flex justify-content-between p-3">
                    <div>
                        <p>${this.name}</p>
                        <p>$${this.price.toFixed(2)}</p>
                        <p>${this.stock} in stock</p>
                    </div>
                    <button onclick="app.SnacksController.buySnack('${this.name}')" class="btn btn-secondary">Buy</button>
                </div>
            </div>
        </div>
        `
    }

    get miniCard() {
        return /*html*/`
        <div class="col miniCard">
            <img src="${this.img}" alt="${this.name}">
        </div>
        `
    }
}
