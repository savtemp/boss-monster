const heros = {
    MARK: {
        health: 100,
        image: "https://dodo.ac/np/images/f/fe/Rosie_NH_Transparent.png"
    },
    MICK: {
        health: 100,
        image: "https://play.nintendo.com/images/AC_Isabelle_7XU6aGu.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
    }
}

const bosses = [
    {
        name: 'JavaScript',
        health: 100,
        image: "https://play.nintendo.com/images/AC_Tom_FRYtwIN.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"
    }
]

function drawHero() {
    let heroTemplate = ''
    for (let key in heros) {
        let hero = heros[key]
        heroTemplate += `
        <div class="col-4 m-5 heros-card" onclick="">
        <div class="row">
            <div class="col-6 p-2">
                <p class="m-0 p-1">${key}</p>
            </div>
            <div class="col-6 p-2 text-center">
                <img class="img-fluid heros-image"
                src=${hero.image} 
                alt="">
            </div>
        </div>
        <div class="row m-3">
                    <div class="progress p-0 bg-secondary">
                        <div class="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${hero.health}%"></div>
                    </div>                      
                </div>
        <div class="row">
            <p class="m-0"><span>HP:</span> ${hero.health}</p>
        </div>
        <div class="row">
            <p class="m-0"><span>GOLD:</span>0</p>
        </div>
        <div class="row">
            <p class="m-0 p-2 mt-2"><span>LVL:</span>1</p>
        </div>
    </div>
        `
        // console.log(heroTemplate);
        let herosElm = document.getElementById('heros')
        herosElm.innerHTML = heroTemplate
    }
}
drawHero()

function drawBoss() {
    let bossTemplate = ''
    bosses.forEach(boss => bossTemplate += `
        <div class="col-10 boss-card">
                <div class="row">
                    <div class="col-12 p-2">
                        <div class="progress p-0">
                            <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${boss.health}%"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center p-3">
                        <h1>${boss.name}</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center p-3 mt-2">
                        <img class="img-fluid boss-image" onClick="attackBoss('${boss.health}')" 
                        src=${boss.image} 
                        alt="">
                    </div>
                </div>
            </div>
        `)
    bossElm = document.getElementById('boss')
    bossElm.innerHTML = bossTemplate
}
drawBoss()

function attackBoss(health) {
    let boss = bosses.find(boss => boss.health == health)
    // console.log(boss);
    boss.health -= 5
    if(boss.health < 0){
        boss.health = 0
    }
    drawBoss()
}

function attackHero(){
    for(let key in heros){
        let hero = heros[key]
        hero.health -= 5
        if(hero.health < 0){
            hero.health = 0
        }
    }
    drawHero()
}

setInterval(attackHero, 3000)

function reset(){
    drawBoss()
    drawHero()
}
