

export const filterData2 = [{name:'Fast Food', image: 'https://cdn.daynauan.info.vn/wp-content/uploads/2020/10/ga-nuong-muoi-ot.jpg', id:"0" },
                            {name:'Trà Sữa', image: 'https://cdn.dayphache.edu.vn/wp-content/uploads/2020/02/mon-tra-sua-tran-chau.jpg', id:"1" },
                            {name:'Bánh', image: 'https://cdn.tgdd.vn/2021/03/CookProduct/1200-1200x676-72.jpg', id:"2" },
                            {name:'Bánh Xèo', image: 'https://cdn.tgdd.vn/Files/2020/05/20/1256908/troi-mua-thu-lam-banh-xeo-kieu-mien-bac-gion-ngon-it-dau-mo-202203041327402848.jpg', id:"3" },
                            {name:'Cơm Nắm', image: 'https://xuatkhaulaodong.com.vn/images/2018/05/03/com-nam-onigiri-nhat-ban-1.jpg', id:"4" },
                            {name:'Mì', image: 'https://cdn.eva.vn/upload/4-2019/images/2019-11-11/cho-3-nguyen-lieu-nay-vao-mi-tom-bat-mi-tam-thuong-lap-tuc-bien-thanh-my-thuc-mi-cay-tu-lam-ngon-nhu-ngoai-tiem-1573458741-300-width678height450.jpg', id:"5" },
                            {name:'Susi', image: 'https://thumbs.dreamstime.com/b/tasty-susi-4815731.jpg', id:"6" },
                            {name:'Súp', image: 'https://cdn.tgdd.vn/2020/09/CookProduct/Untitled-2-Recovered-1200x676-13.jpg', id:"7" },
                            {name:'Món 1', image: 'https://cdn.tgdd.vn/Files/2019/08/30/1193143/ban-se-chon-banh-trung-thu-homemade-hay-cua-hang-de-lam-qua-tang-cho-nguoi-than-202201170951016726.jpg', id:"8" },
                            {name:'Món 2', image: 'https://i1-dulich.vnecdn.net/2016/08/23/banhngon2-1471922491.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=QWfFLg9L5ibxxQaA4r7D6g', id:"9" },
                            {name:'Món 3', image: 'https://cdn.huongnghiepaau.com/wp-content/uploads/2019/08/banh-mi-kep-thit-dam-da.jpg', id:"10" },
                            {name:'Món 4', image: 'https://cdn.huongnghiepaau.com/wp-content/uploads/2019/08/banh-mi-kep-thit-dam-da.jpg', id:"11" },
                            
]

