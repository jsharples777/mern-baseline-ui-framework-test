/** @jsx jsxCreateElement */
/*** @jsxFrag jsxCreateFragment */

import {jsxCreateElement,jsxCreateFragment} from "../../framework/jsx/JSXParser";

export function TestJSX() {
    let test = false;

    const content = () => {
        if (test) return (<ul>
            {[1, 2, 3].map(item => (
                <li onClick={() => {console.log('test')}}>{item}</li>
            ))}
        </ul>);
        return null;
    }
    return (
        <div>
            <p className={'test'}>This is regular paragraph</p>
            <div>
                <p>This is a paragraph in a fragment</p>
                <>
                    <p>Hello</p>
                </>
                {content}
            </div>
        </div>
    );

}

