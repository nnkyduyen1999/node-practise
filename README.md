# node-practise

--save-dev: chỉ cài đặt modules khi dev, ko cài đặt khi deploy
    .)Khi định nghĩa "start: " trong script của package.json thì nó sẽ chạy tương ứng với npm start (bt ko đn sẽ là node index.js)
    .)lowdb: tương tự mongodb nhưng mà nhỏ hơn, ít func hơn, là 1 module
    .)nodemon.json: config các tùy chỉnh khi restart bằng nodemon (ignore file nào đó)
    .) ../ là di chiển đến thư mục mẹ của file hiện tại
    .) ./ tương tự với cd = di chiển đến thư mục khác trong cùng thư mục mẹ
    .)Khi gọi res.render() express sẽ bắt đầu tìm trong Views do đó mặc định render sẽ từ Views đi vào trong.