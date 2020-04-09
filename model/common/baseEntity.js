import {MapperEntity} from "json-mapper-object";

export class BaseEntity{
  success = false;
  message = '';
  code='';
  result=null;
  constructor(fromJson){
  }
  transformArray(rows,mapEntity){
    return(rows||[]).map((row)=>{
        return this.transformRow(row,mapEntity);
    })
 }
  transformRows(rows,mapEntity) {
    return (rows || []).map((row)=> {
      return this.transformRow(row,mapEntity);
    })
  }
  transformRow(row,mapEntity){
    return MapperEntity(mapEntity, row);
  }
}

export class ContainerEntity extends BaseEntity{
  constructor(fromService,entity){
    super(fromService);
    if(fromService&&typeof fromService==='object'){
      let data = fromService.data||fromService.result;
      this.data=super.transformRow(data || {},entity);
    }
  }
}
