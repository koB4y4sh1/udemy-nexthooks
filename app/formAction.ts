"use server";
export const formAction = async () => {

  console.log("server action")

  // 意図的に遅延
  await new Promise((resolve) => setTimeout(resolve, 1000)) //1s delay
  console.log("use data added to DB")
}