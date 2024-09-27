const myDateTime = (str="Ngày hiện tại: ") => {
    return str + Date().toLocaleString('vi-VN', {
        timeZone: 'Asia/Ho_Chi_Minh',
    });
}

export default myDateTime;