import { h, render } from "preact";
import { css, keyframes } from "emotion";

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const Title = css`
  color: crimson;

  & span {
    display: inline-block;
    animation: ${bounce} 1s ease infinite;
  }
`;

render(
  <main>
    <h1 class={Title}>
      Não ta <span>pronto</span>
    </h1>
  </main>,
  document.body
);
