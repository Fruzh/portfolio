let line1 = ''
let line2 = ''
for (let i = 0; i <= 10; i++) {
    line1 += '='
}
for (let j = 0; j <= 61; j++) {
    line2 += '-'
}
console.log(`${line2}\n\n${line1} Ihh kok bisa kesini??, diajarin siapa? ${line1}\n\n${line2}`)



// ===== Vanila Javascript
function reveal() {
    var reveals = document.querySelectorAll(".progress-1, .progress-2, .progress-3, .progress-4, .progress-5, .progress-6, .progress-7, .progress-8");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

const birthDate = new Date('2008-05-31'); // format YYYY-MM-DD
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
}

document.getElementById('age').textContent = age;
// ===== Vanila Javascript (END)



// ===== jQuery
$(document).ready(function() {
    $(".burgers").click(function() {
        $(".burger, .dropdown-nav, ol li").toggleClass("active");
    })

    $("ol li").click(function() {
        $(".burger, .dropdown-nav, ol li").removeClass("active")
    })
});

(function ($) {
    $.fn.count = function(options) {
        var $this = $(this);
        var settings = $.extend({
            startValue: 0,
            endValue: 300,
            durationValue: 4000
        }, options);
        $this.html(settings.startValue).attr('data-count', settings.endValue);
        var countTo = $this.attr('data-count');
        $({ countNum: $this.html()}).animate({
            countNum: countTo
        },
        {
            duration: settings.durationValue,
            easing:'swing',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                console.log('done. (graphic skill)');
            }
        });
        return this;
    }
}( jQuery ));

$(".counter-1").count({
    startValue: 0,
    endValue: 96,
    durationValue: 1200
});
$(".counter-2").count({
    startValue: 0,
    endValue: 74,
    durationValue: 1200
});
$(".counter-3").count({
    startValue: 0,
    endValue: 62,
    durationValue: 1200
});
$(".counter-4").count({
    startValue: 0,
    endValue: 21,
    durationValue: 1200
});
$(".counter-5").count({
    startValue: 0,
    endValue: 80,
    durationValue: 1200
});
$(".counter-6").count({
    startValue: 0,
    endValue: 76,
    durationValue: 1200
});
$(".counter-7").count({
    startValue: 0,
    endValue: 43,
    durationValue: 1200
});
$(".counter-8").count({
    startValue: 0,
    endValue: 67,
    durationValue: 1200
});
// ===== jQuery (END)



// ===== GSAP
ScrollTrigger.create({
    trigger: '.landing-page',
    start: 'top center',
    end: 'bottom center',
    toggleClass: { targets: ".nav-item-1 a", className: "active" }
})
ScrollTrigger.create({
    trigger: '.first-page',
    start: 'top center',
    end: 'bottom center',
    toggleClass: { targets: ".nav-item-2 a", className: "active" }
})
ScrollTrigger.create({
    trigger: '.second-page',
    start: 'top center',
    end: 'bottom center',
    toggleClass: { targets: ".nav-item-2 a", className: "active" }
})
ScrollTrigger.create({
    trigger: '.third-page',
    start: 'top center',
    end: 'bottom center',
    toggleClass: { targets: ".nav-item-3 a", className: "active" }
})
ScrollTrigger.create({
    trigger: '.landing-page',
    start: 'top center',
    end: 'bottom center',
    toggleClass: { targets: "footer button", className: "hidden" }
})

let timeLineNavbarShadow = gsap.timeline({
    scrollTrigger : {
        trigger : '.landing-page',
        start : '0%',
        end : '100%',
        scrub : true,
    }
});
timeLineNavbarShadow.fromTo(
    'nav', {
        boxShadow : '0px 5px 20px rgba(0, 0, 0, 0.0)'
    }, {
        boxShadow : '0px 5px 20px rgba(0, 0, 0, 0.1)'
    }
);
// ===== GSAP (END)


