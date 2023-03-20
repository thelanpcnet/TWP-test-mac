before(() => {
  Cypress.on('uncaught:exception', (e, runnable) => {
    console.log('error is: ',e)
    console.log('runnable',runnable)
    if (e.message.includes('function')){
      return false
    }
  })
})

it('Check all pages are still live', () => {
  cy.viewport(1920, 1080)
  let urls = [
    'https://stageone.theworkproject.com/',
    'https://stageone.theworkproject.com/hk',
    'https://stageone.theworkproject.com/sg',
    'https://stageone.theworkproject.com/sydney',
    'https://stageone.theworkproject.com/hk/causeway-bay',
    'https://stageone.theworkproject.com/sg/oue-downtown',
    'https://stageone.theworkproject.com/sg/parkview-square',
    'https://stageone.theworkproject.com/sg/capital-tower',
    'https://stageone.theworkproject.com/sg/asia-square',
    'https://stageone.theworkproject.com/sg/great-world-city',
    'https://stageone.theworkproject.com/sg/capitagreen',
    'https://stageone.theworkproject.com/sg/capitaspring',
    'https://stageone.theworkproject.com/sg/6-battery-road',
    'https://stageone.theworkproject.com/sg/79-robinson-road',
    'https://stageone.theworkproject.com/sg/ascent',
    'https://stageone.theworkproject.com/au/quay--quarter--tower',
    'https://stageone.theworkproject.com/office',
    'https://stageone.theworkproject.com/desks',
    'https://stageone.theworkproject.com/virtual-office',
    'https://stageone.theworkproject.com/meeting-rooms',
    'https://stageone.theworkproject.com/event-spaces/hk',
    'https://stageone.theworkproject.com/event-spaces/sg',
    'https://stageone.theworkproject.com/event-spaces/sydney',
    'https://stageone.theworkproject.com/about-us',
    'https://stageone.theworkproject.com/faq',
    'https://stageone.theworkproject.com/landlord',
    'https://stageone.theworkproject.com/press-media',
    'https://stageone.theworkproject.com/career',
    'https://stageone.theworkproject.com/press-media/album/639801cd98667200011d7359', // Asian Square Tower
    'https://stageone.theworkproject.com/press-media/album/639807cd98667200011d7368', // Bugis
    'https://stageone.theworkproject.com/press-media/album/6392c0db612c3f00015672d1', // CapitaGreen
    'https://stageone.theworkproject.com/press-media/album/6398331398667200011d7379', // CapitaSpring
    'https://stageone.theworkproject.com/press-media/album/63983a5098667200011d7388', // CapitalTower
    'https://stageone.theworkproject.com/press-media/album/63983b3f98667200011d738e', // OUE
    'https://stageone.theworkproject.com/press-media/album/63983c5898667200011d7399', // Great World City
    'https://stageone.theworkproject.com/press-media/album/639af46fc726d40001e9ad7f', // 6 Battery Road
    'https://stageone.theworkproject.com/press-media/album/639845d498667200011d73b2', // MARK
    'https://stageone.theworkproject.com/press-media/album/63983df898667200011d73a4', // Midtown
    'https://stageone.theworkproject.com/press-media/album/63984b3c98667200011d73d4', // Quay Quarter Tower
    'https://stageone.theworkproject.com/press-media/album/639847f898667200011d73c7', // Ascent
    'https://stageone.theworkproject.com/press-media/album/639846a398667200011d73bd' // CapitaSky
  ]
  urls.forEach((url) => {
  cy.visit(url)
  })
})