



function  toDegree () {
   
   let inputBefore = document.getElementById("input-percents");
   let input =  parseFloat(inputBefore.value) || 0.2;
   degree = (360/100)*input;
   showDegree = Math.floor(degree);
   minutes = Math.floor((360*input % 100)*60/100);
   seconds = Math.round((((360*input % 100)*60)%100)*60/100);
   
   const showResult = document.getElementById("result")
   showResult.innerHTML = `Degree: ${showDegree}&#176; ${minutes}' ${seconds}" `
   return degree;
}


function toPercent () {
   
   let inputBefore = document.getElementById("input-degree").value;
   
   const numArr = [];
   for (let i = 0; i < 3; i++) {
      let splitedPiece = parseFloat(inputBefore.split(' ')[i]);
      numArr.push(splitedPiece);
   }
   
   const result = ((((numArr[2]/60) + numArr[1])/60 + (numArr[0]))*100/360);
  
   const showResult = document.getElementById("result-percents")
   showResult.innerHTML = `Percents: ${result} &percnt;`
}


function turnOffAnimation () {
   const titles = document.querySelectorAll(".title");
   titles.forEach((item) => {
      item.addEventListener('click', () =>item.classList.toggle("animation") );
      
   });
   
   
}
turnOffAnimation();


// stops rotation of cube
function freezeCubeAnimation() {
   const ball = document.getElementsByClassName('ball')[0];
  

   const goodThing = document.getElementsByClassName('good-thing')[0];
   const cube = document.getElementsByClassName('cube')[0];
   const ballShadow = document.getElementsByClassName('ballShadow')[0];
   
   
   
   const neonButton = document.getElementsByClassName('neon-btn')[0]
   neonButton.addEventListener('click', () => insertion())
   
   function insertion () {
      
      const animation = [ball, goodThing, cube, ballShadow];
      animation.forEach((item) => item.classList.toggle('pauseAnimation'))   
   }
}
freezeCubeAnimation();

//  Scrolling down

let btn = document.getElementsByClassName('input--converter')[0];
btn.addEventListener('focus', () =>  {window.scroll(0, document.querySelector('body').scrollHeight)})


// Adding elements

let thisList = document.getElementsByTagName('ul')[0];



const newItem = document.createElement('li');
const newItemText = document.createTextNode('Fuck')
newItem.appendChild(newItemText)
thisList.appendChild(newItem)
thisList.insertBefore(newItem, thisList.firstChild)

 thisList = document.getElementsByTagName('ul')[0];
const lastElement = document.createElement('li');
const blackTrickery = document.createTextNode('Black Fuckery');
lastElement.appendChild(blackTrickery);
thisList.appendChild(lastElement)


// Adding h2 element with a value of "Me amore"
const headingCont = document.querySelectorAll('h2')[2];
const headingText = headingCont.firstChild.nodeValue;
const listLength = document.getElementsByTagName('li').length;
const newHeadingValue = headingText +  " " + listLength;
headingCont.textContent = newHeadingValue

headingCont.className = 'heading'

// Changing the color of the heading
const meAmure = document.getElementsByClassName('heading')[0]
meAmure.style.color = "rgb(5, 214, 169)";


// Blur

// const degreeInput = document.getElementsByClassName("input--converter")[1];
// degreeInput.addEventListener('blur', () => window.scroll(0, 2))


// Checking a username

const elListenee = document.getElementById('userName')
elListenee.onblur = checkUsername

function checkUsername () {
   let message = document.getElementById('feedBack')

   if (this.value.length <= 5) {
      message.textContent = 'Too short'
   } else {
      message.textContent = 'You have such a beautiful name!'
   }

}

// The object "Event"

function myMarryFuck (e) {
   const target = e.target;
  
}



const el = document.getElementsByClassName('checking-username')[0];
el.addEventListener('click', myMarryFuck, false);


// Removing items from ul

const listOne = document.querySelectorAll('li')[1]
listOne.firstChild


