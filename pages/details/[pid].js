import React from 'react'
import { useRouter } from 'next/router'
import Details from '../../sections/Details'
import Pagefooter from '../../sections/Pagefooter'
import Nav from "../../components/Nav";


export default function DetailsPage() {
    const router = useRouter()
    const { pid } = router.query
    return (
    <div >
        <Nav />
        {pid && <Details id={pid} />}
        <Pagefooter/>
    </div>
  )
}
