import React from 'react';
import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-okaidia.css';
declare const languageList: readonly ["html", "css", "js", "jsx", "tsx", "svg", "xml", "php", "ruby"];
declare type Language = typeof languageList[number];
interface ReactPrismHighlightProps {
    children?: string;
    language?: Language;
    theme?: 'okaidia';
}
export declare const ReactPrismHighlight: React.FC<ReactPrismHighlightProps>;
export default ReactPrismHighlight;
