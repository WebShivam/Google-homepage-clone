const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + " &sxsrf=AOaemvKvvuJJRrT5BQkWNc0siMfnYVdCoA%3A1636266585760&source=hp&ei=WXKHYcqfK_mTxc8P86y_oAI&iflsig=ALs-wAMAAAAAYYeAaQCMdMzD_rHUizkWCsva0WBLRHy7&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EANQAFieAmCKA2gAcAB4AIABAIgBAJIBAJgBAKABAQ&sclient=gws-wiz&ved=0ahUKEwiKsOWE0IX0AhX5SfEDHXPWDyQQ4dUDCAY&uact=5"
}