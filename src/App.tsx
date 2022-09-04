import { Component, createSignal, Show, Signal } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import {Table} from "./table/Table";
import Slider from "./slider/Slider";
import SelectionTableUsage from "./selection-table/SelectionTableUsage";

const [l10n, setL10n] = createSignal<Record<number, number>>({});
const [loaded, setLoaded] = createSignal<boolean>(false);

const TreeNode: Component<{depth: number}> = ({depth}: {depth: number}) => {
  if (depth === 0) {
    return <div>{ l10n()[0] ?? 0 }</div>;
  } else {
    return <div>
      { l10n()[depth] ?? depth }
      <div style="display: flex">
        <TreeNode depth={depth - 1}/>
        <TreeNode depth={depth - 1}/>
      </div>
    </div>
  }
}

const start = performance.now();

setTimeout(() => {
  let l10n: Record<number, number> = { 0: 0 };
  for (let i = 1; i < 20; ++i) {
    l10n[i] = -i;
  }
  setL10n(l10n);
  setLoaded(true);
  console.log('Finished on:', performance.now() - start, document.body.innerHTML.includes('-15'));
}, 200);

// const Button = ({ id, text, fn }) =>
//     <div class='col-sm-6 smallpad'>
//       <button id={ id } class='btn btn-primary btn-block' type='button' onClick={ fn }>{ text }</button>
//     </div>

const App: Component = () => {
  const random = Math.random() * 1_000_000_000;

  const [value, setter]: Signal<boolean> = createSignal(false);

  /*
  <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
   */

  //<Show when={loaded()}>

  return (


    <div class={styles.App}>
      <div>
        <Slider checked={value()} clicked={() => setter((value) => !value)}></Slider>
      </div>

      <Show when={value()}>
        <SelectionTableUsage></SelectionTableUsage>
      </Show>

      {/*<Table/>*/}

      <br/><br/><br/><br/><br/>

      <div style="font-size: 8px">
        {/*<TreeNode depth={5}/>*/}
      </div>

      <div>{random}</div>
    </div>
  );
};

export default App;

function countElements(element: Element | ShadowRoot | ChildNode | null = document.body) {
  let count = 0;
  let child = (element as Element | ShadowRoot).firstChild;
  while (child) { count += countElements(child);
    if ((child as Element).shadowRoot) { count += countElements((child as Element).shadowRoot); }
    count++;
    child = child.nextSibling;
  }
  return count;
}
function countNodes(element: Element | ShadowRoot = document.body) {
  let count = 0; let child = element.firstElementChild;
  while (child) { count += countNodes(child);
    if (child.shadowRoot) { count += countNodes(child.shadowRoot); }
    if (child.nodeName === 'DIV') {
      count++;
    }
    child = child.nextElementSibling;
  } return count;
}

