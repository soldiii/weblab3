async function go() {
    let vacancies = document.getElementById("input").value;
    let request = `https://api.hh.ru/vacancies?only_with_salary=true&per_page=100&page=1&text=${vacancies}`;
    let response = await fetch(request).then(response => response.json()).then(data => {console.log(data);
       let vac='';
        for(let i = 0; i<data.items.length;i++)
        {
            let salary = ""
            let valuta=data.items[i].salary.currency
            if(valuta==='RUR'){valuta="RUB"}
            if(data.items[i].salary.from!=null && data.items[i].salary.to!=null)
            {
                salary = "от "+data.items[i].salary.from+" до "+data.items[i].salary.to+" "+valuta
            }
            else if (data.items[i].salary.from ==null && data.items[i].salary.to==null)
            {
                salary = "Не указана";
            }
            else if(data.items[i].salary.from==null && data.items[i].salary.to!=null)
            {
                salary = "зарплата до "+data.items[i].salary.to+" "+valuta;
            }
            else if(data.items[i].salary.from!=null && data.items[i].salary.to==null)
            {
                salary = "зарплата от "+data.items[i].salary.from+" "+valuta;
            }
            vac +="Вакансия №"+(i+1)+ "\nНазвание вакансии: "+data.items[i].name +"\nКомпания: "
                +data.items[i].employer.name+"\nГород: "+data.items[i].area.name+"\nЗарплата: "
                +salary+"\nСсылка: "+data.items[i].alternate_url+'\n\n\n'

        }
        //console.log(vac);
        document.getElementById("result").innerText=vac;
    })
}