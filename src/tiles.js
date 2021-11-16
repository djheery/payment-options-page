const TILES_STATE = (() => {
  const usTiles = [
    {
      title: 'Pay By Card',
      rainbow: false,
      body: `We accept Debit and Credit cards. Including, but not limited to, Visa, Mastercard, Ammex, Apple Pay. Your payment will be taken via stripe`,
      icon: "/CSS/img/credit-card.png",
      internalLink: false,
      email: true,
      linkData: {
        subject: 'Bill Payment - Via Stripe',
        body: 'Hi Bambridge, I would like to pay my bill via stripe, Many Thanks'
      },
    },
    {
      title: 'Pay By Cheque',
      rainbow: true,
      internalLink: true,
      email: false,
      icon: "/CSS/img/cheque.png",
      body: '<div class="text-center" style=" text-align:center;font-size: .8rem">We continue to take payment via cheque.<br><br>Post to: <br><br>442 Broadway 2nd Floor, New York, NY 10013</div>',
      linkData: 'https://bambridgeaccountants.com/us-cheque-details'
    },
    {
      title: 'Pay by Phone',
      rainbow: false,
      body: 'If you would like to pay by phone, book in an appointment with us today',
      internalLink: true,
      icon: "/CSS/img/phone-call.png",
      email: false,
      linkData: 'https://bambridgeaccountants.com/book-phone-payment'
    },
    {
      title: 'Pay via Zelle',
      rainbow: true,
      body: 'We offer quick and easy payments via zelle,<br><br> Our Details are:<br><br> <span class="bacc-link" style="font-size:.8rem;">alistair@bambridgeaccountants.com</span>',
      icon: '/CSS/img/zelle.png',
      internalLink: true,
      email: false,
      linkData: ''
    },
    {
      title: 'Bank Transfer',
      rainbow: true,
      body: `<div class="text-center" style="font-size: .8rem">Use your Full name in the transfer description<br><br>
      Bambridge Tax and Accountancy<br>Acc No - 6792033907<br>
      Wire Routing Number - 021000089</div>`,
      icon: '/CSS/img/bank.png',
      internalLink: true,
      email: false,
      linkData: ''
    }
  ]

  const ukTiles = [
    {
      title: 'Pay By Card',
      rainbow: false,
      body: `We accept Debit and Credit cards. Including, but not limited to, Visa, Mastercard, Ammex, Apple Pay. Your payment will be taken via stripe`,
      internalLink: false,
      icon: "/CSS/img/credit-card.png",
      email: true,
      linkData: {
        subject: 'Bill Payment - Via Stripe',
        body: 'Hi Bambridge, I would like to pay my bill via stripe, Many Thanks'
      },
    },
    {
      title: 'Pay By Cheque',
      rainbow: true,
      internalLink: true,
      email: false,
      icon: "/CSS/img/cheque.png",
      body: '<div class="text-center" style=" text-align:center;font-size: .8rem">We continue to take payment via cheque.<br><br>Post to: <br><br>7 Henrieta St, London, WC2E 8PS </div>',
      linkData: 'https://bambridgeaccountants.com/uk-cheque-details'
    },
    {
      title: 'Pay by Phone',
      rainbow: false,
      body: 'If you would like to pay by phone, book in an appointment with us today',
      icon: "/CSS/img/phone-call.png",
      internalLink: true,
      email: false,
      linkData: 'https://bambridgeaccountants.com/book-phone-payment'
    },
    {
      title: 'Bank Transfer',
      rainbow: true,
      body: `<div class="text-center" style="font-size:.8rem">Use your Full name in the transfer description<br><br>
      Bambridge Tax and Accountancy<br>Acc No - 13915492<br>Sort code - 20 71 74</div>`,
      icon: '/CSS/img/bank.png',
      internalLink: true,
      email: false,
      linkData: ''
    },
    {
      title: 'Pay by Donation',
      rainbow: true,
      body: 'Pay right here on Squarespace. Click here to pay your invoice on squarespace.',
      icon: '/CSS/img/donate.png',
      internalLink: true,
      email: false,
      linkData: 'https://bambridgeaccountants.com/payments'
    },
    {
      title: 'Pay via Zelle',
      rainbow: true,
      body: 'We offer quick and easy payments via zelle,<br><br> Our Details are:<br><br> <span class="bacc-link" style="font-size:.8rem;">alistair@bambridgeaccountants.com</span>',
      icon: '/CSS/img/zelle.png',
      internalLink: true,
      email: false,
      linkData: '#'
    }
  ]

  return {
    polymorphism: (id) => {
      switch(id) {
        case 'uk-payments' :
         return ukTiles;
          break;
        case 'us-payments' :
          return usTiles;
          break;
        default :
          return ukTiles;
      }
    }
  }
})()