export const restauratsData = [
    {restaurantName:'MC Donalds', farAway:'21.2',
    businessAddress:'99 Cau Dien', images:'https://thicongnhahang.vn/storage/app/media/uploaded-files/nha-hang-ga-ran-KFC-02.jpg',
    averageReview:4.9, numberOfReview:222,coordinates:{lat: -26.1888612, lng: 28.246325} ,discount:10, deliveryTime:15,
    collectTime:5, foodType:'FastFodd,...',
    productData:[
        {name:'Gà nướng muối ớt', price:150, image:'https://cdn.daynauan.info.vn/wp-content/uploads/2020/10/ga-nuong-muoi-ot.jpg'},
        {name:'Gà luộc', price:120, image:'https://cdn.shortpixel.ai/spai/q_lossless+ret_img+to_auto/https://www.thatlangon.com/wp-content/uploads/2020/04/ga-ha-medium.jpg'},
        {name:'Gà rán',price:70,image:'https://cdn.eva.vn/upload/2-2019/images/2019-05-24/ga-ran-ngon-gion-rum-voi-cach-lam-sieu-don-gian-tai-nha-ga-ran-5-1558681921-279-width489height499.jpg'}
    ], id:0},

    {restaurantName:'Lotteria', farAway:'9.3',
    businessAddress:'Cầu Giấy, Hà Nội', images:'https://static.mservice.io/blogscontents/momo-upload-api-191025153214-637076143348560301.jpg',
    averageReview:4.5, numberOfReview:321,coordinates:{lat: -42.142575, lng: 12.1424} ,discount:15, deliveryTime:20,
    collectTime:5, foodType:'Trà Sữa,...',
    productData:[
        {name:'Combo 1', price:80, image:'https://images.foody.vn/res/g2/18700/prof/s640x400/image-5889f757-210614103008.jpeg'},
        {name:'Combo 2', price:120, image:'https://www.streetfoodguy.com/wp-content/uploads/2019/02/Lotteria-3-1.png'},
        {name:'Combo 3',price:70,image:'https://statics.vinpearl.com/styles/image800x600/public/2021_08/lotteria-restaurant-vinpearl-nha-trang-2_1628409653.jpg.webp?itok=8NUVVa6M'}
    ], id:1},

    {restaurantName:'Trà Sữa', farAway:'15.2',
    businessAddress:'Đông Anh, Hà Nội', images:'https://trasuadodo.vn/wp-content/uploads/2021/03/179788784_142415881189414_1765512329849283842_n.jpg',
    averageReview:4.2, numberOfReview:123,coordinates:{lat: -2.1888612, lng: 8.246325} ,discount:20, deliveryTime:25,
    collectTime:5, foodType:'FastFodd,...',
    productData:
    [   {name:'Trà Sữa Chân Châu', price:25, image:'https://cdn.dayphache.edu.vn/wp-content/uploads/2020/02/mon-tra-sua-tran-chau.jpg'},
        {name:'Trà Sữa Hoa Quả', price:25, image:'https://cdn-www.vinid.net/2020/09/8cb97047-tr%C3%A0-s%E1%BB%AFa-pozaa-tea-%C6%B0u-%C4%91%C3%A3i.jpg'},
        {name:'Trà Sữa',price:30,image:'https://nhathuoclongchau.com/upload/post/44063/images/tac-hai-cua-tra-sua-su-that-dang-sau-khien-ban-bat-ngo1.jpg'}
    ], id:2},

    {restaurantName:'Cơm Tấm', farAway:'2.6',
    businessAddress:'Cầu Diễn, Từ Liêm', images:'https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2021/2/19/photo1613668692054-1613668692418416660680-16136687715501020583665.jpg',
    averageReview:4.8, numberOfReview:333,coordinates:{lat: -6.789612, lng: 48.2442525} ,discount:5, deliveryTime:5,
    collectTime:5, foodType:'FastFodd,...',
    productData:[
        {name:'Cơm tấm sườn', price:25, image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg/375px-C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg'},
        {name:'Cơm tấm gà', price:40, image:'https://images.foody.vn/res/g10/98048/prof/s576x330/foody-upload-api-foody-mobile-com-190311132057.jpg'},
        {name:'Sườn bì chả',price:35,image:'https://statics.vinpearl.com/com-tam-ngon-o-sai-gon-0_1630562640.jpg'}
    ], id:3},
    
    {restaurantName:'Drink Tea', farAway:'1.5',
    businessAddress:'177 Cầu Diễn, Từ Liêm', images:'https://noithatcaphe.vn/images/2017/06/28/0-thi%E1%BA%BFt%20k%E1%BA%BF%20qu%C3%A1n%20tr%C3%A0%20s%E1%BB%AFa%20phong%20c%C3%A1ch8%20copy.jpg',
    averageReview:4.5, numberOfReview:350,coordinates:{lat: -15.1786542, lng: 30.1245421} ,discount:10, deliveryTime:5,
    collectTime:5, foodType:'FastFodd,...',
    productData:[
        {name:'Tea 1', price:30, image:'https://blog.beemart.vn/wp-content/uploads/2017/05/cac-loai-do-uong-hot-nhat-mua-he-1234.jpg'},
        {name:'Tea 2', price:25, image:'https://www.vivosmartphone.vn/uploads/MANGOADS/ch%E1%BB%A5p%20%E1%BA%A3nh/%E1%BA%A2nh%20%C4%91%E1%BB%93%20u%E1%BB%91ng/fD6Mguu.jpg'},
        {name:'Tea 3',price:25,image:'https://notetea.vn/source/hinh-cua-nhu/tin-tuc/bai-thang-tam/trang-tri-dep-2.jpg'}
    ], id:4},

    {restaurantName:'Phở', farAway:'5.2',
    businessAddress:'Bắc Từ Liêm, Hà Nội', images:'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/03/26/5-cua-hang-pho-20-1616750519592.jpg',
    averageReview:4.3, numberOfReview:162,coordinates:{lat: -8.1888612, lng: 75.1424241} ,discount:10, deliveryTime:5,
    collectTime:5, foodType:'FastFodd,...',
    productData:[
        {name:'Phở bò', price:30, image:'https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250313281452.jpg'},
        {name:'Bò tái', price:30, image:'https://cachnau.vn/wp-content/uploads/2021/11/cach-nau-pho-bo-tai-ngon.jpg'},
        {name:'Bò gia truyền',price:40,image:'https://cdn.24h.com.vn/upload/4-2020/images/2020-12-04/Chia-se-cong-thuc--Bi-quyet-nau-pho-bo-gia-truyen-an-la-ghien-pho-sai-gon-1-1607071758-719-width660height440.jpg'}
    ], id:5},
]

export const ProductData = [
    {name:'Gà nướng', price:150, image:'https://cdn.daynauan.info.vn/wp-content/uploads/2020/10/ga-nuong-muoi-ot.jpg',
    details:'Ga nuong muoi ot thom ngon',id:0},
    {name:'Gà nướng', price:120, image:'https://cdn.eva.vn/upload/2-2019/images/2019-05-24/ga-ran-ngon-gion-rum-voi-cach-lam-sieu-don-gian-tai-nha-ga-ran-5-1558681921-279-width489height499.jpg',
    details:'Ga nuong muoi ot thom ngon',id:1},
    {name:'Trà Sữa', price:150, image:'https://nhathuoclongchau.com/upload/post/44063/images/tac-hai-cua-tra-sua-su-that-dang-sau-khien-ban-bat-ngo1.jpg',
    details:'Ga nuong muoi ot thom ngon',id:2},
    {name:'Phở', price:150, image:'https://cachnau.vn/wp-content/uploads/2021/11/cach-nau-pho-bo-tai-ngon.jpg',
    details:'Ga nuong muoi ot thom ngon',id:3},
    {name:'Trà Sữa', price:150, image:'https://cdn-www.vinid.net/2020/09/8cb97047-tr%C3%A0-s%E1%BB%AFa-pozaa-tea-%C6%B0u-%C4%91%C3%A3i.jpg',
    details:'Ga nuong muoi ot thom ngon',id:4},
    {name:'Phở', price:150, image:'https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250313281452.jpg',
    details:'Ga nuong muoi ot thom ngon',id:5},
]


export const menuData = [
    {title:'BEEF', special:false, key:0},
    {title:'CHICKEN', special:false, key:1},
    {title:'SALADS', special:false, key:2},
    {title:'MILK', special:false, key:3},
    {title:'DRINKS', special:false, key:4},
    {title:'HAPPY MEALS', special:false, key:5},
    {title:'FRIES && CORN', special:false, key:6},
    {title:'BURGER', special:false, key:7},
    {title:'SAHRE BOX', special:false, key:8},
    {title:'DESSERTS', special:false, key:9},
    {title:'HOT DRINKS', special:false, key:10},
]

export const specialData = [
    {title:'LIMITED OFDER', key:0},
    {title:'GO CHILLI', key:1},
    {title:'GO CHEESE', key:2},
    {title:'MCCHICKEN DELUXE PROMO', key:3},
]

export const menu = [
    {key:1, title: 'BEEF'},
    {key:2, title: 'CHICKEN'},
    {key:3, title: 'BURGER'},
    {key:4, title: 'SHARE BOX'},
   
]

export const menuDetailedData = [
    {
        meal:'Ga Nuong',
        price: 120,
        image:'https://cdn.daynauan.info.vn/wp-content/uploads/2020/10/ga-nuong-muoi-ot.jpg',
        details:'Ga nuong muoi ot thom ngon',
        preferenceTitle:['avshs','ascvashcbjcsjcdsb','sd  sdu sdhsd hs susiosd  usi'],
        preferenceData:[
            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],
        ],
        minimum_quatity:[2,1,1,null,null],
        counter:[0,0,0,0,0],
        required:[true,true,true,false,false],
        id:0
    },

    {
        meal:'Trà Sữa',
        price: 120,
        image:'https://cdn-www.vinid.net/2020/09/8cb97047-tr%C3%A0-s%E1%BB%AFa-pozaa-tea-%C6%B0u-%C4%91%C3%A3i.jpg',
        details:'Tra sua thom ngon',
        preferenceTitle:['avshs','ascvashcbjcsjcdsb','sd  sdu sdhsd hs susiosd  usi'],
        preferenceData:[
            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],
        ],
        minimum_quatity:[2,1,2,null,null],
        counter:[0,0,0,0,0],
        required:[true,true,true,false,false],
        id:1
    },

    {
        meal:'Pho bo tai',
        price: 120,
        image:'https://cachnau.vn/wp-content/uploads/2021/11/cach-nau-pho-bo-tai-ngon.jpg',
        details:'Pho thom ngon',
        preferenceTitle:['avshs','ascvashcbjcsjcdsb','sd  sdu sdhsd hs susiosd  usi'],
        preferenceData:[
            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],
        ],
        minimum_quatity:[2,1,1,null,null],
        counter:[0,0,0,0,0],
        required:[true,true,true,false,false],
        id:2
    },

    {
        meal:'Tea',
        price: 120,
        image:'https://blog.beemart.vn/wp-content/uploads/2017/05/cac-loai-do-uong-hot-nhat-mua-he-1234.jpg',
        details:'Tea thom ngon',
        preferenceTitle:['avshs','ascvashcbjcsjcdsb','sd  sdu sdhsd hs susiosd  usi'],
        preferenceData:[
            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],
        ],
        minimum_quatity:[2,1,1,null,null],
        counter:[0,0,0,0,0],
        required:[true,true,true,false,false],
        id:3
    },
    {
        meal:'Big Mac',
        price: 120,
        image:'https://cdn.daynauan.info.vn/wp-content/uploads/2020/10/ga-nuong-muoi-ot.jpg',
        details:'Ga nuong muoi ot thom ngon',
        preferenceTitle:['avshs','ascvashcbjcsjcdsb','sd  sdu sdhsd hs susiosd  usi'],
        preferenceData:[
            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],
        ],
        minimum_quatity:[2,1,1,null,null],
        counter:[0,0,0,0,0],
        required:[true,true,true,false,false],
        id:4
    },
    {
        meal:'Big Mac',
        price: 120,
        image:'https://cdn.daynauan.info.vn/wp-content/uploads/2020/10/ga-nuong-muoi-ot.jpg',
        details:'Ga nuong muoi ot thom ngon',
        preferenceTitle:['avshs','ascvashcbjcsjcdsb','sd  sdu sdhsd hs susiosd  usi'],
        preferenceData:[
            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],

            [{name:'Jalapeno',price:8.91,checked:false,id:0},{name:'Jalapeno',price:8.91,checked:false,id:1},
            {name:'Jalapeno',price:8.91,checked:false,id:2},{name:'Jalapeno',price:8.91,checked:false,id:3}
            ],
        ],
        minimum_quatity:[2,1,1,null,null],
        counter:[0,0,0,0,0],
        required:[true,true,true,false,false],
        id:5
    }
]