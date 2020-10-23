function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element);
    node.classList.add("animated", animationName);

    function handleAnimationEnd() {
        node.classList.remove("animated", animationName);
        node.removeEventListener("animationend", handleAnimationEnd);
        if (typeof callback === "function")
            callback();
    }
    node.addEventListener("animationend", handleAnimationEnd);
}
document.onreadystatechange = function() { var state = document.readyState; if (state == "complete") { console.log("%cHandcrafted by SSSALTY#7777", "color:#0f1923;font-size:30px;font-weight:800;"); } };
$(document).ready(function() {
    $(".navbar-r a, .header a").click(function() { $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 50 }, 600); return false; });
    $.get('https://discord.com/api/guilds/730047829657255947/widget.json', function(d) { $('.header-s-c.l h2').html(`<span>${d['presence_count']}</span> Member Online`); });
    $.getJSON('https://api.mcsrvstat.us/1/mgu.one', function(status) { if (!status.offline) { $('.header-s-c.r h2').html(`<span>${status.players.online}</span> Players Online`); } else { $('.header-s-c.r h2').html(`<span>0</span> Players Online`); } });
    $(".header-s-c.r").click(function() {
        $("#copyip").select();
        swal({ title: "Yes!", text: "IP Copied!", icon: "success", button: "Close" });
        document.execCommand("copy");
    });
});