const fazerList = document.getElementById('fazerList')
fazerList.addEventListener('click', function (e) {itemDone(e)}, false)
function itemDone(e) {
   
   const target = e.target
   const elParent = target.parentNode
   const grandPar = elParent.parentNode
   
   grandPar.removeChild(elParent)
   e.preventDefault()
   
}


// Load 
// Adds the text on loading the page
window.addEventListener('load', putinText)

function putinText (){
   const elText = document.getElementById('afterload')
   elText.textContent = "Harry Potter"
   
}

// Resize 
// Changes the color of text on resizing the window
function resize (){
   window.addEventListener('resize', colorBending)
   
   function colorBending () {
      const elText = document.getElementById('afterload') 
      let rRan = Math.floor((Math.random())*255)
      let gRan = Math.floor((Math.random())*255)
      let bRan = Math.floor((Math.random())*255)
      elText.style["color"] = `rgb(${rRan}, ${gRan}, ${bRan})`;
     
   
   }
}
resize()








// Intersection

function intersection () {
   let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.75
   }
   let callback = (entries, observer) => {
      // console.log(entries)
      entries.forEach(entry => {
         // console.log(entry.isIntersecting)
         if (entry.isIntersecting) {
            if (!document.getElementsByClassName('ads')[0]){

               const newEl = document.createElement('div')
               newEl.setAttribute('class', 'ads')
               const userName = document.getElementById('stupid-alloy__inverter')
               console.log(newEl.hasAttribute('ads'))
               userName.append(newEl)
            }
         } else {
            const checking = document.getElementsByClassName('ads')[0]
            if (checking) {
               const elderCheck = checking.parentNode
               window.setTimeout(
                  () => elderCheck.removeChild(checking), 500
               )
                  console.log(checking)
               checking.className = 'ads evanescence'
               }
         }
      })
   }
   let observer = new IntersectionObserver(callback, options)
   
   let target = document.querySelector('#stupid-alloy')
   
   observer.observe(target)
}

intersection()




// Intersection #2

let options = {
   root: null,
   rootMargin: '0px',
   threshold: 0
}

let callback = (entries) => {
   entries.forEach( entry => {

      console.log(!!entry.isIntersecting)
      if (entry.isIntersecting) {
         
         if (document.getElementsByClassName('ads')[0]){
            
            window.addEventListener('scroll', () => downward)

            function downward () {
            let plane = document.getElementsByClassName('ads')[0]
            console.log(plane)
            let rRan = Math.floor((Math.random())*255)
            let gRan = Math.floor((Math.random())*255)
            let bRan = Math.floor((Math.random())*255)
           
            plane.style.background =  `rgb(${rRan}, ${gRan}, ${bRan})`
            }
         }



         // Scroll 
         
         /*
            window.addEventListener('scroll', () => window.setTimeout(downward, Math.floor((Math.random())*255)))

            function downward () {
            const elBody = document.getElementsByClassName('inverter')[2]
            let rRan = Math.floor((Math.random())*255)
            let gRan = Math.floor((Math.random())*255)
            let bRan = Math.floor((Math.random())*255)
            let rRan1 = Math.floor((Math.random())*255)
            let gRan2 = Math.floor((Math.random())*255)
            let bRan3 = Math.floor((Math.random())*255)
            elBody.style["background-image"] =  `repeating-conic-gradient(from 35deg  at 50% 50%, rgb(${rRan}, ${gRan}, ${bRan}) 9deg 19deg, rgb(${rRan1}, ${gRan2}, ${bRan3}) 19deg 27deg)`

            
         }
         */
      } 
   })
}

let observer = new IntersectionObserver(callback, options)

let target = document.querySelector('#stupid-alloy__inverter')

observer.observe(target)


// Cursor dislocation

function cursorLocation () {



   const boxy = document.querySelectorAll('.boxy')
   const idArray = []
   boxy.forEach( element => { 
      idArray.push(document.getElementById(`${element.id}`))
   })
 
   function showPosition (event) {
      const { screenX, screenY, pageX, pageY, clientX, clientY } = event

      idArray[0].textContent = screenX
      idArray[1].textContent = screenY
      idArray[2].textContent = pageX
      idArray[3].textContent = pageY
      idArray[4].textContent = clientX
      idArray[5].textContent = clientY


   }

   const body = document.querySelector('body')
   body.addEventListener('mousemove', showPosition)
  
}
cursorLocation ();



