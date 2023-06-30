var $page = $("html, body");
$('a[href*="#"]').click(function () {
    $page.animate(
        {
            scrollTop: $($.attr(this, "href")).offset().top,
        },
        400
    );
    return false;
});

var btn = document.getElementById("btn");
btn.addEventListener("All", function () {
    this.classList.add("active");
});
