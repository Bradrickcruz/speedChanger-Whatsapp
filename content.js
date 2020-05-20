var activate = false;

const interval = setInterval(()=>{
    const header = document.querySelector("._3auIg");
    if (header){
        clearInterval(interval);
    
        const btn = document.createElement("button");
        btn.innerHTML = "2x"
        btn.classList.add("twoTimesButton")

        btn.addEventListener("click",()=>{
            const audios = document.querySelectorAll("audio")

            if (activate){
                activate = false;
                btn.style = "color: gray";
                audios.forEach(audio => {
                    audio.playbackRate = 1;
                });
            }

            else {
                activate = true;
                btn.style = "color: #1C8B82";
                audios.forEach(audio => {
                    audio.playbackRate = 2;
                });
            }
        })
        header.appendChild(btn)

    }
    
},1000)


