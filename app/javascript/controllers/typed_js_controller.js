import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"
// Connects to data-controller="typed-js"
export default class extends Controller {
  connect() {
    console.log(this.element);
    new Typed(this.element, {
      strings: ["I'm Web Developer"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      showCursor: false,
    })
  }
}
