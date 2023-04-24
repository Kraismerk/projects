import { useRouter } from "next/router"

export default function () {
  const {query} = useRouter ()
    return (
        <div>
            <h1>Фото с id {query.id}</h1>
        </div>
    )




};