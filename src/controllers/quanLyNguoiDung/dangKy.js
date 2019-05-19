import {
    NguoiDung
} from '../../modal/nguoiDung';
import {
    NguoiDungService
} from '../../services/nguoiDungServices';

$(document).ready(function () {
    let nguoiDungService = new NguoiDungService();
    // let validate = new Validation();
    $("#btnDangKy").click(function () {

        let taiKhoan = $("#taiKhoanDK").val();
        let matKhau = $("#matKhauDK").val();
        let hoTen = $("#hoTenDK").val();
        let email = $("#emailDK").val();
        let soDT = $("#sodtDK").val();
        let maLoaiNguoiDung = $('#dkLoaiNguoiDung').val();
        let tenLoaiNguoiDung = $('#dkLoaiNguoiDung option:selected').text();

        // Kiểm tra đăng nhập

        let trangThai = 0;

        if (KiemTraInputRong('#taiKhoanDK', '.divErrorTaiKhoan', 'Vui lòng nhập tài khoản!', taiKhoan) == true) {
            trangThai++;
        }
        if (KiemTraInputRong('#matKhauDK', '.divErrorMatKhau', 'Vui lòng mật khẩu!', matKhau) == true) {
            trangThai++;
        }
        if (KiemTraInputRong('#hoTenDK', '.divErrorHoTen', 'Vui lòng nhập họ tên!', hoTen) == true) {
            trangThai++;
        }
        if (KiemTraInputRong('#sodtDK', '.divErrorSDT', 'Vui lòng nhập phone !', soDT) == true) {
            trangThai++;
        }else{
            if (KiemTraSoDT(soDT) == false) {
                trangThai++;
            $('.divErrorSDT').html('Phone chưa đúng định dạng')
                
            }else {
            $('.divErrorSDT').html(null)
            }
        }
        // mail
        if (KiemTraInputRong('#emailDK', '.divErrorEmail', 'Vui lòng nhập email!', email) == true) {
            trangThai++;
        } 
        else {
        if (KiemTraEmail(email) == false) {
            trangThai++;
            $('.divErrorEmail').html('Email chưa đúng định dạng')
        }else{
            $('.divErrorEmail').html(null)
        }
        }

        if (trangThai != 0) {
            return;
        }

        let nguoidung = new NguoiDung(taiKhoan, matKhau, hoTen, email, soDT, maLoaiNguoiDung, tenLoaiNguoiDung);

        nguoiDungService.ThemNguoiDung(nguoidung);
    });


////////////
// Validate
///////////
    function KiemTraInputRong(idInput, error, thongbao, value) {
        if (KiemTraRong(value) == true) {
            $(idInput).css({
                'border-bottom': '1.5px solid red',
                'color': 'red',
            });
            let showError = thongbao;
            $(error).html(showError);

            //nếu gõ vào input
            $(idInput).keydown(function () {
                $(idInput).css({
                    'color': 'green',
                    'border-bottom': '1.5px solid green',
                });
                    $(error).html(null)
            });
            return true;
        }
    }
})

//////////////////////////////////////////
function KiemTraRong(value)
    {
        if(value.trim()=== "")
        {
            return true;
        }
        return false;
    }
 function KiemTraEmail(value) {
        let check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return check.test(value.toLowerCase());
    }
function KiemTraSoDT(value)
    {
        let check = /^\d+$/;
        if(check.test(value) && value.length == 10)
        {
            return true;
        }
        return false;
    }
    
