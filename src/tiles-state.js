const TILES_STATE = (() => {
  const usTiles = [
    {
      title: 'Bank Transfer',
      rainbow: true,
      body: {
        ukService: `<div class="text-center" style="font-size: .8rem">Use your Full name in the transfer description<br><br>
        Bambridge Tax and Accountancy<br>Bank: <span class="accent-clr">Barclays</span><br>Acc No: <span class="accent-clr">13915492</span><br>
        Sort Code: <span class="accent-clr">20-71-74</span></div>`,
        usService: `<div class="text-center" style="font-size: .8rem">Use your Full name in the transfer description<br><br>
        Bambridge Tax and Accountancy<br>Bank: <span class="accent-clr">Citi Bank</span><br>Acc No: <span class="accent-clr">6792033907</span><br>
        Wire Routing Number: <span class="accent-clr">021000089</span></div>`
      },
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
      title: 'Pay Another Way?',
      rainbow: false,
      body: '<span style="margin-top: 2rem; font-size: .8rem;">We offer a variety of ways to pay for our service. Below are the most common ways of making a payment to us. If you wish to pay another way, please do not hesitate to send us an email at: <span class="accent-clr">accounts@bambridgeaccountants.com</span></span>',
      icon: '/CSS/img/donate.png',
      internalLink: false,
      email: true,
      linkData: {
        subject: 'Bill Payment Options',
        body: 'Hi Bambridge, I would like to discuss my payment options, Many thanks,',
      }
    },
    {
      title: 'Pay By Card',
      rainbow: false,
      body: `We accept Debit and Credit cards. Including, but not limited to, Visa, Mastercard, Amex, Apple Pay. Your payment will be taken via stripe`,
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
      body: 'If you would like to pay over phone,  we require you to book in an appointment with us today. To do so click here and you will be directed to our booking page.',
      internalLink: true,
      icon: "/CSS/img/phone-call.png",
      email: false,
      linkData: 'https://bambridgeaccountants.com/book-phone-payment'
    },
    {
      title: 'International Money Transfer',
      rainbow: false,
      body: 'If you would like to use international money transfer, please use the details below:<br>IBAN - <span class="accent-clr"> BARC 2071 7483 6380 81</span><br>SWIFTBIC - <span class="accent-clr">BARCGB22</span>',
      internalLink: true,
      icon: "",
      email: false,
      linkData: ''
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
      body: {
        ukService: `<div class="text-center" style="font-size:.8rem">Use your Full name in the transfer description<br><br>
        Bambridge Tax and Accountancy<br>Bank: <span class="accent-clr">Barclays</span><br>Acc No: <span class="accent-clr">83638081</span><br>Sort code: <span class="accent-clr">20-71-74</span></div>`,
        usService: `<div class="text-center" style="font-size:.8rem">Use your Full name in the transfer description<br><br>
        Bambridge Tax and Accountancy<br>Bank: <span class="accent-clr">Barclays</span><br>Acc No: <span class="accent-clr">13915492</span><br>Sort code: <span class="accent-clr">20-71-74</span></div>`
      },
      icon: '/CSS/img/bank.png',
      internalLink: true,
      email: false,
      linkData: ''
    },
    {
      title: 'Pay Another Way?',
      rainbow: false,
      body: '<span style="margin-top: 2rem; font-size: .8rem;">We offer a variety of ways to pay for our service. Below are the most common ways of making a payment to us. If you wish to pay another way, please do not hesitate to send us an email at: <span class="accent-clr">accounts@bambridgeaccountants.com</span></span>',
      icon: '/CSS/img/donate.png',
      internalLink: false,
      email: true,
      linkData: {
        subject: 'Bill Payment Options',
        body: 'Hi Bambridge, I would like to discuss my payment options, Many thanks,',
      }
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
      title: 'International Money Transfer',
      rainbow: false,
      body: 'If you would like to use international money transfer, please use the details below:<br>IBAN - <span class="accent-clr"> BARC 2071 7483 6380 81</span><br>SWIFTBIC - <span class="accent-clr">BARCGB22</span>',
      internalLink: true,
      icon: "/CSS/img/globe.png",
      email: false,
      linkData: ''
    },
  ]

  const currentState = {
    currency: 'GBP',
    serviceType: 'uk-service'
  }

  return {
    polymorphism: (id) => {

    }, 
    changeReturnState: (newState) => {
      newState.currency !== null ?
        currentState.currency = newState.currency :
        currentState.serviceType = newState.serviceType
      return currentState
    },
    returnTiles: () => { 
      const tiles = currentState.currency === 'GBP' ? ukTiles : usTiles 
      return tiles
    }
  }
})()