"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const prismjs_1 = __importDefault(require("prismjs"));
require("prismjs/themes/prism.css");
require("prismjs/themes/prism-okaidia.css");
const languageList = ['html', 'css', 'js', 'jsx', 'tsx', 'svg', 'xml', 'php', 'ruby'];
const loadLanguages = (language) => {
    const requests = [];
    if (language === 'jsx' || language === 'tsx') {
        requests.push(new Promise((resolve) => {
            resolve(Promise.resolve().then(() => __importStar(require('prismjs/components/prism-jsx.min'))));
        }));
    }
    if (language === 'tsx') {
        requests.push(new Promise((resolve) => {
            resolve(Promise.resolve().then(() => __importStar(require('prismjs/components/prism-tsx.min'))));
        }));
    }
    if (language === 'php') {
        requests.push(new Promise((resolve) => {
            resolve(Promise.resolve().then(() => __importStar(require('prismjs/components/prism-php.min'))));
        }));
    }
    if (language === 'ruby') {
        requests.push(new Promise((resolve) => {
            resolve(Promise.resolve().then(() => __importStar(require('prismjs/components/prism-ruby.min'))));
        }));
    }
    return Promise.all(requests);
};
exports.ReactPrismHighlight = ({ language = 'html', children = null, theme }) => {
    const [html, setHtml] = react_1.useState('');
    const [useLanguage, setLanguage] = react_1.useState('html');
    react_1.useEffect(() => {
        if (languageList.includes(language)) {
            setLanguage(language);
        }
        if (children !== null) {
            loadLanguages(language).then(() => {
                const result = prismjs_1.default.highlight(children, prismjs_1.default.languages[useLanguage], useLanguage);
                setHtml(result);
            });
        }
        prismjs_1.default.highlightAll();
    }, []);
    return (react_1.default.createElement("pre", { className: `language-${useLanguage}` },
        react_1.default.createElement("code", { dangerouslySetInnerHTML: { __html: html } })));
};
//# sourceMappingURL=app.js.map