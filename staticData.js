
let dataCategory = [
    { id:1,url: require('./assets/images/category/dress.png'), categoryName: 'Fastion' },

    { id:2,url: require('./assets/images/category/beauty.png'), categoryName: 'Beauty' },

    { id:3,url: require('./assets/images/category/necklace.png'), categoryName: 'Jewellary' },

    { id:4,url: require('./assets/images/category/electronics.png'), categoryName: 'Electroincs' },
    {id:5, url: require('./assets/images/category/beauty.png'), categoryName: 'Computers' },
    {id:6, url: require('./assets/images/category/sofa.png'), categoryName: 'Phones' },

    { id:7,url: require('./assets/images/category/beauty.png'), categoryName: 'Automotive' },

    { id:8,url: require('./assets/images/category/tools.png'), categoryName: 'Tools' },

    { id:9,url: require('./assets/images/category/suitcase.png'), categoryName: 'Luggage' },

    { id:10,url: require('./assets/images/category/appliances.png'), categoryName: 'Home & Kitchen' },
    
    { id:11,url: require('./assets/images/category/book.png'), categoryName: 'Books' },

    { id:12,url: require('./assets/images/category/puzzle.png'), categoryName: 'Toys' },

    { id:13,url: require('./assets/images/category/gift.png'), categoryName: 'Gift' },
]
let dataSubCategory = [ 
    {id:15,categoryId:1, url: require('./assets/images/category/dress.png'), categoryName: 'Baby', },
    {id:20,categoryId:1, url: require('./assets/images/category/beauty.png'), categoryName: "Women's Fashion" },
    {id:30,categoryId:1, url: require('./assets/images/category/necklace.png'), categoryName: "Men's Fashion" },
    {id:40,categoryId:1, url: require('./assets/images/category/electronics.png'), categoryName: "Girls' Fashion" },
    {id:50,categoryId:1, url: require('./assets/images/category/appliances.png'), categoryName: "Boys' Fashion" },


    {id:60,categoryId:2, url: require('./assets/images/category/beauty.png'), categoryName: 'Makeup' },
    {id:70,categoryId:2, url: require('./assets/images/category/beauty.png'), categoryName: 'Skin Care' },
    {id:80,categoryId:2, url: require('./assets/images/category/beauty.png'), categoryName: 'Hair Care' },
    {id:90,categoryId:2, url: require('./assets/images/category/beauty.png'), categoryName: 'Fragrance' },
    {id:100,categoryId:2, url: require('./assets/images/category/beauty.png'), categoryName: 'Foot,Hand & Nail Care' },
    {id:110,categoryId:2, url: require('./assets/images/category/beauty.png'), categoryName: 'Tools' },
    {id:120,categoryId:2, url: require('./assets/images/category/beauty.png'), categoryName: 'Personal Care' },
    {id:130,categoryId:2, url: require('./assets/images/category/beauty.png'), categoryName: 'Oral Care' },
    {id:140,categoryId:2, url: require('./assets/images/category/beauty.png'), categoryName: 'Shave & Hair Removal' },

    {id:150,categoryId:3, url: require('./assets/images/category/beauty.png'), categoryName: 'Gold' },
    {id:160,categoryId:3, url: require('./assets/images/category/beauty.png'), categoryName: 'Silver' },
    
    {id:170,categoryId:4, url: require('./assets/images/category/gift.png'), categoryName: 'Home Audio' },
    {id:180,categoryId:4, url: require('./assets/images/category/gift.png'), categoryName: 'Office Electronics' },
    {id:190,categoryId:4, url: require('./assets/images/category/gift.png'), categoryName: 'Security & Surveillance' },
    {id:200,categoryId:4, url: require('./assets/images/category/gift.png'), categoryName: 'Video Projectors' },

    {id:210,categoryId:5, url: require('./assets/images/category/gift.png'), categoryName: 'Computers & accessories' },

    {id:220,categoryId:6, url: require('./assets/images/category/gift.png'), categoryName: 'Cell Phone & accessories' },
    {id:230,categoryId:6, url: require('./assets/images/category/gift.png'), categoryName: 'Headphones' },

    {id:240,categoryId:7, url: require('./assets/images/category/tools.png'), categoryName: 'Car Electronics' },
    {id:250,categoryId:7, url: require('./assets/images/category/tools.png'), categoryName: 'Car Care' },
    {id:260,categoryId:7, url: require('./assets/images/category/tools.png'), categoryName: 'Exterior Accessories' },
    {id:270,categoryId:7, url: require('./assets/images/category/tools.png'), categoryName: 'Interior Accessories' },
    {id:280,categoryId:7, url: require('./assets/images/category/tools.png'), categoryName: 'Lighting Accessories' },


    { id:290,categoryId:10,url: require('./assets/images/category/appliances.png'), categoryName: 'Kitchen' },
    { id:300,categoryId:10,url: require('./assets/images/category/sofa.png'), categoryName: 'furniture' },
    { id:310,categoryId:10,url: require('./assets/images/category/sofa.png'), categoryName: 'Bath' },

    



    {id:320,categoryId:11, url: require('./assets/images/category/suitcase.png'), categoryName: 'Art' },
    {id:330,categoryId:11, url: require('./assets/images/category/puzzle.png'), categoryName: 'History' },
    {id:340,categoryId:11, url: require('./assets/images/category/book.png'), categoryName: 'Law' },
    {id:350,categoryId:11, url: require('./assets/images/category/suitcase.png'), categoryName: 'Medical' },
    {id:360,categoryId:11, url: require('./assets/images/category/puzzle.png'), categoryName: 'Romance' },


    {id:370,categoryId:12, url: require('./assets/images/category/book.png'), categoryName: 'Puzzles' },
    {id:380,categoryId:12, url: require('./assets/images/category/suitcase.png'), categoryName: 'Art & Crafts' },
    {id:390,categoryId:12, url: require('./assets/images/category/puzzle.png'), categoryName: 'Buiding Toys' },
    {id:400,categoryId:12, url: require('./assets/images/category/book.png'), categoryName: 'Collectible Toys' },
    {id:410,categoryId:12, url: require('./assets/images/category/book.png'), categoryName: 'Vehicles' },


    {id:420,categoryId:13, url: require('./assets/images/category/suitcase.png'), categoryName: 'Sick' },
    {id:430,categoryId:13, url: require('./assets/images/category/puzzle.png'), categoryName: 'Birthday' },
    {id:440,categoryId:13, url: require('./assets/images/category/book.png'), categoryName: "Valentine's Day" },
    {id:450,categoryId:13, url: require('./assets/images/category/puzzle.png'), categoryName: 'Boy Friend' },
    {id:460,categoryId:13, url: require('./assets/images/category/book.png'), categoryName: 'Girl Friend' },
    {id:470,categoryId:13, url: require('./assets/images/category/puzzle.png'), categoryName: 'Graduation' },
    {id:480,categoryId:13, url: require('./assets/images/category/book.png'), categoryName: 'Wife' },
    {id:490,categoryId:13, url: require('./assets/images/category/puzzle.png'), categoryName: 'Husbond' },
    {id:500,categoryId:13, url: require('./assets/images/category/book.png'), categoryName: 'Colleagues' },

   
];
let dataList =[
    {id:1,url: require('./assets/images/logoImage/ahmad3.jpeg'),ListName:'ahmad'},
    {id:2,url: require('./assets/images/logoImage/ahmad3.jpeg'),ListName:'ali'},
    {id:3,url: require('./assets/images/logoImage/ahmad3.jpeg'),ListName:'marah'},
    {id:4,url: require('./assets/images/logoImage/ahmad3.jpeg'),ListName:'majed'},
    {id:5,url: require('./assets/images/logoImage/ahmad3.jpeg'),ListName:'murad'},
]
let specialDeels =[
    {
      
        id:1,
        selected:false,
        url:require('./assets/images/product/boat.jpg'),
        name:'Brd Headphones',pice:'$180',oldPrice:'$200',
        productDetial:'ahmad ahmad ahmad ahmad ahadjadjad jdjjdj asjndsa jnsdj jdfk',
        quantity:'2',color:['red','blue','black'], size:['s','m','l','xl','xxl','xxxl']
    }, 
    {
        id:2,  selected:false,
        url:require('./assets/images/product/boat.jpg'),
        name:'infinixx Hot 10s',pice:'$9000',oldPrice:'$12000',
        productDetial:'ahmad ahmad ahmad ahmad ahadjadjad jdjjdj asjndsa jnsdj jdfk',
        color:[{color:'red',quantity:'8'},{color:'blue',quantity:'5'},{color:'black',quantity:'9'}] ,size:['s','m','l','xl','xxl','xxxl']
    },
    {
        id:3,  selected:false,
        url:require('./assets/images/product/boat.jpg'),
        name:'Boat Smartboat',pice:'$2500',oldPrice:'$3000',
        productDetial:'ahmad ahmad ahmad ahmad ahadjadjad jdjjdj asjndsa jnsdj jdfk',
        color:[{color:'red',quantity:'8'},{color:'blue',quantity:'5'},{color:'black',quantity:'9'}] ,size:['s','m','l','xl','xxl','xxxl']
    },
    {
        id:4,  selected:false,
        url:require('./assets/images/product/images.jpg'),
        name:'Quilted jacket',pice:'$1500',oldPrice:'$2000',
        productDetial:'ahmad ahmad ahmad ahmad ahadjadjad jdjjdj asjndsa jnsdj jdfk',
        color:[{color:'red',quantity:'8'},{color:'blue',quantity:'5'},{color:'black',quantity:'9'}],size:['s','m','l','xl','xxl','xxxl']
    },
    {
        id:5,  selected:false,
        url:require('./assets/images/product/images.jpg'),
        name:'Brd Headphones',pice:'$180',oldPrice:'$200',
        productDetial:'ahmad ahmad ahmad ahmad ahadjadjad jdjjdj asjndsa jnsdj jdfk',
        color:[{color:'red',quantity:'5'},{color:'blue',quantity:'50'},{color:'black',quantity:'96'}],size:['s','m','l','xl','xxl','xxxl']
    },
    
    { 
        id:6,  selected:false,
        url:require('./assets/images/product/boat.jpg'),
        name:'Brd Headphones',pice:'$180',oldPrice:'$200',
        productDetial:'ahmad ahmad ahmad ahmad ahadjadjad jdjjdj asjndsa jnsdj jdfk',
        color:[{color:'red',quantity:'8'},{color:'blue',quantity:'5'},{color:'black',quantity:'9'}] ,size:['s','m','l','xl','xxl','xxxl']
    },
   
    {  id:7,  selected:false,  url:require('./assets/images/product/boat.jpg'),
        name:'Brd Headphones',pice:'$180',oldPrice:'$200',
        productDetial:'ahmad ahmad ahmad ahmad ahadjadjad jdjjdj asjndsa jnsdj jdfk',
        color:[{color:'red',quantity:'8'},{color:'blue',quantity:'5'},{color:'black',quantity:'9'}] ,size:['s','m','l','xl','xxl','xxxl']
    },
    { 
        id:8,  selected:false,  
        url:require('./assets/images/product/boat.jpg'),
        name:'Brd Headphones',pice:'$180',oldPrice:'$200',
        productDetial:'ahmad ahmad ahmad ahmad ahadjadjad jdjjdj asjndsa jnsdj jdfk',
        color:[{color:'red',quantity:'8'},{color:'blue',quantity:'5'},{color:'black',quantity:'9'}],size:['s','m','l','xl','xxl','xxxl']
    }
        

]

