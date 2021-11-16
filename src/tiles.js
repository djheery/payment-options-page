const TILES_STATE = (() => {
  const usTiles = [
    {
      title: 'Bank Transfer',
      rainbow: true,
      body: `<div class="text-center" style="font-size: .8rem">Use your Full name in the transfer description<br><br>
      Bambridge Tax and Accountancy<br>Acc No - <span class="accent-clr">6792033907</span><br>
      Wire Routing Number - <span class="accent-clr">021000089</span></div>`,
      icon: '/CSS/img/bank.png',
      internalLink: true,
      email: false,
      linkData: ''
    },
    {
      title: 'Pay By Cheque',
      rainbow: true,
      internalLink: true,
      email: false,
      icon: "/CSS/img/cheque.png",
      body: '<div class="text-center" style=" text-align:center;font-size: .8rem">We continue to take payment via cheque.<br><br>Post to: <br><br><span class="accent-clr">442 Broadway 2nd Floor, New York, NY 10013</span></div>',
      linkData: 'https://bambridgeaccountants.com/us-cheque-details'
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
      title: 'Pay by Phone',
      rainbow: false,
      body: 'If you would like to pay by phone, book in an appointment with us today',
      internalLink: true,
      icon: "/CSS/img/phone-call.png",
      email: false,
      linkData: 'https://bambridgeaccountants.com/book-phone-payment'
    },
  ]

  const ukTiles = [
    {
      title: 'Pay By Card',
      rainbow: true,
      body: `If you would like to pay by card, you can do so now! Click this tile to be directed to the payment page`,
      internalLink: true,
      icon: "/CSS/img/credit-card.png",
      email: false,
      linkData: 'https://bambridgeaccountants.com/payments',
    },
    {
      title: 'Pay by Phone',
      rainbow: false,
      body: 'If you would like to pay over phone,  we require you to book in an appointment with us today. To do so click here and you will be directed to our booking page.',
      icon: "/CSS/img/phone-call.png",
      internalLink: true,
      email: false,
      linkData: 'https://bambridgeaccountants.com/book-phone-payment'
    },
    {
      title: 'Pay By Cheque',
      rainbow: true,
      internalLink: true,
      email: false,
      icon: "/CSS/img/cheque.png",
      body: '<div class="text-center" style=" text-align:center;font-size: .8rem">We continue to take payment via cheque.<br><br>Post to: <br><br><span class"accent-clr">7 Henrieta St, London, WC2E 8PS</span> </div>',
      linkData: 'https://bambridgeaccountants.com/uk-cheque-details'
    },
    {
      title: 'Bank Transfer',
      rainbow: true,
      body: `<div class="text-center" style="font-size:.8rem">Use your Full name in the transfer description<br><br>
      Bambridge Tax and Accountancy<br>Acc No - <span class="accent-clr">13915492</span><br>Sort code - <span class="accent-clr">20 71 74</span></div>`,
      icon: '/CSS/img/bank.png',
      internalLink: true,
      email: false,
      linkData: ''
    },
    {
      title: 'Pay Another Way?',
      rainbow: false,
      body: '<span style="font-size: .8rem;">We offer a variety of ways to pay for our service. Below are the most common ways of making a payment to us. If you wish to pay another way, please do not hesitate to send us an email at: <a href="mailto:alistair@bambridgeaccountants.com?subject=Alternative%20payment%20Options&body=Hi%20Alistair,%0d%0a%0d%0aI%20would%20like%20to%20discuss%20my%20payment%20options,%0d%0a%0d%0aMany%20thanks%0d%0a%0d%0a" class=\'bacc-link\'>alistair@bambridgeaccountants.com</a></span>',
      icon: '/CSS/img/donate.png',
      internalLink: true,
      email: false,
      linkData: ''
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
    radioSection: document.querySelector('.radio-payments'),
    radioService: document.querySelector('.radio-service'),
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
          ${TILES_UI.insertLink(pt[i])}
          <div class="tile-heading mgb-10">
            <h3 class="text-upper tile-heading">${pt[i].title}</h3>
            ${TILES_UI.insertRainbow(pt[i])}
          </div>
          <div class="tile-icon">
            <img src="${pt[i].icon}">
          </div>
          <div class="tile-text">
            <p>${pt[i].body}</p>
          </div>
        </div>
        `
       
      }
    },
    produceLinkdata: (tileData) => {
      if(tileData.email === true) {
        return  `<a href="mailto:alistair@bambridgeaccountants.com?subject=${TILES_UI.mailCreator(tileData.linkData.subject)}&body=${TILES_UI.mailCreator(tileData.linkData.body)}" class="tile-link"></a>`
      } else {
        return `<a href="${tileData.linkData}" class="tile-link"></a>`
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
    generateHeading: (option) => {
      if(option === 'us-payments') {
        selectors.tileSectionHeading.innerHTML = `
        <h2 class="text-upper accent-clr">Payment Options For the US</h2>
        `
      }
      else {
        selectors.tileSectionHeading.innerHTML = `
        <h2 class="text-upper accent-clr mgb-20">Payment Options For the UK</h2>
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
