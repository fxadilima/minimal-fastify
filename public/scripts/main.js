
const onTest1 = () => {
    const elm = document.getElementById("msg");
    const btn = document.getElementById("btn1");
    if (btn.innerHTML === "Test 1") {
        btn.innerHTML = "Close";
        elm.innerHTML = "<p>Ini pesan dari onTest1 event handler.</p>";
    }
    else {
        elm.innerHTML = "";
        btn.innerHTML = "Test 1";
    }
}
