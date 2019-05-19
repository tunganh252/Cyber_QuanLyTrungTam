import {
    NguoiDung
} from '../modal/nguoiDung';

let nguoiDung = NguoiDung;

export function NguoiDungService() {
    this.LayThongTinNguoiDung = function () {
        $.ajax({
            url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung',
            type: 'GET',
            dataType: 'json'
                .done(data => {
                    let thongTinNguoiDung = JSON.stringify(data);
                    localStorage.setItem('suaThongTinHocVien', thongTinNguoiDung);
                    console.log(data);

                })
                .fail(error => {
                    console.log(error);

                })
        });
    }
    this.ThemNguoiDung = function (nguoiDung) {
        $.ajax({
            url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/DangKy',
            type: 'POST',
            dataType: 'json',
            data: nguoiDung,
            success: function (data) {
                if (data) {
                    swal({
                        title: 'Đăng kí thành công !',
                        icon: "success",
                        button: "Ok",
                    });

                } else {
                    swal("Tài khoản đã tồn tại!", "Vui lòng nhập lại!", "error");
                }

            },
            error: function (error) {
                console.log(error);

                swal("Tài khoản đã tồn tại");
            }
        });
    };
    ///////////////////////////////
    this.dangNhapHeThong = function (taiKhoan, matKhau) {
        $.ajax({
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/DangNhap?taikhoan=${taiKhoan}&matkhau=${matKhau}`,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                if (typeof (data) === 'object') {
                    localStorage.setItem('TK_DANG_NHAP', JSON.stringify(data[0]));

                    let loadMenu = function (data) {
                        if (data !== null) {
                            $('.navbar-nav #login').html(`
                                <li class="nav-item dropdown show">
                                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="true">${data.HoTen}</a>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownId">
                                            <a class="dropdown-item" href="javascript:void(0)">Thông tin cá nhân</a>
                                            <a class="dropdown-item" href="javascript:void(0)">Cài đặt</a>
                                            <a href= "javascript:void(0)" class="dropdown-item" id="btnDangXuat">Thoát</a>
                                        </div>
                                    </li>
                                `);
                        } else {
                            $('.navbar-nav #login').html(`
                                <li class="nav-item" id="myBtn">
                                <a class="nav-link" href="javascript:void(0)">Login
                                    My Class</a>
                            </li>
                                `);
                        }
                    }
                    loadMenu(data[0]);

                    
                    let kiemTraDangNhap = function () {
                        if (localStorage !== null) {
                            return JSON.parse(localStorage.getItem('TK_DANG_NHAP'));
                        }
                        return null;
                    };
                    kiemTraDangNhap();


                    $('.close').click();
                    swal({
                        title: 'Đăng nhập thành công !',
                        icon: "success",
                        button: "Ok",
                    });

                } else {
                    swal("Sai tài khoản hoặc mật khẩu!", "Vui lòng nhập lại!", "error");
                }

            },
            error: function (error) {
                console.log(error);
                swal("Đăng nhập thất bại ");

            }
        });
    };





    // this.kiemTraDangNhap = function () {
    //     if (localStorage !== null) {
    //         return JSON.parse(localStorage.getItem('TK_DANG_NHAP'));
    //     }
    //     return null;
    // };
    // this.dangXuat = function () {
    //     if (localStorage !== null) {
    //         localStorage.removeItem('TK_DANG_NHAP');
    //         this.loadMenu(null);
    //     }
    // };
}