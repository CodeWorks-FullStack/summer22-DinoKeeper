import { DinosController } from "./Controllers/DinosController.js";

class App {
  // NOTE comment out value service to 'turn off' the template stuff
  // valuesController = new ValuesController();
  dinosController = new DinosController()
}

window["app"] = new App();
