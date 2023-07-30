class checkformOrder {
    constructor(name, phone, address) {
        this.name = name;
        this.phone = phone;
        this.address = address;

        this.error = (message, con) => {
            con.html(message).css({ color: "red" });
        };

        this.success = (con) => {
            con.html("");
        };

        this.checkName = () => {
            this.name == ""
                ? this.error("Vui lòng điền vào ô trống này", $("#formOrder p:eq(0)"))
                : this.name.length < 4
                ? this.error("Tên quá ngắn, tối thiểu 4 ký tự trở lên", $("#formOrder p:eq(0)"))
                : this.success($("#formOrder p:eq(0)"));
        };

        this.checkPhone = () => {
            this.phone == ""
                ? this.error("Vui lòng điền vào ô trống này", $("#formOrder p:eq(1)"))
                : !this.phone.match(/^[0-9]{10}/)
                ? this.error("Số điện thoại không hợp lệ", $("#formOrder p:eq(1)"))
                : this.success($("#formOrder p:eq(1)"));
        };

        this.checkAddress = () => {
            this.address == ""
                ? this.error("Vui lòng điền vào ô trống này", $("#formOrder p:eq(2)"))
                : this.success($("#formOrder p:eq(2)"));
        };

        this.check = () => {
            this.checkPhone();
            this.checkName();
            this.checkAddress();
        };
    }
}

$(document).ready(() => {
    $("#formOrder [type=button]").click(() => {
        let check = new checkformOrder(
            $("#formOrder input:eq(0)").val(),
            $("#formOrder input:eq(1)").val(),
            $("#formOrder input:eq(2)").val(),
        );
        check.check();
        let arr = $("#formOrder p").filter((item) => {
            return $(`#formOrder p:eq(${item})`).html() != "";
        });
        if (arr.length == 0) {
            $("#formOrder [type=button]").attr("type", "submit");
        }
        if ($("#formOrder ipnut:eq(3)").attr("type") == "submit") {
            localStorage.removeItem(localStorage.getItem("user"));
        }
    });
});
