let appointment
const renderCalendar = () =>{
  for (let i = 7; i < 19; i++) {
    let selector = $(`#${i}`)
    let key = i.toString()
    //only outputs if there is a key
    if (localStorage.getItem(key) !== null) {
      let temp = JSON.parse(localStorage.getItem(key))
      selector.val(temp.text)
    }
  }
}

const saveAppointment = id => {
  id = parseInt(id)
  id = id.toString()
  let selector = $(`#${id}`)
  appointment = {
    text: `${selector.val()}`,
  }
  console.log(selector.val())
  console.log(selector.text())
  localStorage.setItem(`${selector.attr('id')}`, JSON.stringify(appointment))
  renderCalendar()
}

$(document).click(_=>{
  let target = $(event.target)
  console.log($(event.target))
  //checks if a button is clicked
  if($(event.target).hasClass('saveBtn')){
    saveAppointment(target.attr('id'))
  }
})

renderCalendar()
let now = moment().format('H')
console.log(now)


