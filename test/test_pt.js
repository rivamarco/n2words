const assert = require('assert');
const n2words = require('../index.js');


const testCasesPortuguese = [
  [0, 'zero'],
  [1, 'um'],
  [2, 'dois'],
  [3, 'três'],
  [11, 'onze'],
  [12, 'doze'],
  [16, 'dezasseis'],
  [19, 'dezanove'],
  [20, 'vinte'],
  [21, 'vinte e um'],
  [26, 'vinte e seis'],
  [28, 'vinte e oito'],
  [30, 'trinta'],
  [31, 'trinta e um'],
  [40, 'quarenta'],
  [44, 'quarenta e quatro'],
  [50, 'cinquenta'],
  [55, 'cinquenta e cinco'],
  [60, 'sessenta'],
  [67, 'sessenta e sete'],
  [70, 'setenta'],
  [79, 'setenta e nove'],
  [89, 'oitenta e nove'],
  [95, 'noventa e cinco'],
  [100, 'cem'],
  [101, 'cento e um'],
  [199, 'cento e noventa e nove'],
  [203, 'duzentos e três'],
  [287, 'duzentos e oitenta e sete'],
  [356, 'trezentos e cinquenta e seis'],
  [400, 'quatrocentos'],
  [434, 'quatrocentos e trinta e quatro'],
  [578, 'quinhentos e setenta e oito'],
  [689, 'seiscentos e oitenta e nove'],
  [729, 'setecentos e vinte e nove'],
  [894, 'oitocentos e noventa e quatro'],
  [999, 'novecentos e noventa e nove'],
  [1000, 'mil'],
  [1001, 'mil e um'],
  [1097, 'mil e noventa e sete'],
  [1104, 'mil cento e quatro'],
  [1243, 'mil duzentos e quarenta e três'],
  [2385, 'dois mil trezentos e oitenta e cinco'],
  [3766, 'três mil setecentos e sessenta e seis'],
  [4196, 'quatro mil cento e noventa e seis'],
  [5846, 'cinco mil oitocentos e quarenta e seis'],
  [6459, 'seis mil quatrocentos e cinquenta e nove'],
  [7232, 'sete mil duzentos e trinta e dois'],
  [8569, 'oito mil quinhentos e sessenta e nove'],
  [9539, 'nove mil quinhentos e trinta e nove'],
  [1000000, 'um milhão'],
  [1000001, 'um milhão e um'],
  [4000000, 'quatro milhões'],
  [10000000000000, 'dez biliões'],
  [100000000000000, 'cem biliões'],
  [1000000000000000000, 'um trilião']
]

describe('Portuguese', function () {
  it('should convert numbers correctly (Portuguese)', function () {
    for (let i = 0; i < testCasesPortuguese.length; i++) {
      assert.equal(n2words(testCasesPortuguese[i][0], { lang: 'pt' }), testCasesPortuguese[i][1])
    }
  });
});
