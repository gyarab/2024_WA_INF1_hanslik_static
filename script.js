const st = document.getElementById("style")
const alt = document.getElementById("alt")

const sw = document.getElementById("switch")

mode = false

sw.addEventListener("click", () => {
    mode = !mode

    st.disabled = mode
    alt.disabled = !mode
})