import React from 'react'
import { useRouter } from 'next/router'
import Details from '../../sections/Details'
import Pagefooter from '../../sections/Pagefooter'

export default function DetailsPage() {
    const router = useRouter()
    const { pid } = router.query
    return (
    <div >
        {pid && <Details id={pid} />}
        <Pagefooter/>
    </div>
  )
}
