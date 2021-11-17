const TILES = (() => {
  const ui = TILES_UI.getSelectors()
  const loadEventListeners = () => {
    ui.radioSection.addEventListener('change', e => changeTiles({currency: e.target.id, serviceType: null}))
    ui.radioService.addEventListener('change', e => changeTiles({currency: null, serviceType: e.target.id}))
  }

  const changeTiles = (id) => {
    const state = TILES_STATE.changeReturnState(id)
    const tiles = TILES_STATE.returnTiles()
    TILES_UI.generateHeading(state.currency)
    TILES_UI.createTiles(state, tiles)
  }

  return {
    init: () => {
      loadEventListeners()
      changeTiles({currency: 'uk-payments', serviceType: null})
      TILES_UI.insertLazyLinkData(
        {
          subject: 'Set Up a Payment Plan',
          body: 'Hi Bambridge, Would I be able to switch my invoice to a payment plan?, Many Thanks '
        }, document.querySelector('.payment-plan'))
    }
  }
})(TILES_UI)


TILES.init()
