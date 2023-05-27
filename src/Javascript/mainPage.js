const aTabBtns = document.querySelector('.tab_menu');

aTabBtns.addEventListener('click', (e)=>{
    const TabVis = e.target.getAttribute('aria-selected');
    const activeTab = e.target;

    const allPannels = document.querySelectorAll('.tab_content');
    const btns = aTabBtns.querySelectorAll('.tab_link');
    if(TabVis === 'false'){
    showPannel(activeTab, btns, allPannels)

    }
})

function showPannel(atab, aBtns,aP){
    aBtns.forEach(btn =>{
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    })
    atab.classList.add('active');
    atab.setAttribute('aria-selected', 'true');

    // console.log(aBtns)
    // console.log(aP);

    aP.forEach(pannel =>{
        pannel.classList.remove('active');
        pannel.setAttribute('aria-hidden', 'true');
        if(pannel.getAttribute('aria-labelledby') === atab.getAttribute('id')){
            pannel.classList.add('active');
            pannel.setAttribute('aria-hidden', 'false');
        }
    })

}