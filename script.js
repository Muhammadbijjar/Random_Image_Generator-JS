const imgContainer = document.querySelector('.img-container')
const btnEl = document.querySelector('.btn')

btnEl.addEventListener('click',()=>{
    // console.log("click me")
    imgNum = 6
    updateImg()
})

function updateImg(){
    for(let i = 0; i<imgNum; i++){
        const newImg = document.createElement("img")
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`
        imgContainer.appendChild(newImg)
    }
   
}