const heros = {
    Hero : {
        health: 100,
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAADSCAMAAADUvhpHAAAADFBMVEX////kXBD/oES4+Bh+0A+WAAABI0lEQVR4nO3VQQ6DIBBAUav3v3N3nc1kCsEgmPeXIszTDcchSZIkSdINXQNBQ0NDQ0Pvjh6hPsaHhoaGhoYe6vyVoT8DZehsGjQ0NDQ09KroEWoWNDQ0NDT0TugoxsWzuJSzHdlqdgo0NDQ0NPTu6JrQvwMaGhoaGnotdM2/u/gQaGhoaGjoVdFXUj24vqiz86ChoaGhoddCZ4PrMlY/NQsaGhoaGno2usa08jNWXT0DGhoaGhr6OfRZ1v9xNbWeAQ0NDQ0N/Ry6FZO9F6x6R+svgoaGhoaG3hOdrWbXeH21/6FCQ0NDQ0NPRrcW41qBUTMQGhoaGhp6Cjo6uwt+/++AhoaGhoZeFV23AKE/6FlBzwp6VtCz2hItSZIkSZIkSS/uC56NfQGSrozMAAAAAElFTkSuQmCC"
    },
    heroTwo : {
        health: 100,
        image: "https://play.nintendo.com/images/AC_Isabelle_7XU6aGu.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
    } 
}

const bosses = [
    {
    name: 'JavaScript',
    health: 100,
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAADnCAMAAABPJ7iaAAAA4VBMVEVQhvgAAAD////zGElTi//7BTZqfej2EkJSiv9Div/KRo0VI0E6evdCfvhEctTT3v35CjqObM34Dz4mQHdAasV6enq1yPxNhPiJiYna2tpkkvn19fVfX1/N2f2UaciuWq4qR4Pi6f40V6Hv8/6DpvpKfOUPGS8fM1+UsfqsXLE8ZbpDQ0Ntl/koKCj4+v98ddzES5X/ACrTPoEvdfcwUJRWkf9MV3Q4Xa0LEiIcHBwgNWIPQ5mkvPsIDhm+z/wlcfdTUU6yquWfo7HByuR0c2+Qkpu9u+2XYcHaOHeJb9FigO5jUWsUAAADx0lEQVR4nO3dXVfTMACH8QGDdbDJeJEhyosgIIiDAXOKiqIIwvf/QOrF6D+ek3PaNFlaeJ7bru1+pBdZ6bLaRKie1SzVg53SrBbsyNDCBc0haOGC5hC0cEFzCFq4oDkELVzQHIIWLmgOQQsXNIeghQuaQ9DCBc0haOGC5hC0cEFzCFq4oDkELVzQHIIWLmgOQQsXNIeghQuaQ9DC5ZV2vizt2miJvurQ5/nNvNIOE8km+2vTV/k8v5lnmt1jadfn+c2gZQsatKJByxY0aEWDlq3HRTvflXLD/tmkZS+kUUVp2/kHylryzAtpVJloNWgZg2YNGjQvpFHQrEGD5oU0qvAcsuq0/UHdkk9ZrWY7y2AYjlb3Kshdsg0NGjRo0KBBe+K0pJtWfdo76cORtBaBNtybS/tYkPZ+0tZ8O4JN58pbwWjrEWgGExo0aNCgQYP2JGifrLQYE63CtOfSqmp689JKjLm/0oZL0l42mnWgXp+10yLLzAd8BxdFaZGvQXv1fWjQShQ0aKUKGrRS9URp22mfVdNbkb5EnzfaSg4FMDTuK+tcs2XQSjUjtqdz5brxMUBfZdJasd6se9CglSpo0EoVNGilKiNtsoq0rzZa961W4nmjNV04YtnY0u3GffKleNnWlyAiIiKqXO2WlHGmpruU9h51rX25k9Z7k8m21pN9Yj+RYq+9rh+KMtJ0l/L+awGaEbTYQTOCFjtoRtBi98hoOiM+M2lntrmyzohrusvOtxLNldsr+tZW9b70C92iX+cz77/rLt91Q+y5cmaaDJtBe6m7vNItsZ+5Lzxqj4DGqFWRxqhVkcaoVZHGqFWRxqhVkcaoVZHGqEEbR1yQjBq08cQF+ahp1bggZzYW0q504YcfsjzE9U/doqPW1g3z17LPL91wI2dZmBmLrLnR7zzU35Rvuf13Y7wlm4wjtHWD7mKsInFrnKY5Hlpn6qFFPafXf2fYTxMuaNCgQSsYNGjQ4tDSPNDkaLFpjdODzbQrXRLiKMvBuoNL2eVGjnUw24hLm2ospvVvdeKb7bHqru5y3JejiSwOTetsFHwDx9OWI0MrGjSXoAULmkvQggXNJc+03F+tN+5DdhomrVgGrdHJfx8yMTSyzu5FNpvePb47EVvj92yxTvVgp3e57x4nW7pssLFmXf6fbGkeLOofumh6rJP812DdXNjNJ81nTrQ9aNCgQYMGDVq1afl/qbe52Z8OU3/WSktsb3Ngp83ZWrLa7mdCdW+VnVvf54SVZi32bx0aFf4xF2gRggYN2niCBg3aeII28Qct+CjKY9sqcwAAAABJRU5ErkJggg=="
}
]

function drawHero(){
    let heroTemplate = ''
    for(let key in heros){
        let hero = heros[key]
        heroTemplate += `
        <div class="col-4 m-5 heros-card" onclick="">
        <div class="row">
            <div class="col-6">
                <p>${key}</p>
            </div>
            <div class="col-6">
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
            <p><span>Health:</span> ${hero.health}</p>
        </div>
    </div>
        `
        // console.log(heroTemplate);
        let herosElm = document.getElementById('heros')
        herosElm.innerHTML = heroTemplate
    }
}
drawHero()

function drawBoss(){
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
                        <img onClick="attack('${boss.name}')" src=${boss.image} alt="">
                    </div>
                </div>
            </div>
        `)
        bossElm = document.getElementById('boss')
        bossElm.innerHTML = bossTemplate
}
drawBoss()

function attack(name){
    // bosses.health -= 3
        console.log('attacking', name);
        let boss = bosses.find(b => b.name == name)
        console.log(boss);
        boss.health = boss.health - 3
        console.log('attacking', boss.health);
   
    
    drawBoss()
    
}