const TILES_UI = (() => {
  const selectors = {
    radioSection: document.querySelector('.radio-section'),
    tileContainer: document.querySelector('.tile-container'),
    tileSectionHeading: document.querySelector('.tile-section-heading')
  }

  return {
    getSelectors: () => {
      return selectors
    },
    createTiles: (pt) => {
      selectors.tileContainer.innerHTML = ''
      for(let i = 0; i < pt.length; i++) {
        selectors.tileContainer.innerHTML += `
        <div class="tile pos-r flex">
          <a href="" class="tile-link tile-${i}"></a>
          <div class="tile-heading mgb-10">
            <h3 class="text-upper tile-heading">${pt[i].title}</h3>
            <img src=${TILES_UI.insertRainbow(pt[i])} alt="" class="rainbow">
            <img src=${TILES_UI.insertRainbow(pt[i])} alt="" class="rainbow r2">
          </div>
          <div class="tile-icon">
            <img src="${pt[i].icon}">
          </div>
          <div class="tile-text">
            <p>${pt[i].body}</p>
          </div>
        </div>
        `
        const currentTile = document.querySelector(`.tile-${i}`)
        TILES_UI.produceLinkdata(pt[i], currentTile)
      }
    },
    produceLinkdata: (tileData, currentTile) => {
      if(tileData.email === true) {
        currentTile.setAttribute(
          'href', 
          `mailto:alistair@bambridgeaccountants.com?subject=${TILES_UI.mailCreator(tileData.linkData.subject)}&body=${TILES_UI.mailCreator(tileData.linkData.body)}`
          )
      } else {
        currentTile.setAttribute('href', `${tileData.linkData}`)
      }
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
    insertLink: (linkData) => {

    },
    insertRainbow: (data) => {
     if(data.rainbow === true) return '/CSS/img/555-7.png'
    },
    generateHeading: (option) => {
      if(option === 'us-payments') {
        selectors.tileSectionHeading.innerHTML = `
        <h2 class="text-upper accent-clr">Payment Options For the US</h2>
        <div class="section-text mgb-20">
          <p>Make your money go a little further- If you pay via one of the payment methods with a <span class="pos-r">rainbow <img class="text-rainbow" src="/CSS/img/555-7.png"> </span>next to, 1.5% of the fee will go to a charity of your choice. <span class="fw-bold">Click a tile</span> to be directed to the right page</p>
        </div>
        `
      }
      else {
        selectors.tileSectionHeading.innerHTML = `
        <h2 class="text-upper accent-clr">Payment Options For the UK</h2>
        <div class="section-text mgb-20">
          <p>Make your money go a little further- If you pay via one of the payment methods with a <span class="pos-r">rainbow <img class="text-rainbow" src="/CSS/img/555-7.png"> </span>next to, 1.5% of the fee will go to a charity of your choice. <span class="fw-bold">Click a tile</span> to be directed to the right page</p>
        </div>
        `
      }
    }
  }
})()

const TILES = (() => {
  const ui = TILES_UI.getSelectors()
  const loadEventListeners = () => {
    ui.radioSection.addEventListener('change', e => changeTiles(e.target.id))
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
      TILES_UI.produceLinkdata({
        email: true,
        linkData: {
          subject: 'Set Up a Payment Plan',
          body: 'Hi Bambridge, Would I be able to switch my invoice to a payment plan?, Many Thanks '
        } 
      }, document.querySelector('.payment-plan'))
    }
  }
})(TILES_UI)


TILES.init()
