export class Snack {

    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.id = data.id
        this.img = data.img
        this.stock = 10
    }

    get card() {
        return /*html*/`
        <div class="col-12 col-md-4 mb-3">
            <div class="card">
                <img
                    src="${this.img}"
                    alt="${this.name}">
                <div class="p-3">
                    <div>
                        <div class="d-flex justify-content-between align-items-end">
                            <p class="fs-5">${this.name}</p>
                            <p class="text-end">${this.id}</p>
                        </div>
                        <div class="d-flex justify-content-between text-secondary">
                            <p>$${this.price.toFixed(2)}</p>
                            <p class="text-end">${this.stock} in stock</p>
                        </div>
                    </div>
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
