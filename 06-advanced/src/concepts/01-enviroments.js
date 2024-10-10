
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const enviromentsComponent = ( element ) => {

    //forma de ver variables de entorno con vite
    //con node seria process.env
    console.log(import.meta.env);

    const html = `
        DEV: ${import.meta.env.DEV} <br>
        DEV: ${import.meta.env.PROD} <br>
        VITE_API_KEY: ${import.meta.env.VITE_API_KEY} <br>
        VITE_BASE_URL: ${import.meta.env.VITE_BASE_URL} <br>
    `;

    element.innerHTML = html;
}