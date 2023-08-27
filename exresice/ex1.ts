class Shape{

    info(){
        console.log("This is a shape")
    }
}
class Rectangle extends Shape{
    hight: number;
    width: number;
    constructor( hight: number,width: number,) {
        super()
    this.hight=hight
    this.width=width
    }
    
    info(): void {
        console.log("This is a Recktangle")
    }
    getRectangle(): number {
        let a= this.hight*this.width
    return a }
    scale(arg:number):this{
        this.hight+=arg
        this.width+=arg
        return this
    } 
    static combinEraea(rectangle1:Rectangle,rectangle2:Rectangle):Rectangle{
        const widthErea=rectangle1.width+=rectangle2.width
        const hightErea=rectangle1.hight+=rectangle2.hight
        return new Rectangle(widthErea,hightErea)
    }
}   
class ColoredRectangle extends Rectangle{
    color:string
    constructor( hight: number,width: number,color:string,){
    super(hight,width)
    this.color=color
    }
    info(): void {
        console.log(`this rectangle is ${this.color}`)
    }
} 
class Square extends Rectangle{
    constructor( hight: number,width: number,){
        super(hight,width)
    }
    area():number{
        return this.hight**2
    }
}
class shnape{
    constructor(){}
    draw():void{
        console.log("drawing a shape")
    }
    
}
class Triangle extends shnape{
    constructor(){
        super()
    }
    draw():void{
        console.log("drawing a triangle")
    }
}
class Circle extends shnape{
    constructor(){
        super()
    }
    draw():void{
        console.log("drawing a circle")
    }
}
class Square2 extends shnape{
    constructor(){
        super()
    }
    draw():void{
        console.log("drawing a square")
    }
}
function renderShapes(shapes: shnape[]): void {
    for (const i of shapes) {
        i.draw();
    }
}
const circle = new Circle();
const triangle = new Triangle();
const square = new Square2();
const shapesArray: shnape[] = [circle, triangle, square];
renderShapes(shapesArray);