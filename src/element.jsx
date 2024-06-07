import { useEffect, useState } from 'preact/hooks';
export function Element({element, selected, selectElement}) {

    const [style, setStyle] = useState({
        gridColumn: element.xpos,
        gridRow: element.ypos,
        backgroundColor: `#${element['cpk-hex']}`,
        transform: `translateX(0)`
    });

    useEffect(() => {
        if (selected) {
            // Center element in parent
            const e = document.querySelector(`#${element.symbol}`);
            const p = document.querySelector('.periodic-table');
            const x = (p.clientWidth/2) - (e.offsetLeft);
            const y = (p.clientHeight/2) - (e.offsetTop);
            const updatedTransform = `translateX(${x}px) translateY(${y}px) scale(2)`;
            setStyle({...style, transform: updatedTransform});
        } else {
            const updatedTransform = `translate(0)`;
            setStyle({...style, transform: updatedTransform});
        }
    }, [selected]);

    return (
        <>
            <div id={element.symbol} onClick={() => selectElement(element)} key={element.number} className={selected ? 'element selected' : 'element'} style={style}>
              <span class="number">{element.number}</span>
              <span class="symbol">{element.symbol}</span>
              <span class="name">{element.name}</span>
              <span class="atomic-mass">{element.atomic_mass.toFixed(2)}</span>
            </div>
        </> 
    )
}