let ordersData =[
    {
        number:100001,
        date:'Dec 12,2022 at 7:48 PM' ,
        type:'processing',
        detailProduct:[
        {
            name:'T-Shirt',
            quan:'5',
            price:'401.25'
        },
        {
            name:'Black Sneakers',
            quan:'2',
            price:'121.5'
        },
        {
            name:'Summer Dress',
            quan:'1',
            price:'40.99'
        },
        {
            name:'handbag',
            quan:'3',
            price:'20.20'
        },
        {
            name:'Galgxy A25s',
            quan:'1',
            price:'451.50'
        },
        {
            name:'Shirt',
            quan:'2',
            price:'40.00'
        },
        {
            name:'Shirt',
            quan:'2',
            price:'40.00'
        },
        {
            name:'Shirt',
            quan:'2',
            price:'40.00'
        },
        {
            name:'Shirt',
            quan:'2',
            price:'40.00'
        },
        
        ],
        price :589.95},
    {
        number:100002,
        date:'Nov 10,2022 at 3:52 PM',
        type:'cancelled',
        detailProduct :[
            {
                name:'T-Shirt',
                quan:'1',
                price:'401.25'
            },
            {
                name:'Black Sneakers',
                quan:'2',
                price:'121.5'
            },
            {
                name:'Summer Dress',
                quan:'1',
                price:'40.99'
            },
            {
                name:'handbag',
                quan:'1',
                price:'20.20'
            },
            {
                name:'Galgxy A25s',
                quan:'1',
                price:'451.50'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            ],
            price :80.55},
    {
        number:100003,
        date:'May 18,2022 at 1:31 PM' ,
        type:'deliverd',
        detailProduct :[
            {
                name:'T-Shirt',
                quan:'1',
                price:'401.25'
            },
            {
                name:'Black Sneakers',
                quan:'2',
                price:'121.5'
            },
            {
                name:'Summer Dress',
                quan:'1',
                price:'40.99'
            },
            {
                name:'handbag',
                quan:'1',
                price:'20.20'
            },
            {
                name:'Galgxy A25s',
                quan:'1',
                price:'451.50'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },

        ],
        price :289.05},
    {
        number:100004,
        date:'Oct 7,2022 at 5:04 PM' ,
        type:'cancelled',
        detailProduct :[
            {
                name:'T-Shirt',
                quan:'1',
                price:'401.25'
            },
            {
                name:'Black Sneakers',
                quan:'2',
                price:'121.5'
            },
            {
                name:'Summer Dress',
                quan:'1',
                price:'40.99'
            },
            {
                name:'handbag',
                quan:'1',
                price:'20.20'
            },
            {
                name:'Galgxy A25s',
                quan:'1',
                price:'451.50'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
        ],
        price :528.82},
    {
        number:100005,
        date:'Oct 22,2022 at 9:14 AM' ,
        type:'processing',
        detailProduct :[
            {
                name:'T-Shirt',
                quan:'1',
                price:'401.25'
            },
            {
                name:'Black Sneakers',
                quan:'2',
                price:'121.5'
            },
            {
                name:'Summer Dress',
                quan:'1',
                price:'40.99'
            },
            {
                name:'handbag',
                quan:'1',
                price:'20.20'
            },
            {
                name:'Galgxy A25s',
                quan:'1',
                price:'451.50'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
        ],
        price :878.17},
    {
        number:100006,
        date:'Sep 28,2022 at 4:17 PM' ,
        type:'deliverd',
        detailProduct :[
            {
                name:'T-Shirt',
                quan:'1',
                price:'401.25'
            },
            {
                name:'Black Sneakers',
                quan:'2',
                price:'121.5'
            },
            {
                name:'Summer Dress',
                quan:'1',
                price:'40.99'
            },
            {
                name:'handbag',
                quan:'1',
                price:'20.20'
            },
            {
                name:'Galgxy A25s',
                quan:'1',
                price:'451.50'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
        ],
        price :420.65},
    {
        number:100007,
        date:'Aug 11,2021 at 8:00 AM' ,
        type:'cancelled',
        detailProduct :[
            {
                name:'T-Shirt',
                quan:'1',
                price:'401.25'
            },
            {
                name:'Black Sneakers',
                quan:'2',
                price:'121.5'
            },
            {
                name:'Summer Dress',
                quan:'1',
                price:'40.99'
            },
            {
                name:'handbag',
                quan:'1',
                price:'20.20'
            },
            {
                name:'Galgxy A25s',
                quan:'1',
                price:'451.50'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
        ],
        price :120.05},
    {
        number:100008,
        date:'Jun 5,2022 at 6:42 PM',
        type:'processing',
        detailProduct :[
            {
                name:'T-Shirt',
                quan:'1',
                price:'401.25'
            },
            {
                name:'Black Sneakers',
                quan:'2',
                price:'121.5'
            },
            {
                name:'Summer Dress',
                quan:'1',
                price:'40.99'
            },
            {
                name:'handbag',
                quan:'1',
                price:'20.20'
            },
            {
                name:'Galgxy A25s',
                quan:'1',
                price:'451.50'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
        ],
        price :58.45},
    {
        number:100009,
        date:'May 27,2022 at 1:47 AM' ,
        type:'deliverd',
        detailProduct :[
            {
                name:'T-Shirt',
                quan:'1',
                price:'401.25'
            },
            {
                name:'Black Sneakers',
                quan:'2',
                price:'121.5'
            },
            {
                name:'Summer Dress',
                quan:'1',
                price:'40.99'
            },
            {
                name:'handbag',
                quan:'1',
                price:'20.20'
            },
            {
                name:'Galgxy A25s',
                quan:'1',
                price:'451.50'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
        ],
        price :89.26},
    {
        number:100010,
        date:'Apr 13,2022 at 4:40 PM' ,
        type:'cancelled',
        detailProduct :[
            {
                name:'T-Shirt',
                quan:'1',
                price:'401.25'
            },
            {
                name:'Black Sneakers',
                quan:'2',
                price:'121.5'
            },
            {
                name:'Summer Dress',
                quan:'1',
                price:'40.99'
            },
            {
                name:'handbag',
                quan:'1',
                price:'20.20'
            },
            {
                name:'Galgxy A25s',
                quan:'1',
                price:'451.50'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
        ],
        price :58.98},
    {
        number:100011,
        date:'Feb 18,2022 at 7:22 PM' ,
        type:'processing',
        detailProduct :[
            {
                name:'T-Shirt',
                quan:'1',
                price:'401.25'
            },
            {
                name:'Black Sneakers',
                quan:'2',
                price:'121.5'
            },
            {
                name:'Summer Dress',
                quan:'1',
                price:'40.99'
            },
            {
                name:'handbag',
                quan:'1',
                price:'20.20'
            },
            {
                name:'Galgxy A25s',
                quan:'1',
                price:'451.50'
            },
            {
                name:'Shirt',
                quan:'2',
                price:'40.00'
            },
        ],
        price :59.25},
    
]; 

let trakOrderData =[
    {
        label:'Ordered and Approved ' ,
        status: 'Your order has been placed ' ,
        dataTime: 'Sat , 3rd Nov 11:45pm ',
    },
    {
        label:'Packed ' ,
        status: 'Your item has been packed  ' ,
        dataTime: 'Sun , 4th Nov 11:45am ',
    },
    {
        label:'Shipped' ,
        status: 'Your item has been Shipped ' ,
        dataTime: 'Sun , 4th Nov 3:30pm ',
    },
    {
        label:'Out for Delivery ' ,
        status: 'Your item is out for delivery ' ,
        dataTime: 'Sun , 4th Nov 5:30pm ',
    },
    {
        label:'Delivered' ,
        status: 'Your item has been delivered ' ,
        dataTime: 'Sun , 4th Nov 7:30pm ',
    },
]
let detailProduct =[
    {
        name:'T-Shirt',
        quan:'1',
        price:'401.25',
        type:'deliverd'
    },
    {
        name:'Black Sneakers',
        quan:'2',
        price:'121.5',
        type:'processing'
    },
    {
        name:'Summer Dress',
        quan:'1',
        price:'40.99',
        type:'cancelled'
    },
    {
        name:'handbag',
        quan:'1',
        price:'20.20'
    },
    {
        name:'Galgxy A25s',
        quan:'1',
        price:'451.50'
    },
    {
        name:'Shirt',
        quan:'2',
        price:'40.00'
    },
]
module.exports ={
    dataCategory,specialDeels,ordersData,trakOrderData,detailProduct,dataList,dataSubCategory
}

// export default dataCategory;
