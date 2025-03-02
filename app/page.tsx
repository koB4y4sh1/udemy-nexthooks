"use client";

import { useFormStatus, useFormState } from "react-dom";
// import { formAction } from "./formAction";
import IncrimentButton from "./IncrementButton";
import { Action } from "./action";

// "use server"JSが動作しない環境においても実行できる（ネットワークが遅い、ハイドレーションを待つ必要がない）
// 尚、FEとBEの境界があいまいになるため、ごちゃつくデメリットもある

export default function Home() {
  
  // メリット：Sercer側で実行されるので、サーバークライアントのやり取り回数を少なくし、速度が少し向上する
  // 以下の書き方だとJavaScriptがない環境でもformが動作する
  // 漸次的に追加：ユーザーに見せれる部分から、（簡単に見せれる分から）段階的に見せていくことができる
  const [state, formDispatch] = useFormState(Action,0);
  
  // イベントハンドラーを作成する必要がない
  // const handleForm = () => {
  //   await fetch("api/...")
  // }
  return (
    <main className="flex main-h-screen flex-col item-center justify-between p-24">
      {/* <form action={formAction}>*/}
      <form action={formDispatch}>
        <IncrimentButton/>
      </form>
      <span>Count {state}</span>
    </main>
  );
};