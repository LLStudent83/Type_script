import IContent from'./interfaceContent'
import Movie from './film'

export default class Cart {
    protected items: IContent[]=[];

    add(item:IContent): void {
        this.items.push(item);
    }

    getitems():IContent[] {
        return[...this.items];}
    }

    const buyJon: any = new Cart ();
    const avengers: IContent = new Movie ( 2005, 'USA', 'Avengers', 'action', '137 мин./2-17' );
    buyJon.add(avengers),
    console.log(buyJon);
    const allBuyJon: IContent[] = buyJon.getitems()
    console.log(allBuyJon);
