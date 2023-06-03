const template = document.querySelector('template');
const table = document.querySelector('[data-table]');
fetch("/data.json")
.then(res => res.json())
.then(data => showInfo(data));

function showInfo(data){
    const json = eval(data.jsondata)
    json.forEach(tabledata =>{
        const td = template.content.cloneNode(true);
        const date = td.querySelector('[data-cell="date"]')
        const subject = td.querySelector('[data-cell="subject"');
        const syllabus = td.querySelector('[data-cell="info"');
        date.textContent = tabledata.date;
        subject.textContent = tabledata.subject;
        syllabus.textContent = tabledata.information;
        // schedule date formatting
        let schDate = new Date(tabledata.date).toLocaleDateString('en-UK', {
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
        if( schDate === currentDate){
            const today = td.querySelector('[data-row]')
            today.classList.add('schedule_today');
            table.append(today);
        }
        else if(tabledata.subject === 'PREPARATORY LEAVE'){
            const holiday = td.querySelector('[data-row]');
            holiday.classList.add('holiday');
            table.append(holiday);
        }else if(tabledata.subject === 'DUA E KHAIR'){
            const holiday = td.querySelector('[data-row]');
            holiday.classList.add('holiday');
            table.append(holiday);
        }else if(tabledata.subject === 'EID-UL-ADHA HOLIDAYS'){
            const holiday = td.querySelector('[data-row]');
            holiday.classList.add('eid');
            table.append(holiday);
        }
        else{
        table.append(td);

        }

    })
}