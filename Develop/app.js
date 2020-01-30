
let nineText = $('#9')
let nineBtn = $('#nineBtn')
let nineHour = $('#nineHour')
let appointment
nineBtn.click(()=>{
  appointment = {
    text: `${nineText.val()}`,
    time: `${nineHour.text()}`
  }
  //sets the key to be the id of the textera of that hour
  localStorage.setItem(`${nineText.attr('id')}`,JSON.stringify(appointment))
})

const renderCalendar = _=>{
  for (let i = 9; i< 18; i++){
    let selector = $(`#${i}`)
    let key = i.toString()
    //only outputs if there is a key
    if (JSON.parse(localStorage.getItem(key)) !==null){
      let temp = JSON.parse(localStorage.getItem(key))
      selector.text(temp.text)
      console.log(temp.text)
    }
  }
}

renderCalendar()

