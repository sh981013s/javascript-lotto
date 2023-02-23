import LottoMachine from '@lotto/model/LottoMachine';
import inputValidator from '@lotto/validator/InputValidator';
import preventFormFromSubmitting from '@lotto/utils/preventFormFromSubmitting';
import ui from '@lotto/view/stepTwo/ui';
import domList from '@lotto/view/stepTwo/domList';

class WebLottoController {
  #lottoMachine;

  constructor() {
    preventFormFromSubmitting();
    this.#lottoMachine = new LottoMachine();
    this.init();
  }

  addEvents() {
    this.buyLotto();
  }

  init() {
    this.addEvents();
  }

  buyLotto() {
    domList.buyBtn.addEventListener('click', event => {
      try {
        event.stopImmediatePropagation();
        ui.hideMoneyValidationText();
        const moneyInput = domList.moneyInput.value;
        inputValidator.validateMoneyInput(moneyInput);
        this.#lottoMachine.buyLotto(+moneyInput);
        ui.showRestUI(this.#lottoMachine.lottos);
      } catch (error) {
        ui.showMoneyValidationText(error);
      }
    });
  }
}

export default WebLottoController;