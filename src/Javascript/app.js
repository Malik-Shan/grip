let copyrightYear = document.querySelector("[data-year]");
let currentYear = new Date().getFullYear();
copyrightYear.textContent = `${currentYear}`;

const dropdownbtn = document.querySelector('.dropdown1');
const dropdownmenu = document.querySelector('.dropdown_menu1');
const dropcarret = document.querySelector('.dropdown1 a i');

dropdownbtn.addEventListener('click', (e)  =>{
    const dropped = dropdownmenu.getAttribute('data-drop');
    // dropdownmenu.setAttribute('data-drop', true);
    if( dropped === 'false'){
        dropdownmenu.setAttribute('data-drop', true);
        dropcarret.setAttribute('data-drop', true);
    }
    else{
        dropdownmenu.setAttribute('data-drop', false);
        dropcarret.setAttribute('data-drop', false);
    }
})
document.addEventListener('click', (e)=>{
    const closetomenu = e.target.closest('.dropdown_menu1');
    const closetobtn = e.target.closest('.dropdown1');
    // console.log(closetomenu);
    if(closetomenu || closetobtn) return;
    dropdownmenu.setAttribute('data-drop', false);
        dropcarret.setAttribute('data-drop', false);
});

// 2nd dropdown for setting
const dropdownbtn2 = document.querySelector('.dropdown2');
const dropdownmenu2 = document.querySelector('.dropdown_menu2');

dropdownbtn2.addEventListener('click', (e)  =>{
    const dropped = dropdownmenu2.getAttribute('data-drop');
    if(dropped === 'false'){
        dropdownmenu2.setAttribute('data-drop', true);
    }
    else{
        dropdownmenu2.setAttribute('data-drop', false);
    }
})
document.addEventListener('click', (e)=>{
    const closetomenu = e.target.closest('.dropdown_menu2');
    const closetobtn = e.target.closest('.dropdown2');
    if(closetomenu || closetobtn) return;
    dropdownmenu2.setAttribute('data-drop', false);
});

fetch("/data.json")
.then(res => res.json())
.then(data => showInfo(data));
function showInfo(data){
    eval(data.jsondata).forEach(info =>{
        // schedule date formatting
        let schDate = new Date(info.date).toLocaleDateString('en-UK', {
            timezone:'UTC',
        });
        // current Date
        let current = new Date();
        // current date formatting
        let currentDate = current.toLocaleDateString('en-UK', {
            timezone:'UTC',
        });

        // Next Date
        let newdate = new Date(current);
        newdate.setDate(current.getDate() + 1);

        // Next date formatting
        let nextDate = newdate.toLocaleDateString('en-UK', {
            timezone:'UTC',
        });
        
        let schInfo = info.information
       
        scheduleNoto(currentDate, nextDate, schDate, info);
        
        function scheduleNoto(current,nextDate, pDate,info){
            const scheduleTemp = document.querySelector("[data-schedule-noto]");
            const scheduleInfoToday = document.querySelector("[data-schedule-noto] .today");
            const scheduleInfoNext = document.querySelector("[data-schedule-noto] .next");
            // console.log(scheduleTemp)
            const tSubject = scheduleTemp.querySelector("[data-tSubject]");
            const nSubject = scheduleTemp.querySelector("[data-nSubject]");
            
            if(pDate === current){
                scheduleInfoToday.setAttribute('data-info-today', schInfo)
                scheduleInfoToday.setAttribute('data-series', info.series)
                tSubject.textContent = info.subject
            }
            else if( pDate === nextDate){
                scheduleInfoNext.setAttribute('data-info-next', schInfo)
                scheduleInfoNext.setAttribute('data-series', info.series)
                nSubject.textContent = info.subject
            }
        }

    })
}

const searchModalOpen = document.querySelector('.fsb');
    searchModalOpen.addEventListener('click', (e)=>{
        const modal = document.querySelector('.searchModal');
        const hidden = modal.getAttribute('aria-hidden');
        if(hidden === 'true'){
         modal.setAttribute('aria-hidden' , 'false');
         modal.showModal();
        }

        const closeModal = document.querySelector('.closeModal i');
        closeModal.addEventListener('click', () =>{
            const modal = document.querySelector('.searchModal');
            const hidden = modal.getAttribute('aria-hidden');
            if(hidden === 'false'){
            modal.setAttribute('aria-hidden', 'true');
             modal.close();

            }
        })
    })

    
    
// window.addEventListener('keydown', (e)=>{
//     const modal = document.querySelector('.searchModal');
//     modal.hasAttribute('open');
//     if(e.key === '/' && modal.getAttribute('aria-hidden') === 'true'){
//         modal.showModal();
//         modal.setAttribute('aria-hidden', 'false');
//     }
// })