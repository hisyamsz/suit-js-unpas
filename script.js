function comp() {
    const comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67)  return 'orang';
    return 'semut';
};

function rules(computer, player) {
    if (player == computer) return 'Seri!';
    if (player == 'gajah') return (computer == 'orang') ? 'Menang!' : 'Kalah!';
    if (player == 'orang') return (computer == 'semut') ? 'Menang!' : 'Kalah!';
    if (player == 'semut') return (computer == 'gajah') ? 'Menang!' : 'Kalah!';  
};


function mix() {
    const imgC = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const awalMulai = new Date().getTime();

    setInterval(function () {
        if (new Date().getTime() - awalMulai > 1000) {
            clearInterval;
            return;
        }
        imgC.setAttribute('src', `img/${gambar[i++]}.png`);
        if (i == gambar.length) i=0;
    }, 100);
};





const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pComp = comp();
        const pPlayer = pil.className;
        const hasil = rules(pComp, pPlayer);
        mix();

        setTimeout(function () {
            const imgComp = document.querySelector('.img-komputer');
            imgComp.setAttribute('src', `img/${pComp}.png`);
        
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
            
        }, 1000);

    });
});




// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//     const pComp = comp();
//     const pPlayer = pGajah.className;
//     const hasil = rules(pComp, pPlayer);
    
//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', `img/${pComp}.png`);

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;

// });







