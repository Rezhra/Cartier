$(document).ready(function () {
  $(document).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop > 200) {
      $("div.circle").fadeIn(500),
        $("div.circle").css({
          display: "flex",
        });
    }
    if (scrollTop > 0) {
      $("div.fimg").addClass("activee animate__animated animate__fadeInUp"),
        $("div.fimgt").addClass("activee animate__animated animate__fadeInUp");
    }

    if (scrollTop > 400) {
      $("div.tparttwo").addClass("activee animate__animated animate__fadeInUp");
    }
    if (scrollTop > 700) {
      $("div.thirdpart").addClass(
        "activee animate__animated animate__fadeInUp"
      );
    }
    if (scrollTop > 1300) {
      $("div.pfourfive").addClass(
        "activee animate__animated animate__fadeInUp"
      );
    }
    if (scrollTop > 2100) {
      $("div.apointment").addClass(
        "activee animate__animated animate__fadeInUp"
      );
    }
    $("div.circle").click(function () {
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        500,
        "swing"
      );
    });
  });
});

$(document).ready(function () {
  $("p.b").on("click", function () {
    $("div.login").css({
      display: "none",
    }),
      $("div.signin").css({
        display: "flex",
      }),
      $("p.b").css({
        borderBottom: "2px solid black",
        fontWeight: "bold",
      }),
      $("p.a").css({
        borderBottom: "unset",
        fontWeight: "normal",
      });
  });
});
$(document).ready(function () {
  $("p.a").on("click", function () {
    $("div.login").css({
      display: "flex",
    }),
      $("div.signin").css({
        display: "none",
      }),
      $("p.a").css({
        borderBottom: "2px solid black",
        fontWeight: "bold",
      }),
      $("p.b").css({
        borderBottom: "unset",
        fontWeight: "normal",
      });
  });
});

$(document).ready(function () {
  $("a.personalized").mousemove("click", function () {
    $("div.personpart").css({
      display: "flex",
    }),
      $("a.borsub").css({
        borderBottom: "unset",
        fontWeight: "normal",
      }),
      $("div.marvelpart").css({
        display: "none",
      }),
      $("div.cartierpart").css({
        display: "none",
      }),
      $("a.cartierpartt").css({
        borderBottom: "unset",
        fontWeight: "normal",
      }),
      $("a.personalized").css({
        borderBottom: "3px solid #c10016",
        fontWeight: "bold",
      });
  });
});
$(document).ready(function () {
  $("a.borsub").mousemove("click", function () {
    $("div.personpart").css({
      display: "none",
    }),
      $("a.borsub").css({
        borderBottom: "3px solid #c10016",
        fontWeight: "bold",
      }),
      $("div.marvelpart").css({
        display: "flex",
      }),
      $("div.cartierpart").css({
        display: "none",
      }),
      $("a.cartierpartt").css({
        borderBottom: "unset",
        fontWeight: "normal",
      }),
      $("a.personalized").css({
        borderBottom: "unset",
        fontWeight: "normal",
      });
  });
});
$(document).ready(function () {
  $("a.cartierpartt").mousemove("click", function () {
    $("div.cartierpart").css({
      display: "flex",
    }),
      $("a.cartierpartt").css({
        borderBottom: "3px solid #c10016",
        fontWeight: "bold",
      }),
      $("div.marvelpart").css({
        display: "none",
      }),
      $("div.personpart").css({
        display: "none",
      }),
      $("a.personalized").css({
        borderBottom: "unset",
        fontWeight: "normal",
      });
    $("a.borsub").css({
      borderBottom: "unset",
      fontWeight: "normal",
    });
  });
});