// Mouse Events


function General (index, event) {
   
   let meve = document.querySelectorAll(".mouseEve")[index]
   
   
   const functionCollection = {

      dblclick: function makeDblclick () {
          meve.classList.toggle('db-mouse-click')
         },
         
      mousedown: function makeMouseDown () {
         meve.classList.toggle('db-mouse-click')
         },

      mouseup: function makeDblclick () {
          meve.classList.toggle('db-mouse-click')
         },
         
      mouseover: function makeMouseDown () {
         meve.classList.toggle('db-mouse-click')
         },

      mouseout: function makeDblclick () {
          meve.classList.toggle('db-mouse-click')
         },
         
      mousemove: function makeMouseDown () {
         meve.classList.toggle('db-mouse-click')
         }
   }

   meve.addEventListener(event, functionCollection[event])
   
   return this;
}

General(0, "dblclick")
General(1, "mousedown")
General(2, "mouseup")
General(3, "mouseover")
General(4, "mouseout")
General(5, "mousemove")


// KeyBoard Events

function buildKeyEve (i, event, eventKey) {
   
   const inputCollection = document.querySelectorAll(".input")
   const keyEveCollection = document.querySelectorAll('.keyEve')
   
   const functionCollection = {

      input: function input () {
         counter = ( 180 - inputCollection[i].value.length)
         keyEveCollection[i].textContent = counter
      },
      
      keydown: function input () {
         counter = ( 180 - inputCollection[i].value.length)
         keyEveCollection[i].textContent = counter
      },

      keypress: function input () {
         counter = ( 180 - inputCollection[i].value.length)
         keyEveCollection[i].textContent = counter
      },
      
      keyup: function input () {
         counter = ( 180 - inputCollection[i].value.length)
         keyEveCollection[i].textContent = counter
      },

      forkeyCode: function (event) {
         keyEveCollection[i].textContent = `event.keyCode: ${event.keyCode},
         the pressed key is: ${String.fromCharCode(event.keyCode)}`
      },
      
      threeTypes: function input (event) {
         keyEveCollection[i].textContent = `event.code: ${event.code},
         event.key: ${event.key}`
      }
   }

   inputCollection[i].addEventListener(event, functionCollection[eventKey])
}

buildKeyEve (0, 'input', 'input')
buildKeyEve (1, 'keydown', 'keydown')
buildKeyEve (2, 'keypress', 'keypress')
buildKeyEve (3, 'keyup', 'keyup')
buildKeyEve (4, 'keypress', 'forkeyCode')
buildKeyEve (5, 'keypress', 'threeTypes')


// Form Events

function formEvents () {

   const submit = document.getElementById("thisFucker")
   submit.addEventListener('submit', checkTerms)

   const impCheck = document.getElementById('important-checkbox')
   const checkboxText = document.getElementById('last-element-for-checkbox')
   const nodes = document.getElementsByClassName("inside-form-divs")
   const parDiv = nodes[0].parentNode
   
   function checkTerms (event) {
      if (!impCheck.checked) {
         event.preventDefault()
         checkboxText.textContent = 'You have to agree with the important checkbox'
      } else {
         event.preventDefault()
        
         const newDiv = document.createElement('div')
         newDiv.setAttribute('id', 'new-born')
         parDiv.parentNode.insertBefore(newDiv, parDiv)
         
      }
   }

   nodes[1].addEventListener('input', writeInside)
   
   function writeInside (e) {
      const sec = document.getElementById("input--event-form")
      const paragraph = document.getElementById('input--event-form__paragraph')
      paragraph.textContent = sec.value
   }
   
   nodes[2].addEventListener('change', howMuchLetters)

   function howMuchLetters () {
      const tre = document.getElementById('change--event-form')
      const par = document.getElementById('change--event-form__paragraph')
      par.textContent = tre.value
   }
}
formEvents ()


