function give() {
    const input = document.getElementById("input").value;
    if (input != null && input % 2 == 0) {
        document.getElementById("div1").style.backgroundColor = "green";
        document.getElementById("div1").innerText = "Thanks";
        document.getElementById("div2").style.backgroundColor = "green";
        document.getElementById("div2").innerText = "You";
        document.getElementById("div3").style.backgroundColor = "green";
        document.getElementById("div3").innerText = "A lot";
        document.getElementById("div4").style.backgroundColor = "green";
        document.getElementById("div4").innerText = "For";
        document.getElementById("div5").style.backgroundColor = "green";
        document.getElementById("div5").innerText = "This";
        document.getElementById("div6").style.backgroundColor = "green";
        document.getElementById("div6").innerText = "Game";
    }
    else if (input != null && input % 2 == 1) {
        document.getElementById("div1").style.backgroundColor = "red";
        document.getElementById("div1").innerText = "I";
        document.getElementById("div2").style.backgroundColor = "red";
        document.getElementById("div2").innerText = "Am";
        document.getElementById("div3").style.backgroundColor = "red";
        document.getElementById("div3").innerText = "So";
        document.getElementById("div4").style.backgroundColor = "red";
        document.getElementById("div4").innerText = "sorry";
        document.getElementById("div5").style.backgroundColor = "red";
        document.getElementById("div5").innerText = "Try";
        document.getElementById("div6").style.backgroundColor = "red";
        document.getElementById("div6").innerText = "Again";


        const show = () => {
            document.getElementById("div1").style.display = "none";
            document.getElementById("div2").style.display = "none";
            document.getElementById("div3").style.display = "none";
            document.getElementById("div4").style.display = "none";
            document.getElementById("div5").style.display = "none";
            document.getElementById("div6").style.display = "none";


        }
        setInterval(show, 1000)
    }

}
give()
