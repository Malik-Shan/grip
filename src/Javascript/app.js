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

fetch("../../data.json")
.then(res => res.json())
.then(data => showInfo(data));
function showInfo(data){
    data.forEach(info =>{
        let pDate = info.date;
        let current = new Date
        let date = current.getDate()
        let m = current.getMonth()
        let month = ["01","02","03","04","05","06","07","08","09","10","11","12"]
        let year = current.getFullYear()
        let currentDate = `${year}-${month[m]}-${date}`
        let nextDate = `${year}-${month[m]}-${date + 1}`
        let schInfo = info.information
        scheduleNoto(currentDate, nextDate, pDate, info);
        
        function scheduleNoto(current,nextDate, pDate){
            const scheduleTemp = document.querySelector("[data-schedule-noto]");
            const scheduleInfoToday = document.querySelector("[data-schedule-noto] .today");
            const scheduleInfoNext = document.querySelector("[data-schedule-noto] .next");
            // console.log(scheduleTemp)
            const tSubject = scheduleTemp.querySelector("[data-tSubject]");
            const nSubject = scheduleTemp.querySelector("[data-nSubject]");
            if(pDate === current){
                scheduleInfoToday.setAttribute('data-info-today', schInfo)
                tSubject.textContent = info.subject
            }
            else if( pDate === nextDate){
                scheduleInfoNext.setAttribute('data-info-next', schInfo)
                nSubject.textContent = info.subject
            }
        }

    })
}