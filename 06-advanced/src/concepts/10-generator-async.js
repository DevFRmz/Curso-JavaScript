import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorAsincComponent = async( element ) => {

    const heroGenerator = getHeroAsync();
    let isFinished = false;

    do{
        let {value, done} = await heroGenerator.next();
        isFinished = done;

        if(isFinished)
            break;

        element.innerHTML = `${value}`;
    }while(!isFinished)
}


async function* getHeroAsync(){
    for(const hero of heroes){
        await sleep();
        yield hero.name;
    }
}

const sleep = async() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
}