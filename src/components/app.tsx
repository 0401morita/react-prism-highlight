import React, { useState, useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/themes/prism-okaidia.css'
const languageList = ['html','css','js','jsx','tsx','svg','xml','php','ruby'] as const
type Language = typeof languageList[number]
interface ReactPrismHighlightProps {
  children?: string;
  language?: Language;
  theme?: 'okaidia';
}

const loadLanguages = (language: Language):Promise<unknown> => {
  const requests:Promise<unknown>[] = []
  if(language === 'jsx' || language === 'tsx') {
    requests.push(new Promise((resolve):void => { 
      resolve(import('prismjs/components/prism-jsx.min'))
    }))
  }

  if(language === 'tsx'){
    requests.push(new Promise((resolve):void => { 
      resolve(import('prismjs/components/prism-tsx.min'))
    }))
  }

  if(language === 'php'){
    requests.push(new Promise((resolve):void => { 
      resolve(import('prismjs/components/prism-php.min'))
    }))
  }

  if(language === 'ruby'){
    requests.push(new Promise((resolve):void => { 
      resolve(import('prismjs/components/prism-ruby.min'))
    }))
  }

  return Promise.all(requests)
}

export const ReactPrismHighlight: React.FC<ReactPrismHighlightProps> = ({ language = 'html', children = null, theme }) => {
  const [ html, setHtml ] = useState('')
  const [ useLanguage, setLanguage ] = useState<Language>('html')
  useEffect(() => {
    if (languageList.includes(language)){
      setLanguage(language)
    }

    if(children !== null){
      loadLanguages(language).then(() => {
        const result = Prism.highlight(children, Prism.languages[useLanguage], useLanguage)
        setHtml(result)
      })
    }

    Prism.highlightAll()
  }, [])

  return (
    <pre className={`language-${useLanguage}`}>
      <code dangerouslySetInnerHTML={{ __html: html }}></code>
    </pre>
  )
}