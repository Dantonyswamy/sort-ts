
export abstract class Sorter {
    abstract length: number;
    abstract compare(leftIndex:number, rightIndex:number):boolean;
    abstract swap(leftIndex:number, rightIndex:number):void; 
    sort(): void{       
        const {length} = this;
        for(let i=0;i<length;i++){
            for(let j=0;j<length-i-1;j++){
                // compare values at the 2 indexes                
              if(this.compare(j, j+1)){
                  // swap the numbers if the above condition is true
                  this.swap(j,j+1);                 
              }      
            }
        }
    }
}