import { AboutController } from "./controllers/AboutController.js";
import { SnacksController } from "./controllers/SnacksController.js";
import { MoneyController } from "./controllers/MoneyController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
// import { HomeController } from "./controllers/HomeController.js";


export const router = [
  {
    path: '',

    controller: [SnacksController, MoneyController],

    view: /*html*/`
    <div class="container-fluid">
      <section class="row mb-3 border-secondary border-top bg-dark align-items-center p-3">
        <div class="col-3">
          <div class="text-white">
            <p id="moneyCount" class="fs-3">Money: $0.00</p>
          </div>
        </div>
        <div class="col-9 text-end">
          <button onclick="app.MoneyController.addMoney(.25)" class="btn btn-success">
            <p>+$0.25</p>
          </button>
          <button onclick="app.MoneyController.addMoney(1)" class="btn btn-success">
            <p>+$1.00</p>
          </button>
          <button onclick="app.MoneyController.addMoney(5)" class="btn btn-success">
            <p>+$5.00</p>
          </button>
          <button onclick="app.MoneyController.addMoney(10)" class="btn btn-success">
            <p>+$10.00</p>
          </button>
          <button onclick="app.MoneyController.removeMoney()" class="btn btn-danger">
            <p>Return Change</p>
          </button>
        </div>
      </section>

      <section id="snack-dump" class="row p-4">
        <!-- CARDS POPULATE HERE-->
      </section>

      <section class="row mt-3 border-secondary border-bottom bg-dark align-items-center p-2 text-white">
        <p class="fs-3">Owned Snacks</p>
        <div class="col">
          <div id="mySnacks-dump" class="row">
            <!-- OWNED SNACKS POPULATE HERE -->
          </div>
        </div>
      </section>

    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]