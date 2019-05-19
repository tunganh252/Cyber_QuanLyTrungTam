import {
    NguoiDungService
} from '../../services/nguoiDungServices';

$(document).ready(function () {
    let nguoiDungService = new NguoiDungService();

    $('#btnDangNhap').click(function () {
        let taiKhoan = $('#taiKhoanDN').val();
        let matKhau = $('#matKhauDN').val();
        nguoiDungService.dangNhapHeThong(taiKhoan, matKhau)

    })
    
    // Dang xuat
    // $('body').delegate('#btnDangXuat', 'click', () => {
    //     nguoiDungService.dangXuat();
    // });
})
