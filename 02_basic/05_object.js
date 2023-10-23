function Rectangle(len,bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function(){
        console.log('drawing');
        // object creating using constructor function

        let rectangleObject=new Rectangle(4,6);

        rectangleObject.color='yellow';
        console.log(rectangleObject);
    }
}