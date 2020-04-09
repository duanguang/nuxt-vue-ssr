import { BaseEntity } from './baseEntity';
export class PageEntity extends BaseEntity{
   result={
     total: 0,
     rows:[],
     pageSize:10,
     page:1,
     records:0
   };
   constructor(fromJson,entity){
       super(fromJson);
       if(typeof fromJson==='object'){ 
            this.result.page=fromJson.current||1;
            this.result.pageSize=fromJson.size||10;
            this.result.records=fromJson.pages||0;
            this.result.total=fromJson.total||0;
            this.result.rows=super.transformArray(fromJson.records,entity);
       }
   }
}