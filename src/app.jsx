import { useState } from 'preact/hooks'
import * as periodicTable from './assets/period-table.json' 
import './app.css'
import { Element } from './element';

export function App() {

  const [elementSelected, setElementSelected] = useState(-1);
  const [elements] = useState(periodicTable.elements);

  const style = (element) => {

    let x = 0;

    if (element.number === elementSelected) {
      const e = document.querySelector(`#${element.symbol}`);
      const p = document.querySelector('.periodic-table');
      x = e.offsetLeft - (p.clientWidth/2);
    }

    return {
      gridColumn: element.xpos,
      gridRow: element.ypos,
      backgroundColor: `#${element['cpk-hex']}`,
      transform: `tanslateX(${x}px)`
    }
  };

  const selectElement = element => {
    setElementSelected(element.number);
  }

  return (
    <>
      <section class="periodic-table">
          {elements.map(element => (
            <Element
              element={element}
              selectElement={selectElement}
              selected={element.number === elementSelected}></Element>
          ))}
        </section>
    </>
  )
}
