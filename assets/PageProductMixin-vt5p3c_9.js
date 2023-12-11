import{B as i}from"./BaseFooterSimple-dygpq0Zw.js";import{F as l,a as r,b as n,c,B as h,d as o}from"./card-image-SkxdPB-2.js";import{h as t}from"./axios-3ULUJdox.js";const g={components:{BaseFooterSimple:i,FilterRange:l,FilterCheckbox:r,FilterButton:n,FilterCheckboxModels:c,BasePagination:h,BaseBanner:o},data(){return{product:[],model:[],brand:new Set,condition:new Set,body:new Set,transmission:new Set,drive:new Set,fuel:new Set,promo:new Set,status:new Set,service:new Set,minPrice:0,maxPrice:0,minYear:0,maxYear:0,selectBrand:[],selectModel:[],selectCondition:[],selectStatus:[],selectService:[],selectPromo:[],selectBody:[],selectTransmission:[],selectDrive:[],selectFuel:[],selectMinPrice:"",selectMaxPrice:"",selectMinYear:"",selectMaxYear:"",reset:0,pageStart:"",pageEnd:"",loading:!1}},watch:{minPrice(){this.minPrice=Math.floor(this.minPrice/1e5)*1e5},maxPrice(){this.maxPrice=Math.ceil(this.maxPrice/1e5)*1e5},selectBrand(){if(this.selectBrand.length&&this.selectModel.length){this.model=t.getCarModels(this.product,this.selectBrand);return}if(!this.selectBrand.length){this.model=t.getCarModels(this.product);return}this.model=t.getCarModels(this.filteringProduct)},selectModel(){if(this.selectModel.length&&this.selectBrand.length){let e=this.model.map(s=>s.brand);this.brand=t.getUniqueElements(this.product,"brand",!0,e);return}if(!this.selectModel.length&&this.selectBrand.length){this.brand=t.getUniqueElements(this.product,"brand");return}if(!this.selectModel.length&&!this.selectBrand.length){this.model=t.getCarModels(this.product),this.brand=t.getUniqueElements(this.product,"brand");return}this.brand=t.getUniqueElements(this.filteringProduct,"brand")}},computed:{disabledResetButton(){return this.product.length===this.filteringProduct.length},filteringProduct(){return this.product.filter(e=>!this.selectBrand.length||this.selectBrand.includes(e.brand)).filter(e=>!this.selectModel.length||this.selectModel.includes(e.model)).filter(e=>!this.selectCondition.length||this.condition.size===this.selectCondition.length||this.selectCondition.includes(e.condition)).filter(e=>!this.selectBody.length||this.body.size===this.selectBody.length||this.selectBody.includes(e.body)).filter(e=>!this.selectTransmission.length||this.transmission.size===this.selectTransmission.length||this.selectTransmission.includes(e.transmission)).filter(e=>!this.selectDrive.length||this.drive.size===this.selectDrive.length||this.selectDrive.includes(e.drive)).filter(e=>!this.selectStatus.length||this.fuel.size===this.selectStatus.length||this.selectStatus.includes(e.status)).filter(e=>!this.selectService.length||this.fuel.size===this.selectService.length||this.selectService.includes(e.service)).filter(e=>!this.selectFuel.length||this.fuel.size===this.selectFuel.length||this.selectFuel.includes(e.fuel)).filter(e=>!this.selectPromo.length||this.promo.size===this.selectPromo.length||this.selectPromo.filter(s=>(e.promo??(e.promo=""),e.promo.includes(s))).length).filter(e=>!this.selectMinPrice||e.price>=this.selectMinPrice).filter(e=>!this.selectMaxPrice||e.price<=this.selectMaxPrice).filter(e=>!this.selectMinYear||e.year>=this.selectMinYear).filter(e=>!this.selectMaxYear||e.year<=this.selectMaxYear)}}};export{g as P};
