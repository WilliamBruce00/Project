$(document).ready(() => {
    $("#formFotget button:eq(1)").click(() => {
        $("#formFotget p:eq(0) input").val() == ""
            ? $("#formFotget p:eq(1)").html("Vui lòng điền vào ô trống này").css({ color: "red" })
            : $("#formFotget p:eq(0) input").val().length < 5
            ? $("#formFotget p:eq(1)").html("Mật khẩu phải ít nhất 5 ký tự").css({ color: "red" })
            : $("#formFotget button:eq(1)").attr("type", "submit");
    });
});
