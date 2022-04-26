const button = document.getElementById('translate-button');

const translate = (text) => 'bla bla bla';

const morseDictionary = {
  A: '.-',
  B: '-...',
  C: '-.-.',
  T: '-',
  "#": '     ',
  '##': '#'
}

const germanDictionary = {
  'CAT': 'Katze',
  'Dog': 'Hund',
  '#': '     ',
  '##': 'BLA'
}

class Translator {
  constructor(inputLanguage, outputLanaguage) {
    this.inputLanguage = inputLanguage;
    this.outputLanaguage = outputLanaguage;
    this.inputText = '';
    this.outputText = '';
  }
  // properties
  // - inputText
  // - outputText
  // - inputLanguage
  // - outputLanguage
  // - dictionary: input to output translation mapping
  // - typeOfTranslation: byWord, byChar

  // method
  // - translate (inputArr, dictionary)
  translate(inputArray, dictionary = {}) {
    this.outputText = inputArray
      .map(wordOrChar =>
        /*dictionary[wordOrChar] ? dictionary[wordOrChar] : dictionary['##']*/
        dictionary[wordOrChar] || dictionary['##']
      ).join(' ')
      return this.outputText;
  }
}

class Morse extends Translator {
  constructor() {
    super('english', 'morse');
    this.dictionary = morseDictionary;
  }
  //properties
  // - dictionary
  // - typeOfTranslation: byWord, byChar


  //static typeOfTranslation = 'byChar';

  translate(inputText) {
    //const inputText = 'abc abcd'
    const inputArr = [
      ...inputText.toUpperCase()
        .split(' ')
        .join('#')
    ]
    super.translate(inputArr, this.dictionary)
  }
}

class German extends Translator {
  constructor() {
    super('english', 'german');
    this.dictionary = germanDictionary;
  }
  //properties
  // - dictionary
  // - typeOfTranslation: byWord, byChar

  //static typeOfTranslation = 'byWord';

  translate(inputText) {
    //const inputArr = ['Cat']
    super.translate(inputArr, this.dictionary)
  }
}

button.addEventListener('click', () => {
  const textToTranslate = document.getElementById('text-to-translate').value;
  const translatedText = document.getElementById('translated-text')
  const languageSelected = document.getElementById('languageForTranslation').value;
  let translator;
  if (languageSelected === 'Morse') {
    translator = new Morse();
    //translator.translate(textToTranslate);
    //console.log(translator.outputText);
  }
  if (languageSelected === 'German') {
    translator = new German();
    //gTranslator.translate(textToTranslate);
    //console.log(gTranslator.outputText);
  }
  translator.translate(textToTranslate);
  translatedText.innerHTML = translator.outputText;
})

