$(function () {
    $("#hamburger-menu").click(function (e) {
        e.stopPropagation();
        $(".nav-menu").toggleClass('show');
    });

    $(document).click(function (e) {
        var container = $(".nav-menu");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('show');
        }
    });

    $('.nav-menu a').click(function (e) {
        var href = $(this).attr('href');
        var section = $(href);
        $('html, body').animate({
            scrollTop: section.offset().top - 100
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });

    const slides = document.querySelectorAll(".sliders .img");

    let i = 0;
    setInterval(() => {
        Array.from(slides).forEach((item, index) => {
            const translation = index === i ? 0 : 100 * (index - i);

            item.style.transform = `translateX(${translation}%)`;
        });

        i = (i + 1) % slides.length;
    }, 3000);

    function isFormValid() {
        var name = $("#name").val();
        var email = $("#email").val();
        var option = $("#option").val();

        // Validasi Nama
        if (name === "") {
            $("#nameError").text("Nama tidak boleh kosong");
            $("#name").addClass('error');
            return false;
        } else {
            $("#nameError").text("");
            $("#name").removeClass('error');
        }

        // Validasi Email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            $("#emailError").text("Email tidak boleh kosong");
            $("#email").addClass('error');
            return false;
        } else {
            if (!emailRegex.test(email)) {
                $("#emailError").text("Format email tidak valid");
                $("#email").addClass('error');
                return false
            } else {
                $("#emailError").text("");
                $("#email").removeClass('error');
            }
        }

        // Validasi Pilihan
        if (option === "Select Option") {
            $("#optionError").text("Pilih opsi yang valid");
            $("#option").addClass('error');
            return false;
        } else {
            $("#optionError").text("");
            $("#option").removeClass('error');
        }

        return true; // Semua validasi berhasil
    }

    // Event handler untuk memvalidasi seiring dengan pengisian input
    $("#name, #email, #option").on("input", function () {
        updateSubmitButton();
    });
    // Fungsi untuk mengaktifkan/menonaktifkan tombol berdasarkan validasi
    function updateSubmitButton() {
        var isFormValidResult = isFormValid();
        $("#submitButton").prop("disabled", !isFormValidResult);
    }

});