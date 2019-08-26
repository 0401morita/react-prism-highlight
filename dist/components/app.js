import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-okaidia.css';
var languageList = ['html', 'css', 'js', 'jsx', 'tsx', 'svg', 'xml', 'php', 'ruby'];
var loadLanguages = function (language) {
    var requests = [];
    if (language === 'jsx' || language === 'tsx') {
        requests.push(new Promise(function (resolve) {
            resolve(import('prismjs/components/prism-jsx.min'));
        }));
    }
    if (language === 'tsx') {
        requests.push(new Promise(function (resolve) {
            resolve(import('prismjs/components/prism-tsx.min'));
        }));
    }
    if (language === 'php') {
        requests.push(new Promise(function (resolve) {
            resolve(import('prismjs/components/prism-php.min'));
        }));
    }
    if (language === 'ruby') {
        requests.push(new Promise(function (resolve) {
            resolve(import('prismjs/components/prism-ruby.min'));
        }));
    }
    return Promise.all(requests);
};
export var ReactPrismHighlight = function (_a) {
    var _b = _a.language, language = _b === void 0 ? 'html' : _b, _c = _a.children, children = _c === void 0 ? null : _c, theme = _a.theme;
    var _d = useState(''), html = _d[0], setHtml = _d[1];
    var _e = useState('html'), useLanguage = _e[0], setLanguage = _e[1];
    useEffect(function () {
        if (languageList.includes(language)) {
            setLanguage(language);
        }
        if (children !== null) {
            loadLanguages(language).then(function () {
                var result = Prism.highlight(children, Prism.languages[useLanguage], useLanguage);
                setHtml(result);
            });
        }
        Prism.highlightAll();
    }, []);
    return (React.createElement("pre", { className: "language-" + useLanguage },
        React.createElement("code", { dangerouslySetInnerHTML: { __html: html } })));
};
//# sourceMappingURL=app.js.map