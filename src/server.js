import { TranslateService } from './translator';

let text = "quiero trabajar con los mejores"
let targetLang = 'en'

const translate = new TranslateService()
translate.translateText(text, targetLang)
  .then(results => {
    console.log(results);
  });
