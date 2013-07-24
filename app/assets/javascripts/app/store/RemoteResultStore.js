Ext.define('Proximity.store.RemoteResultStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Proximity.model.Result',
        data: [
            {
                name: 'Avalanche Frozen Cocktails',
                street: 'Victorian Head Office : 1 Commercial Rd',
                suburb: 'Highett, 3190, VIC',
                location: '-37.948684,145.055862',
                phone: "1800 010 369",
                url: "http://www.avalanchecocktails.com.au",
                description: 'Party with the coolest cocktails  -  Avalanche Frozen Cocktails are made using REAL fruit and juices - not premix cordial.',
                image: 'http://www.avalanchecocktails.com.au/wp/wp-content/themes/eleven/slide/banner-home-1.jpg',
                category: 'business'
            },
            {
                name: 'Harry The Hirer',
                street: '81-95 Burnley St',
                suburb: 'Richmond, 3121, VIC',
                location: "-37.81499,145.00976",
                phone: "(03) 9429 8688",
                url: "http://www.harrythehirer.com.au",
                description: 'Two Locations in Melbourne: Richmond 9429 8688 and Preston 9480 5433',
                image: 'http://www.harrythehirer.com.au/images/styles/banners/thumb/homepage_a.jpg',
                category: 'business'
            },
            {
                name: 'Having A Party',
                street: "4 Lindsay Ave",
                suburb: "Nunawading, 3131, VIC",
                location: "-37.810769,145.177568",
                phone: "(03) 9894 2384",
                url: "http://www.havingaparty.com.au",
                description: 'Delivering our high quality party supplies across Melbourne, you can rely on us to make your party memorable!',
                image: 'http://www.havingaparty.com.au/Images/headerwedding5.jpg',
                category: 'business'
            },
            {
                name: 'Dalgarno Party Hire',
                street: "103 Gardenvale Rd",
                suburb: "Gardenvale, 3185, VIC",
                location: "-37.898018,145.007489",
                phone: "(03) 9596 8834",
                url: "http://www.dalgarnos.com.au",
                description: 'From an intimate party to a sit down dinner for several hundred - no function is too big or small. We have the products to assist. ',
                image: 'http://www.dalgarnos.com.au/sites/all/themes/energetic/images/h_back.png',
                category: 'business'
            },
            {
                name: 'Instant Marquees & Umbrellas',
                street: "51 Capella Crs",
                suburb: "Moorabbin, 3189, VIC",
                location: "-37.942827,145.075404",
                phone: "(03) 9532 3120",
                url: "http://www.instantmarqueehire.com.au",
                description: 'Melbournes pop-up marquee specialists - fully installed or do it yourself. The best value marquee hire in Melbourne.',
                image: 'http://www.instantmarqueesmelbourne.com.au/files/banner-corporate.jpg',
                category: 'business'
            }
        ],
        autoLoad: true,
        sorters: [
            { property: 'name', direction: 'ASC' }
        ],

        filters: null

        //group the store using the lastName field
//      groupField: 'narrative'
    }
});