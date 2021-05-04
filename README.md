This project is only for Nicky Tseng doing JobWits exam.

### 1. 請利用 firebase realtime database做出一個匿名留言板，紀錄留言內容跟送出的時間 (以ms千分之一秒為單位)

#### 留言板網址如下：
http://ec2-18-162-55-173.ap-east-1.compute.amazonaws.com:3000/

#### 相關技術：
前端使用 React.js

UI套件使用 Material-UI

後端使用 node.js

資料庫使用 Firebase Realtime Database

主機佈署在 AWS EC2

### 2. 請提供一支 GET API 取得留言內容。分為全部內容、留言時間秒數單數、留言時間秒數雙數 (all, group by odd ms and group by even ms)

#### API 如下：
[GET] http://ec2-18-162-55-173.ap-east-1.compute.amazonaws.com:8080/api/v1/messages

#### 回傳資料格式如下：
`
{
    "message": {
        "all": [
            {
                "message": "Apple",
                "timestamp": 1620158304680
            },
            {
                "message": "Book",
                "timestamp": 1620158478218
            },
            {
                "message": "Cat",
                "timestamp": 1620170735543
            }
        ],
        "odd": [
            {
                "message": "Cat",
                "timestamp": 1620170735543
            }
        ],
        "even": [
            {
                "message": "Apple",
                "timestamp": 1620158304680
            },
            {
                "message": "Book",
                "timestamp": 1620158478218
            }
        ]
    }
}
`
