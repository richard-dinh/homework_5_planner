let appointment
let now = moment().format('H')
const renderCalendar = () =>{
  //renders the appointment info
  for (let i = 7; i < 19; i++) {
    let selector = $(`#${i}`)
    let key = i.toString()
    //only outputs if there is a key
    if (localStorage.getItem(key) !== null) {
      let temp = JSON.parse(localStorage.getItem(key))
      selector.val(temp.text)
    }
  }
  //render the current day
  $('#currentDay').text(`${moment().format('dddd')}, ${moment().format("LL")}`)
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

const colorCode = ()=>{
  for(let i = 7; i<19; i++){
    let selector = $(`#${i}`)
    now = parseInt(now)
    //code for if in the past
    if(i<now){
      selector.addClass('past')
      selector.removeClass('future')
      selector.removeClass('present')
    }
    //code for present hour
    else if(i===now){
      selector.removeClass('future')
      selector.removeClass('past')
      selector.addClass('present')
    }
    //code for future hour
    else{
      selector.removeClass('past')
      selector.removeClass('present')
      selector.addClass('future')
    }
  }
}

renderCalendar()
console.log(now)
setInterval(colorCode, 1000);

console.log(moment().format("LL"))

