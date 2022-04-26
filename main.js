const button = document.getElementById('translate-button');

const translate = (text) => 'bla bla bla';

const morseDictionary = {
  A: '.-',
  B: '...-',
  C: '-.-.',
  "#": '     ',
  '##': '#'
}

const germanDictionary = {
  'Cat': 'Katze',
  'Dog': 'Hund',
  '#': '     ',
  '##': 'BLA'
}


button.addEventListener('click', () => {
  const textToTranslate = document.getElementById('text-to-translate').innerHTML;
  const translatedText = document.getElementById('translated-text')
  translatedText.innerHTML = translate(textToTranslate)
})

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

  translate(/*inputText*/) {
    const inputText = 'abc abcd'
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

  translate(/*inputText*/) {
    const inputArr = ['Cat']
    super.translate(inputArr, this.dictionary)
  }
}

const translator = new Morse();
translator.translate();
console.log(translator.outputText);

const gTranslator = new German();
gTranslator.translate();
console.log(gTranslator.outputText);
