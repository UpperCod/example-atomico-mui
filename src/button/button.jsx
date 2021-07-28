import { c, html } from "atomico";
import mui from "../mui.css";

function button({ type, href, size }) {
  return html`<host shadowDom>
    <a href=${href} class="mui-btn mui-btn--${type} mui-btn--${size}"
      ><slot></slot
    ></a>
  </host>`;
}

button.props = {
  type: {
    type: String,
    value: "flat",
  },
  href: {
    type: String,
    value: "#",
  },
  size: {
    type: String,
    value: "",
  },
};

button.styles = mui;

console.log(mui);

export const Button = c(button);
