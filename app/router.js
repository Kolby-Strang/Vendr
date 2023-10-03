import { AboutController } from "./controllers/AboutController.js";
import { SnacksController } from "./controllers/SnacksController.js";
import { MoneyController } from "./controllers/MoneyController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { KeypadController } from "./controllers/KeypadController.js";
// import { HomeController } from "./controllers/HomeController.js";


export const router = [
  {
    path: '',

    controller: [SnacksController, MoneyController, KeypadController],

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

      <section class="row">
        <div class="col-8">
          <section id="snack-dump" class="row p-2">
          <!-- SNACKS POPULATE HERE -->
          </section>
        </div>
        <div class="col-4 p-5">
          <section class="row justify-content-around">
          
            <div class="col-12 text-center fs-2">
              <p id="codeElem">Code: </p>
            </div>

            <div class="col-4 p-0">
              <button onclick="app.KeypadController.keyPressed('A')" class="btn btn-secondary keypad-button">
                <p>A</p>
              </button>
            </div>
            <div class="col-4 p-0">
              <button onclick="app.KeypadController.keyPressed('B')" class="btn btn-secondary keypad-button">
                <p>B</p>
              </button>
            </div>
            <div class="col-4 p-0">
              <button onclick="app.KeypadController.keyPressed('C')" class="btn btn-secondary keypad-button">
                <p>C</p>
              </button>
            </div>
            <div class="col-4 p-0">
              <button onclick="app.KeypadController.keyPressed('1')" class="btn btn-dark keypad-button">
                <p>1</p>
              </button>
            </div>
            <div class="col-4 p-0">
              <button onclick="app.KeypadController.keyPressed('2')" class="btn btn-dark keypad-button">
                <p>2</p>
              </button>
            </div>
            <div class="col-4 p-0">
              <button onclick="app.KeypadController.keyPressed('3')" class="btn btn-dark keypad-button">
                <p>3</p>
              </button>
            </div>
            <div class="col-4 p-0">
              <button onclick="app.KeypadController.keyPressed('4')" class="btn btn-dark keypad-button">
                <p>4</p>
              </button>
            </div>
            <div class="col-4 p-0">
              <button onclick="app.KeypadController.keyPressed('5')" class="btn btn-dark keypad-button">
                <p>5</p>
              </button>
            </div>
            <div class="col-4 p-0">
              <button onclick="app.KeypadController.keyPressed('6')" class="btn btn-dark keypad-button">
                <p>6</p>
              </button>
            </div>

            <div class="col-6 p-0">
              <button onclick="app.KeypadController.resetCode()" class="btn btn-danger keypad-button">
                <p>Reset Code</p>
              </button>
            </div>
            <div class="col-6 p-0">
              <button onclick="app.KeypadController.submitCode()" class="btn btn-success keypad-button">
                <p>Submit Code</p>
              </button>
            </div>

          </section>
        </div>
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