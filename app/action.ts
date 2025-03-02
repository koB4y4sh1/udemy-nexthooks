"use server";

export const Action = async(previousState:number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(previousState);
    return previousState + 1;
}