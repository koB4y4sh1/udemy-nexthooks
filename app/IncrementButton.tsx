// "use client"
// 親がclient Componentのため子要素も自動的にClientになる

import { useFormStatus } from "react-dom";

const IncrimentButton = () => {
  
  const {pending} = useFormStatus();
  
  return (
    <>
      <button className="px-4 py-2 border-2 border-red-400 rounded-md">Imcrement</button>
      <p>{pending && "送信中です..."}</p>
    </>
  )
}

export default IncrimentButton