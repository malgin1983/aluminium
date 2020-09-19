
const name = document.querySelector('#contacts__form-input-text')
const phone = document.querySelector('#phone')
const email = document.querySelector('#email')
const files = document.querySelector('#file-input')
const btnForm = document.getElementById('add-form')
const massage = document.querySelector('#text-form')

const fromForm = {
    name: 'Анонинмный пользователь.',
    phone: 'Номер телефона не указан.',
    email: 'Адрес почты не указан',
    massage: ''
}

!!name && name.addEventListener('change', (event) =>{
    fromForm.name = event.target.value;
})

!!phone && phone.addEventListener('change', (event) =>{
    fromForm.phone = event.target.value;
})

email && email.addEventListener('change', (event) =>{
    fromForm.email = event.target.value;
})
massage && massage.addEventListener('change', (event) =>{
    fromForm.massage = event.target.value;
})


async function submit(data) {
    try{
        const response = await fetch('/contact/add', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await JSON.parse(response)
        console.log('result fetch', result)

    } catch (e) {
        console.log('submit error', e)
    }
}


btnForm && btnForm.addEventListener('click', (event)=>{
        submit(fromForm)
    })
