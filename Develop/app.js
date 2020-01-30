let appointment

const saveAppointment = id => {
  id = parseInt(id)
  id = id.toString()
  let selector = $(`#${id}`)
  appointment = {
    text: `${selector.val()}`,
    time: `${selector.text()}`
  }
  localStorage.setItem(`${selector.attr('id')}`, JSON.stringify(appointment))
}
const renderCalendar = _=>{
  for (let i = 9; i< 18; i++){
    let selector = $(`#${i}`)
    let key = i.toString()
    //only outputs if there is a key
    if (JSON.parse(localStorage.getItem(key)) !==null){
      let temp = JSON.parse(localStorage.getItem(key))
      selector.text(temp.text)
    }
  }
}
$(document).click(_=>{
  let target = $(event.target)
  console.log($(event.target))
  //checks if a button is clicked
  if($(event.target).is('button')){
    console.log('BUTTON')
    console.log(target.attr('id'))
    saveAppointment(target.attr('id'))
  }
})

renderCalendar()


