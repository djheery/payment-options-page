const TILES_UI = (() => {
  const selectors = {
    radioSection: document.querySelector('.radio-payments'),
    radioService: document.querySelector('.radio-service'),
    tileContainer: document.querySelector('.tile-container'),
    tileSectionHeading: document.querySelector('.tile-section-heading')
  }

  return {
    getSelectors: () => {
      return selectors
    },
    createTiles: (state, tiles) => {
      selectors.tileContainer.innerHTML = ''
      for(let i = 0; i < tiles.length; i++) {
        selectors.tileContainer.innerHTML += `
        <div class="tile pos-r flex">
          ${TILES_UI.insertLink(tiles[i])}
          <div class="tile-heading mgb-10">
            <h3 class="text-upper tile-heading">${tiles[i].title}</h3>
            ${TILES_UI.insertRainbow(tiles[i])}
          </div>
          <div class="tile-icon">
            <img src="${tiles[i].icon}">
          </div>
          <div class="tile-text">
            <p>${TILES_UI.checkBankTransfer(state, tiles[i])}</p>
          </div>
        </div>
        `
       
      }
    },
    produceLinkdata: (tileData) => {
      if(tileData.email === true) {
        return  `<a href="mailto:accounts@bambridgeaccountants.com?subject=${TILES_UI.mailCreator(tileData.linkData.subject)}&body=${TILES_UI.mailCreator(tileData.linkData.body)}" class="tile-link"></a>`
      } else {
        return `<a href="${tileData.linkData}" class="tile-link"></a>`
      }
    },
    insertLazyLinkData: (obj, elem) => {
      elem.setAttribute(
        'href', 
        `mailto:accounts@bambridgeaccountants.com?subject=${TILES_UI.mailCreator(obj.subject)}&body=${TILES_UI.mailCreator(obj.body)}`)
    }, 
    mailCreator: (str) => {
      const stringArr = Array.from(str.split(' '))
      let newString = ''
      stringArr.forEach(s => {
        s[s.length -1] === ',' ?
          s += `%0d%0a%0d%0a` :
          s += `%20`
        newString += s
      })  
      return newString
    },
    insertLink: (d) => {
      if(d.linkData === '') {
        return ''
      } else {
        return TILES_UI.produceLinkdata(d)
      }
    },
    insertRainbow: (data) => {
     if(data.rainbow === true) {
       return `            
       <p class="highlighted-box">1.5% of your fee will go to charity</p>
       <img src="/CSS/img/555-7.png" alt="" class="rainbow">
       <img src="/CSS/img/555-7.png" alt="" class="rainbow r2">`
     } else {
       return ''
     }
    },
    checkBankTransfer: (state, tile) => {
      console.log('Hello')
      if(tile.title !== 'Bank Transfer') return tile.body
      if(tile.title === 'Bank Transfer') {
        const body = state.serviceType === 'uk-service' ? 
          tile.body.ukService : 
          tile.body.usService
        return body  
      } 
    },
    generateHeading: (option) => {
      option === 'USD' ?
        selectors.tileSectionHeading.innerHTML = `
        <h2 class="text-upper accent-clr mgb-20">Payment Options For the US</h2>
        ` :
        selectors.tileSectionHeading.innerHTML = `
        <h2 class="text-upper accent-clr mgb-20">Payment Options For the UK</h2>
        `
    }
  }
})()