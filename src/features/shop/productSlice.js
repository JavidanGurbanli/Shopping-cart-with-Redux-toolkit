import { createSlice } from '@reduxjs/toolkit';
export const productSlice = createSlice({
    name: 'product',
    initialState: {items: [
        {
            id:1,
            name:'ALMA',
            price:1.20,
            url:'https://unimall.az/images/thumbnails/212/242/detailed/180/49_sex6-nj.jpg',
            amount:0
        },
        {
            id:2,
            name:'BANAN',
            price:2.20,
            url:'data:image/webp;base64,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',
            amount:0
        },
        {
            id:3,
            name:'NAR',
            price:2.00,
            url:'data:image/webp;base64,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',
            amount:0
        },
        {
            id:4,
            name:'POMIDOR',
            price:1.50,
            url:'data:image/webp;base64,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',
            amount:0   
        },
        {
            id:5,
            name:'KARTOF',
            price:1.10,
            url:'https://unimall.az/images/thumbnails/212/242/detailed/234/product_81_1.jpg',
            amount:0
        },
        {
            id:6,
            name:'XIYAR',
            price:1.60,
            url:'https://unimall.az/images/thumbnails/212/242/detailed/234/39a5bc8cdbd7c2b89cd594fa1129c850.jpg',
            amount:0
        },
        {
            id:7,
            name:'KÖK',
            price:0.60,
            url:'https://unimall.az/images/thumbnails/212/242/detailed/180/34_lpl6-yu.jpg',
            amount:0
        },
        {
            id:8,
            name:'BADIMCAN',
            price:0.90,
            url:'https://unimall.az/images/thumbnails/212/242/detailed/180/22_kfvi-qx.jpg',
            amount:0
        },
        {
            id:9,
            name:'KƏLƏM',
            price:2.30,
            url:'https://unimall.az/images/thumbnails/212/242/detailed/180/20_6s1n-ib.jpg',
            amount:0
        },
        {
            id:10,
            name:'SOĞAN',
            price:0.40,
            url:'data:image/webp;base64,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',
            amount:0
        },
        {
            id:11,
            name:'BİBƏR',
            price:0.90,
            url:'https://unimall.az/images/thumbnails/212/242/detailed/180/26_gga4-w7.jpg',
            amount:0
        },
        {
            id:12,
            name:'ACI BİBƏR',
            price:0.80,
            url:'https://unimall.az/images/thumbnails/212/242/detailed/180/25_x9s5-xh.jpg',
            amount:0
        },
        {
            id:13,
            name:'BALQABAQ',
            price:1.10,
            url:'https://unimall.az/images/thumbnails/212/242/detailed/180/24_tgh9-0i.jpg',
            amount:0
        },
        {
            id:14,
            name:'ÇUĞUNDUR',
            price:1.50,
            url:'https://unimall.az/images/thumbnails/212/242/detailed/180/30_b3hu-ve.jpg',
            amount:0
        },
        {
            id:15,
            name:'TURP',
            price:1.30,
            url:'https://unimall.az/images/thumbnails/212/242/detailed/180/42_qvx4-92.jpg',
            amount:0
        }
  ],
  addedItems:[],
  total: 0,
  totalQuantity: 0
    },
    reducers: {
      decreseAmount: (state,action) => {
        const cartItem = state.addedItems.find((item) => item.id === action.payload);
        cartItem.amount > 0 ? state.total=Math.abs(state.total-cartItem.price) : state.total = 0.00;
        cartItem.amount > 0 ? cartItem.amount= cartItem.amount-1 : cartItem.amount=0;
        state.totalQuantity-=1;
      },
      increseAmount: (state, action) => {
        const cartItem = state.addedItems.find((item) => item.id === action.payload);
        cartItem.amount = cartItem.amount + 1;
        state.total=state.total+cartItem.price;
        state.totalQuantity+=1
      },
      addProduct: (state,action) => {
        state.items.map(item => item.id===action.payload ? (item.amount===0 ? ( state.addedItems.push(item)) : item.amount+=1) : null)
        state.addedItems.map(item => item.id===action.payload ? (item.amount+=1, state.total+=(item.price)): null )
        state.totalQuantity+=1
      },
      removeProduct: (state,action) => {
        state.addedItems.map(item => item.id===action.payload ? state.totalQuantity=state.totalQuantity-item.amount : null )
        state.addedItems.map(item => item.id===action.payload ? (state.total-=(item.price*item.amount),item.amount=0): null )
        state.items.map(item =>  item.id===action.payload ? item.amount=0 : null) 
        const filtereditem = state.addedItems.filter(item => item.id!==action.payload) 
        state.addedItems = filtereditem
      },    
    },
  });
  export const {addProduct,removeProduct,increseAmount ,decreseAmount} = productSlice.actions;
  export default productSlice.reducer;