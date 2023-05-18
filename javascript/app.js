function give() {
    const input = document.getElementById("input").value;
    if (input % 2 == 0) {
        document.getElementById("div1").style.backgroundColor = "green";
        document.getElementById("div2").style.backgroundColor = "green";
        document.getElementById("div3").style.backgroundColor = "green";
        document.getElementById("div4").style.backgroundColor = "green";
        document.getElementById("div5").style.backgroundColor = "green";
        document.getElementById("div6").style.backgroundColor = "green";


    }
    else if (input % 2 == 1) {
        document.getElementById("div1").style.backgroundColor = "red";
        document.getElementById("div2").style.backgroundColor = "red";
        document.getElementById("div3").style.backgroundColor = "red";
        document.getElementById("div4").style.backgroundColor = "red";
        document.getElementById("div5").style.backgroundColor = "red";
        document.getElementById("div6").style.backgroundColor = "red";

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