// Change Listeners

function listenInsersion () {

   function doAddEther (body) {
      const newRow = document.createElement("tr")
      newRow.setAttribute("id", "newRow")
      
      const newDataOne = document.createElement("td")
      newDataOne.setAttribute("id", "newDataOne")
      const newDataOneText = document.createTextNode("Ether")
      newDataOne.append(newDataOneText)
      
      
      const newDataTwo = document.createElement("td")
      newDataTwo.setAttribute("id", "newDataTwo")
      const newDataTwoText = document.createTextNode("88")
      newDataTwo.append(newDataTwoText)
      
      newRow.append(newDataOne)
      newRow.append(newDataTwo)
      
      const bodyIns = document.getElementById('DOMNodeInserted__body')
      bodyIns.appendChild(newRow)

      addEther.removeEventListener('click', doAddEther)

   }
   
    function recountForInsertion (idOfTable) {
      let count = 0;
      const tableRows = document.querySelectorAll('tr')
      tableRows.forEach(  item => 
         (item.offsetParent.id === `${idOfTable}`) && (item.parentElement.localName === "tbody" ) ? count++ :
         "")
     
     const totalCount = document.getElementById('total-count')
     totalCount.textContent = `The count of elements is: ${count}`
   }

    function recountForRemoval (idOfTable) {
      let count = 0;
      const tableRows = document.querySelectorAll('tr')
      tableRows.forEach(  item => 
         (item.offsetParent.id === `${idOfTable}`) && (item.parentElement.localName === "tbody" ) ? count++ :
         "")
      const totalCount = document.getElementById('total-count-removed')
      totalCount.textContent = `The count of elements is: ${count}`
      
   }

   function removeWater () {
      const removeeParent = document.getElementById("DOMNodeRemoved__body")
      removeeParent.lastElementChild.remove()
      btnRemove.removeEventListener('click', removeWater)
   }

   // Adding
   recountForInsertion('DOMNodeInserted')
   
   const addEther = document.getElementById("add-ether")
   addEther.addEventListener('click', doAddEther)
   
   const DOMNodeInserted = document.getElementById('DOMNodeInserted')
   DOMNodeInserted.addEventListener('DOMNodeInserted', () => recountForInsertion("DOMNodeInserted"))
   
   // Removal
   recountForRemoval("DOMNodeRemoved")
   const btnRemove = document.getElementById('remove-ether')
   btnRemove.addEventListener('click', removeWater)
  
   const DOMNodeRemoved = document.getElementById("DOMNodeRemoved")
   DOMNodeRemoved.addEventListener('DOMNodeRemoved', () => window.setTimeout(recountForRemoval, 0.00000002, "DOMNodeRemoved"))
   
   // Setting up the width of buttons
   const btn = document.querySelectorAll('.neon-btn.change-listeners')
   const tableWidth = getComputedStyle(DOMNodeInserted)["width"]
   btn.forEach(item =>  item.style = `width: ${tableWidth}`)

}
listenInsersion ()



// HTML5 Events

let beforeunloadInfo 

