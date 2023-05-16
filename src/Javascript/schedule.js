const template = document.querySelector('template');
const table = document.querySelector('[data-table]');
fetch("../../data.json")
.then(res => res.json())
.then(data => showInfo(data));
function showInfo(data){
    data.forEach(tabledata =>{
        const td = template.content.cloneNode(true);
        const date = td.querySelector('[data-cell="date"]')
        const subject = td.querySelector('[data-cell="subject"');
        const syllabus = td.querySelector('[data-cell="info"');
        date.textContent = tabledata.date;
        subject.textContent = tabledata.subject;
        syllabus.textContent = tabledata.information;
        let current = new Date
        let tdate = current.getDate()
        let m = current.getMonth()
        let month = ["01","02","03","04","05","06","07","08","09","10","11","12"]
        let year = current.getFullYear()
        let currentDate = `${year}-${month[m]}-${tdate}`
        if( tabledata.date === currentDate){
            const today = td.querySelector('[data-row]')
            today.classList.add('schedule_today');
            table.append(today);
        }
        else{
        table.append(td);

        }

    })
}