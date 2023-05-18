function give() {
    const input = document.getElementById("input").value;
    if (input % 2 == 0) {
        document.getElementById("div").style.backgroundColor = "green";

    }
    else if (input % 2 == 1) {
        document.getElementById("div").style.backgroundColor = "red";
        const show = () => {
            document.getElementById("div").style.display = "none";

        }
        setInterval(show, 1000)
    }

}
give()