function html5Events () {
   const tSlots = document.querySelectorAll('#html5-events table tbody tr td')
   
   window.addEventListener('DOMContentLoaded', pageLoaded)

   window.addEventListener('hashchange', informHashChange)
   const btn = document.getElementById('hash-changer')
   btn.addEventListener('click', changePart)

   
   const beforeUnloadListener = (event) => {
      event.preventDefault()
      event.returnValue = 'You are my favorite part of this site.'
      
      function exitAlert () {
         const exitAlertEl = document.createElement('div')
         exitAlertEl.classList.add('exitAlert-classy')
         const parent = document.getElementById("html5-events")
         parent.appendChild(exitAlertEl)
         
         const textAlert = document.createElement('p')
         textAlert.classList.add('text-alert')
         window.setTimeout(function() {textAlert.textContent = "You are my favorite part of this site."}, 2000)
         exitAlertEl.appendChild(textAlert)
      }
      exitAlert ()
   }

   const nameInput = document.querySelector("#willy-billy")
   nameInput.addEventListener('input', (event) => {
      if (event.target.value !== "") {
         addEventListener('beforeunload', beforeUnloadListener, {capture: true})
      } else {
         removeEventListener('beforeunload', beforeUnloadListener, {capture: true})
      }
   })

   function pageLoaded () {
      tSlots[0].textContent = "DOM fully loaded and parsed"
   }
   function informHashChange (event) {
      tSlots[1].textContent = "Hash's changed"
      tSlots[1].style.color = "rgb(0, 45, 235)"
      const tCells =document.querySelectorAll('#urls-old-and-new tbody tr td')
      tCells[1].textContent = event.oldURL
      tCells[3].textContent = event.newURL
      console.log(tCells)
   }
   
   function changePart () {
      location.hash = "new"
      window.setTimeout( removeHash, 2000)
      function removeHash () {
         location.hash = ""
         window.scrollTo(0, document.querySelector('body').scrollHeight)
      }
   }
}
html5Events();

// jQuery

function newAdventure () {
   $('#newAdventure').height('500px')

   $("#newAdventure").hide().fadeIn(1500)
   $('#newAdventure tbody tr td').height('18px')
   $('#newAdventure *div').height('20px').width('20px')
   // const allSelector = document.querySelectorAll('#newAdventure tbody tr td div')
   // allSelector.forEach( item => item.style.background = 'red')

   $secondItem = $('#newAdventure tbody tr:nth-child(2) td div:first')
   $secondItem.on('mouseover', function () {
      const noteStick = document.createElement('div')
      console.log(noteStick)
      noteStick.classList.add('note-stick')
      $(this).append(noteStick)
   })
   $secondItem.on('mouseout', function () {
      $('#newAdventure tbody tr:nth-child(2) td div:first div').remove()
      console.log('dd')
   })

   // *
   $("#newAdventure tbody tr:nth-child(1) td div:first").css({"border": "1px solid rgb(200, 200, 200)"})

   // :last, :first
   $("#newAdventure tbody tr:nth-child(2) td div:first").css('background', 'white')
   $("#newAdventure tbody tr:nth-child(3) td div:last").css('background', 'grey')

   // :even, :odd
   $("#newAdventure tbody tr:nth-child(4) td div:odd").css('background', 'red')
   $("#newAdventure tbody tr:nth-child(5) td div:even").css('background', 'green')

   // :gt(), :eq(), :lt()
   $('#newAdventure tbody tr:nth-child(6) td div:eq(0)').css('background', 'blue')
   $('#newAdventure tbody tr:nth-child(7) td div:gt(0)').css('background', 'blue')
   $('#newAdventure tbody tr:nth-child(8) td div:lt(4)').css('background', 'blue')
   
   // .slice()
   $('#newAdventure tbody tr:nth-child(9) td div').slice(4).css('background', 'blue')
   $('#newAdventure tbody tr:nth-child(10) td div').slice(2).css('background', 'blue')
   $('#newAdventure tbody tr:nth-child(11) td div').slice(-2).css('background', 'blue')
   $('#newAdventure tbody tr:nth-child(12) td div').slice(1,4).css('background', 'blue')
}
newAdventure ()

// Ready method



window.addEventListener('DOMContentLoaded', function () {
   const firstPar = document.querySelector('#DOMContentLoaded-paragraph')
   firstPar.textContent = "This paragraph loads when all nodes have been constracted. It uses 'DOMContentLoaded' and loads first before the background image."
})

window.addEventListener('load', function () {
   const secondPar = document.querySelector('#load-paragraph')
   secondPar.textContent = "This paragraph loads when all sources are loaded. It uses 'load' and loads slowly."
})

$(function(){
   $('#ready p').slice(2,3).text("This paragraph uses '$(function(){}' syntax and loads slowly as 'load'.")
})

$(window).on( "load", function(){
   $('#ready p').slice(3,4).text("This is $(window).on( 'load', function()) and it's the same as 'load'.")
})
