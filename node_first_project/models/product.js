const fs = require('fs');
const dirname = require('../util/paths');
const path = require('path');
const { get } = require('http');
const getProductsFromfile = (cb) => {
    const p = path.join(dirname,'data','products.json');
        fs.readFile(p,(err,filecontent)=>{
            if(err){
                cb([]);
            }
            
            console.log(JSON.parse(filecontent));
            cb(JSON.parse(filecontent));
        });
}
module.exports = class Product {
    constructor(title){
        this.title = title;
    }
    save(){
        const p = path.join(dirname,'data','products.json');
        getProductsFromfile((products)=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            });
        });
        
         
    }
    static fetchAll(cb){
        getProductsFromfile(cb);
        
    }

}