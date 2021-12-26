const data = {
    products: [
        {
            id: 1,
            name: 'Macbook',
            model: 'Pro',
            price: 2000,
            image: 'https://i.expansys.net/img/b/363185/apple-macbook-pro-14-inch.jpg'
        },
        {
            id: 2,
            name: 'Macbook',
            model: 'Air',
            price: 1300,
            image: 'https://i.gadgets360cdn.com/products/large/macbook-air-m1-2020-db-800x600-1607604365.png'
        },
        {
            id: 3,
            name: 'Lenovo',
            model: 'Ideapad 3',
            price: 800,
            image: 'https://img.ep-cdn.com/images/500/500/dm/dmdzkmsnxjslhlbkbamn.jpg'
        },
        {
            id: 4,
            name: 'Lenovo',
            model: 'Ideapad 5',
            price: 1000,
            image: 'https://www.notebookcheck.net/uploads/tx_nbc2/LenovoIdeaPad5-15ALC05__1__01.jpg'
        },
        {
            id: 5,
            name: 'HP',
            model: 'Pavilion',
            price: 600,
            image: 'https://img.gigatron.rs/img/products/large/HP-Pavilion-15-eh0005nm-A3150U-31X82EA-99.png'
        },
        {
            id: 6,
            name: 'Asus',
            model: 'ZenBook',
            price: 1450,
            image: 'http://www.ctshop.rs//img/products/2020-11-03/asus-zenbook-pro-duo-ux581lv-h2002r-laptop-intel-hexa-core-i7-10750h-15-6-quot-uhd-16gb-1tb-ssd-geforce-rtx2060-win10-pro-plavi_AJJjE_3.jpg'
        },
    ],
    
    idCart: 0,

    cart: [],

    findProduct: function(id){
        for(let i = 0; i < this.products.length; i++){
            if(this.products[i].id === +id){
                return this.products[i];
            }
        }
    }
}

export default data;
