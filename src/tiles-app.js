const TILES = (() => {
  const ui = TILES_UI.getSelectors()
  const loadEventListeners = () => {
    ui.radioSection.addEventListener('change', e => changeTiles(e.target.id))
    ui.radioService.addEventListener('change', e => changeTiles(e.target.id))
  }

  const changeTiles = (id) => {
    const pageType = TILES_STATE.polymorphism(id)
    TILES_UI.generateHeading(id)
    TILES_UI.createTiles(pageType)
  }

  return {
    init: () => {
      loadEventListeners()
      changeTiles('uk-payments')
      TILES_UI.insertLazyLinkData(
        {
          subject: 'Set Up a Payment Plan',
          body: 'Hi Bambridge, Would I be able to switch my invoice to a payment plan?, Many Thanks '
        }, document.querySelector('.payment-plan'))
    }
  }
})(TILES_UI)


TILES.init()
