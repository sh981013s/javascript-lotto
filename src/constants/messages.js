import deepFreeze from '../utils/deepFreeze';

const messages = deepFreeze({
  INPUT: {
    MONEY: '> 구입금액을 입력해 주세요.',
    WINNING_NUMBER: '\n> 당첨 번호를 입력해 주세요.',
    BONUS_NUMBER: '\n> 보너스 번호를 입력해 주세요.',
    RESTART: '\n> 다시 시작하시겠습니까? (y/n)',
  },
  ERROR: {
    POSITIVE_INTEGER: '[ERROR] 숫자를 입력해주세요.',
    THOUSANDS_WON: '[ERROR] 1000원 단위의 금액을 입력해주세요.',
  },
});

export default messages;