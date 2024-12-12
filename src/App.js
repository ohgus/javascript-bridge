import Controller from './controller/Controller.js';

class App {
  #controller;

  constructor() {
    this.#controller = new Controller();
  }

  async play() {
    this.#controller.init();
  }
}

export default App;
const app = new App();
app.play();
