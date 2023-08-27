class Rectangle{
    hight: number;
    width: number;
    constructor( hight: number,width: number,) {
    this.hight=hight
    this.width=width
    }
    getRectangle(): number {
    return this.hight*this.width }}
class Square extends Rectangle{
    constructor( hight: number,width: number,){
        super(hight,width)
    }
    area():number{
        return this.hight**2
    }
}
class Shape{
    info(){
        console.log("This is a shape")
    }
}