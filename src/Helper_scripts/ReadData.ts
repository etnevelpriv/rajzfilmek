export const ReadData = async function (fileName:string) {
    try {
        const content = await fetch(`./${fileName}`);
        const data = await content.json();
        return data;
    } catch (err:Error | any) {
        throw new Error(err)
    }
};