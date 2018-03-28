import {UnderscorePipe} from '../../src/string/underscore.pipe';

describe('UnderscorePipe', () => {
  let pipe: UnderscorePipe;

  beforeEach(() => {
    pipe = new UnderscorePipe();
  });

  const data: Array<any> = [
    {'value': 'ASimpleWord', 'toEqual': 'a_simple_word', 'valid': true},
    {'value': 'aMediumWordHere', 'toEqual': 'a_medium_word_here', 'valid': true}, {
      'value': 'ANUPPERCASEDWORDHERE',
      'toEqual': 'a_n_u_p_p_e_r_c_a_s_e_d_w_o_r_d_h_e_r_e',
      'valid': true
    },
    {'value': 'alowercasedword', 'toEqual': 'alowercasedword', 'valid': true},
    {'value': '     ', 'toEqual': '', 'valid': true},
    {'value': '  SOME WHITE SPACES  ', 'toEqual': 's_o_m_e_w_h_i_t_e_s_p_a_c_e_s', 'valid': true},
    {'value': '  SOME-WHITE-SPACES  ', 'toEqual': 's_o_m_e_w_h_i_t_e_s_p_a_c_e_s', 'valid': true}, {
      'value': '1  SOME-WHITE-SPACES0  2',
      'toEqual': '1_s_o_m_e_w_h_i_t_e_s_p_a_c_e_s02',
      'valid': true
    },
    {'value': null, 'toEqual': 'a_simple_word', 'valid': false},
    {'value': undefined, 'toEqual': 'a_medium_word_here', 'valid': false}, {
      'value': 'ANUPPERCASEDWORDHERe',
      'toEqual': 'a_n_u_p_p_e_r_c_a_s_e_d_w_o_r_d_h_e_r_e',
      'valid': false
    },
    {'value': 'aloweRcasedword', 'toEqual': 'alowercasedword', 'valid': false}
  ];

  for (const element of data) {
    const testCase = `${element.value} should be ${element.valid ? 'equal' :
                                                                   'not equal'
                                                                   } to ${element.toEqual}`;

    it(testCase, () => {
      if (element.valid) {
        expect(pipe.transform(element.value)).toEqual(element.toEqual);
      } else {
        expect(pipe.transform(element.value)).not.toEqual(element.toEqual);
      }
    });
  }

});
