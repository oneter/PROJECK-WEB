const burger = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuLi = document.querySelector('.menu__list > li');

burger.addEventListener("click", function (event) {
    menuBody.classList.toggle('__invisible');
})

menuLi.addEventListener("click", function (e) {
    menuLi.classList.toggle('__active');
})
/*------------------------------------------------------*/
$(document).ready(function () {
    console.log("ready!");
    $(".reviewSlide").slick({
        nextArrow: '<button id="nextReview" type="button" class="btn btn-juliet"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>',
        prevArrow: '<button id="prevReview" type="button" class="btn btn-juliet"><i class="fas fa-chevron-left" aria-hidden="true"></i> </button>',
        appendArrows: $(".arrows-block"),
        adaptiveHeight: true,
        dots: false,
        infinite: true,
        mobileFirst: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        fade: true,
    });
    $(".reviewSlide").on("afterChange", function () {
        let dataId = parseInt($(".slick-current").attr("data-slick-index"));
        console.log(dataId);
        $(".current").html("0" + (dataId += 1))
    });
    $("#workingwithcarouselupper").slick({
        adaptiveHeight: false,
        mobileFirst: true,
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: "16%",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    centerPadding: "10%",
                }
            },
        ]
    }
    );
    $("#workingwithcarousellower").slick({
        adaptiveHeight: false,
        mobileFirst: true,
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: "33%",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,
                    centerPadding: "2%",
                }
            },
        ]
    });
});

/*-------------------------------------------*/
const names = document.getElementsByName('userName');
let phone = document.getElementsByName('userPhone');
let email = document.getElementsByName('userEmail');
let checkbox = document.getElementById('check');

function save() {
    localStorage.setItem('Имя', names[0].value);
    localStorage.setItem('Номер телефона', phone[0].value);
    localStorage.setItem('Эл. почта', email[0].value);
    if (checkbox.checked) {
        localStorage.setItem('Согласие', 1);
    } else {
        localStorage.setItem('Согласие', 0);
    };
}
document.addEventListener('DOMContentLoaded', () => {
    names[0].value = localStorage.getItem('Имя');
    email[0].value = localStorage.getItem('Эл. почта');
    phone[0].value = localStorage.getItem('Номер телефона');
    let checkBox = localStorage.getItem('Согласие');
    if (checkBox == 1) {
        checkbox.checked = true;
    } else if (checkBox == 0) {
        checkbox.checked = false;
    }

    names[0].oninput = save;
    email[0].oninput = save;
    phone[0].oninput = save;
    checkbox.oninput = save;
});
/*-------------------------------------------*/
$(document).ready(function () {

    $("#check").change(function () {
        if ($("#check").is(":checked")) {
            $("#submitButton").prop("disabled", false);
        } else {
            $("#submitButton").prop("disabled", true);
        }
    });

    let data = document.querySelectorAll(".info");
    const ajaxSend = (formData) => {
        fetch("https://formcarry.com/s/EzbPKuFdyzV", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(function (response) {
                alert("Заявка отправлена");
                data.forEach((element) => { element.value = ""; });
                $("#check").prop("checked", false);
                $("#submitButton").prop("disabled", true);
            })
            .catch((error) => { alert(error); })
    };

    const forms = $("#thatForm");
    for (let i = 0; i < forms.length; i++) {
        $("#submitButton").click(function (e) {
            e.preventDefault();

            let formData = new FormData(forms[i]);
            formData = Object.fromEntries(formData);

            ajaxSend(formData);
        });
    }
});








document.addEventListener('DOMContentLoaded', () => {
    names.value = localStorage.getItem('Имя');
    email.value = localStorage.getItem('Эл. почта');
    sms.value = localStorage.getItem('Сообщение');
    let checkBox = localStorage.getItem('Согласие');
    if (checkBox == 1) {
        checkbox.checked = true;
    } else if (checkBox == 0) {
        checkbox.checked = false;
    }

    names.oninput = save;
    email.oninput = save;
    sms.oninput = save;
    checkbox.oninput = save;
}); 