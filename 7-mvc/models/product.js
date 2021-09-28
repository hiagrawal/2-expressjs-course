
//adding a product model for data
//const products = [];

//storing data in files via the model
const fs = require('fs');
const path = require('path');

const fileNameWithPath = path.join(__dirname, '..', 'data' , 'products.json');

const getProductsFromFile = cb => {
    fs.readFile(fileNameWithPath, (err, fileContent) => {
        console.log(err);
        if(err){
            cb([]);
        }
        cb(JSON.parse(fileContent));
    })
}

module.exports = class Product{
    constructor(title){
        this.title = title
    }

    save(){
        //products.push(this);

        //const fileNameWithPath = path.join(__dirname, '..','data' , 'products.json');

        // fs.readFile(fileNameWithPath, (err, fileContent) => {
        //     //if error, it means files doesnt exist then craete empty products array
        //     const products = [];
        //     //if not
        //     if(!err){
        //        products = JSON.parse(fileContent);
        //     }
        //     products.push(this);
        //     fs.writeFile(fileNameWithPath, JSON.stringify(products), (err) =>{
        //        console.log(err);
        //     })
        // })

        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(fileNameWithPath, JSON.stringify(products), (err) =>{
               console.log(err);
            })
        })


    }

    //since readFile is async call here hence it will not stop the execution 
    //and run products undefimed in products.js controller fecthAll function
    //to fix this, will have to give callack function
    static fetchAll(cb){
        //return products;
        //const fileNameWithPath = path.join(__dirname, '..', 'data' , 'products.json');
        // fs.readFile(fileNameWithPath, (err, fileContent) => {
        //     console.log(err);
        //     if(err){
        //         //return [];
        //         cb([]);
        //     }
        //     //return JSON.parse(fileContent);
        //     cb(JSON.parse(fileContent));
        // })

        getProductsFromFile(cb);
    }

}